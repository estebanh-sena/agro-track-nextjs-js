import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList } from "@fortawesome/free-solid-svg-icons";
export async function getServerSideProps() {
  const todayVisits = [
    {
      id: "3",
      title: "Emergency Inspection - Dairy Unit",
      date: new Date().toISOString().split("T")[0],
      description:
        "Urgent check on livestock nutrition and temperature control.",
    },
  ];

  return {
    props: { visits: todayVisits },
  };
}

export default function TodayVisits({ visits }) {
  return (
    <main className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">📆 Today's Visits</h1>

        <ul className="space-y-4 mb-6">
          {visits.map((visit) => (
            <li key={visit.id} className="border p-4 rounded shadow">
              <h2 className="font-semibold text-lg">{visit.title}</h2>
              <p className="text-sm text-gray-500">{visit.date}</p>
              <p className="text-gray-700">{visit.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <Link href="/" className="text-blue-600 underline">
          <FontAwesomeIcon icon={faHouse} className="ml-2" /> Back to Home
        </Link>
        <Link href="/field-visits" className="text-violet-600 underline">
          <FontAwesomeIcon icon={faList} className="me-1" /> Back list
        </Link>
      </div>
    </main>
  );
}
