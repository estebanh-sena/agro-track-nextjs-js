let visits = [
  {
    id: 1,
    title: "Visit 1",
    date: "2023-10-01",
    description: "Description for visit 1",
  },
  {
    id: 2,
    title: "Visit 2",
    date: "2023-10-02",
    description: "Description for visit 2",
  },
  {
    id: 3,
    title: "Visit 3",
    date: "2023-10-03",
    description: "Description for visit 3",
  },
  {
    id: 4,
    title: "Visit 4",
    date: "2023-10-04",
    description: "Description for visit 4",
  },
  {
    id: 5,
    title: "Visit 5",
    date: "2023-10-05",
    description: "Description for visit 5",
  },
];

export default function handler(req, res) {
  const { id } = req.query;
  const index = visits.findIndex((visit) => visit.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Visit not found" });
  }

  if (req.method === "GET") {
    return res.status(200).json(visits[index]);
  }

  if (req.method === "PUT") {
    const { title, date, description } = req.body;
    visits[index] = { ...visits[index], title, date, description };
    return res.status(200).json(visits[index]);
  }

  if (req.method === "DELETE") {
    visits.splice(index, 1);
    return res.status(204).end();
  }
}
