export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json([
      {
        id: 1,
        name: "John Doe",
        email: "john@email.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@emial.com",
      },
    ]);
  }
}
