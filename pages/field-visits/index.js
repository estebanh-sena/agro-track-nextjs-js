import Link from "next/link";
import { visits } from "../../lib/visits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faHouse,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

export async function getStaticsProps() {
  // This function can be used to fetch data if needed
  // For now, we are not fetching any data
  return {
    props: { visits },
  };
}

export default function FieldVisitList() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Field Visit Records</h1>

      <ul className="list-none ml-6 mb-4 text-gray-700 space-y-4">
        {visits.map((visit) => (
          <li key={visit.id} className="border p-4 rounded shadow ">
            <h2 className="font-semibold text-lg">{visit.title}</h2>
            <p className="text-sm text-gray-500">{visit.date}</p>
            <p className="text-gray-700">{visit.description}</p>
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <Link href="/" className="text-blue-600 underline">
          <FontAwesomeIcon icon={faHouse} className="ml-2" /> Back to Home
        </Link>
        <Link href="/field-visits/new" className="text-green-600 underline">
          New Visit
          <FontAwesomeIcon icon={faSquarePlus} className="ms-1" />
        </Link>
        <Link href="/field-visits/today" className="text-purple-600 underline">
          View Today's Visits (SSR){" "}
          <FontAwesomeIcon icon={faCalendarDay} className="ms-1" />
        </Link>
      </div>
    </main>
  );
}
