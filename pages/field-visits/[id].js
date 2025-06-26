import { getAllVisits } from "@/lib/visits";
import { useRouter } from "next/router";
import Head from "next/head";
import VisitCard from "@/components/VisitCard";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

const URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getStaticPaths() {
  const response = await fetch(URL + "/api/visits");
  const visits = await response.json();

  // const visits = await getAllVisits();
  const paths = visits.map((visit) => ({
    params: { id: visit.id.toString() },
  }));

  return {
    paths,
    fallback: false, // If a visit is not found, show a 404 page
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${URL}/api/visits/${params.id}`);
  if (!res.ok) {
    notFound: true;
  }
  const visit = await res.json();
  return {
    props: {
      visit,
    },
  };
}

export default function VisitDetail({ visit }) {
  const [visits, setVisits] = useState([]); //hooks

  useEffect(() => {
    // Fetch visits data from the API
    fetch("/api/visits")
      .then((response) => response.json())
      .then((data) => setVisits(data))
      .catch((error) => console.error("Error fetching visits:", error));
  }, []);

  const router = useRouter();
  const { id } = router.query;

  if (!visit) return <p>Loading...</p>;

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this visit?")) return;

    const response = await fetch(`/api/visits/${visit.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/field-visits");
    } else {
      alert("Failed to delete the visit.");
    }
  };

  const handleEdit = () => {
    router.push(`/field-visits/${visit.id}/edit`);
  };

  function funcionModificar() {
    console.log("Modificar visita desde el boton");
  }

  return (
    <>
      <Head>
        <title>AgroTracking | Visit #{id}</title>
        <meta
          name="description"
          content={`Details for visit #${id} - ${visit.title}`}
        />
      </Head>
      <main className="p-8">
        <h1 className="font-semibold text-xl mb-4">Visit #{id}</h1>
        <ul>
          <VisitCard
            visit={visit}
            ShowLink={false}
            onDelete={handleDelete}
            onEdit={handleEdit}
            modificar={funcionModificar}
          />
        </ul>
      </main>
    </>
  );
}
