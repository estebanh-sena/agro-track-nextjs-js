const visits = [
  {
    id: "1",
    title: 'Visit to "El Progreso" Farm',
    date: new Date().toISOString().split("T"),
    // date: "2024-06-01",
    description: "General inspection of pasture and irrigation systems.",
  },
  {
    id: "2",
    title: "Soil analysis in rural area",
    date: new Date().toISOString().split("T"),
    // date: "2024-06-05",
    description: "Sample collection for soil composition analysis.",
  },
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

export default function handler(req, res) {
  res.status(200).json(visits);
}
