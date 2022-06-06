import express from "express";
const app = express();

import diariesRouter from "./routes"

app.use(express.json()); //middleware que transforma la req.body a un json

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!! ");
  res.send("pong");
});

app.use("/api/diaries", diariesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
