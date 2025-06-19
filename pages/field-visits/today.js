// SSR - Server Side Rendering
async function getServerSideProps() {
  const todayVisits = [
    {
      id: 1,
      title: "Visita a Finca Santa María",
      date: new Date().toISOString().split("T"),
      description: "Revisión de cultivos de café y plátano.",
    },
  ];

  return {
    props: {
      visits: todayVisits,
    },
  };
}

function TodayVisits({ visits }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4"> Field Visit Records</h1>
      <ul className="space-y-4">
        {visits.map((finca) => (
          <li key={finca.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{finca.title}</h2>
            <p className="text-sm text-gray-500">Fecha visita: {finca.date}</p>
            <p className="text-gray-700">Descripción: {finca.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export { TodayVisits as default, getServerSideProps };
