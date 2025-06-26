import Link from "next/link";

function VisitCard({ visit, ShowLink = true, onDelete, onEdit, modificar }) {
  const title = visit.title || "Visita al campo";
  return (
    <li className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg text-green-700">
        {ShowLink ? (
          <Link href={`/field-visits/${visit.id}`} className="hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="text-sm text-gray-500">{visit.date}</p>
      <p className="text-gray-700">{visit.description}</p>
      {(onDelete || onEdit) && (
        <div className="mt-4 flex gap-4">
          {onEdit && (
            <button
              onClick={onEdit}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          )}

          <button
            onClick={modificar}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            modificar
          </button>
        </div>
      )}
    </li>
  );
}

export { VisitCard as default };
