import Link from "next/link";
export default function UsersPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">👤 User Management</h1>
      <p className="text-gray-700 mb-4">
        This page is under construction. Please check back later.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="text-blue-600 underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
