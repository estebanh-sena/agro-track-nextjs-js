import VisitCard from "@/components/VisitCard";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

export default function VisitApiPage() {
  const [visits, setVisits] = useState([]); //hooks

  useEffect(() => {
    // Fetch visits data from the API
    fetch("/api/visits")
      .then((response) => response.json())
      .then((data) => setVisits(data))
      .catch((error) => console.error("Error fetching visits:", error));
  }, []);

  return (
    <>
      <Head>
        <title>AgroTraking | API Visits</title>
        <meta name="description" content="List of field visits" />
      </Head>
      <main>
        <h1 className="text-2xl font-bold mb-4">
          <FontAwesomeIcon
            icon={faPuzzlePiece}
            className="me-1 text-green-600"
          />
          Vistis from Internal API
        </h1>
        {visits.length === 0 ? (
          <p>Loading visits...</p>
        ) : (
          <ul className="space-y-4">
            {visits.map((visit) => (
              <VisitCard key={visit.id} visit={visit} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
