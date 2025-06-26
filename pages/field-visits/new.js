import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NewVisit() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    description: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const data = await res.json();
      router.push(`/field-visits/${data.id}`);
    } else {
      alert("Failed to create visit");
    }
  };

  return (
    <>
      <Head>
        <title>New Field Visit</title>
      </Head>
      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create New Visit 📝</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Visit title"
            value={form.title} //bind the title input to form state
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 flex items-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faCalendarPlus} className="me-1" />
              Save Visit
            </button>
            <Link
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
            >
              <FontAwesomeIcon icon={faHouse} className="me-2" /> Back to Home
            </Link>
            <Link
              href="/field-visits"
              className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 flex items-center"
            >
              <FontAwesomeIcon icon={faList} className="me-2" /> Back list
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
