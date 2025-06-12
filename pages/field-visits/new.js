import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
export default function NewFieldVisit() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="text-xl font-bold mb-4">
          📝 Register a New Field Visit
        </h1>
        <p className="text-gray-600">
          This page will contain a form to submit new visit records.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/" className="text-blue-600 underline">
          <FontAwesomeIcon icon={faHouse} className="ml-2" /> Back to Home
        </Link>
        <Link href="/field-visits" className="text-violet-600 underline">
          <FontAwesomeIcon icon={faList} className="me-1" /> Back list
        </Link>
        <Link href="/field-visits/new" className="text-green-600 underline">
          Add
          <FontAwesomeIcon icon={faCalendarPlus} className="ms-1" />
        </Link>
      </div>
    </main>
  );
}
