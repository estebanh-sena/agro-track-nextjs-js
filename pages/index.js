import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="p-6 min-h-screen flex flex-col items-center justify-center bg-green-100 geistSans">
      <h1
        className={`${geistSans.className} text-3xl font-bold text-green-800 mb-4`}
      >
        Agro Tracking System
      </h1>
      <p
        className={`${geistMono.className} text-gray-700 mb-6 text-center max-w-md geistMono`}
      >
        A web application for managing and recording technical field visits
        conducted by students and instructors.
      </p>
      <Link
        href="/field-visits"
        className={`${geistMono.className} bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 geistMono`}
      >
        View Field Visits{" "}
        <FontAwesomeIcon icon={faSquareUpRight} className="ml-2" />
      </Link>
    </main>
  );
}
