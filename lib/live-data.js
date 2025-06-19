export async function getAllVisits() {
  return [
    {
      id: 99,
      title: "Visita a Finca Santa María",
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
      description: "Revisión de cultivos de café y plátano.",
    },
    {
      id: 100,
      title: "Visita a Finca El Progreso",
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
      description: "Inspección general de pastos y sistemas de riego.",
    },
    {
      id: 101,
      title: "Análisis de suelo en zona rural",
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
      description:
        "Recolección de muestras para análisis de composición del suelo.",
    },
  ];
}
