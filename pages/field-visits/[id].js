import { getAllVisits } from "@/lib/visits";
import { useRouter } from "next/router";
import Head from "next/head";
import VisitCard from "@/components/VisitCard";

export async function getStaticPaths() {
  const visits = await getAllVisits();
  const paths = visits.map((visit) => ({
    params: { id: visit.id.toString() },
  }));

  return {
    paths,
    fallback: false, // If a visit is not found, show a 404 page
  };
}

export async function getStaticProps({ params }) {
  const visits = await getAllVisits();
  const visit = visits.find((v) => v.id.toString() === params.id);
  return {
    props: {
      visit,
    },
  };
}

export default function VisitDetail({ visit }) {
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
          />
        </ul>
      </main>
    </>
  );
}
