import "@/lib/visits";
import { getAllVisits } from "@/lib/visits";
import VisitCard from "@/components/VisitCard";

export async function getStaticProps() {
  const visits = await getAllVisits();
  return {
    props: {
      visits,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default function FieldVisitList({ visits }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4"> Field Visit Records</h1>
      <ul className="space-y-4">
        {visits.map((finca) => (
          <VisitCard key={finca.id} visit={finca} />
        ))}
      </ul>
    </main>
  );
}
