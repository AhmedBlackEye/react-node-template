import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "From backend" });
});

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
