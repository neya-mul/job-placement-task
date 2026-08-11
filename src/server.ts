import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./lib/prisma";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/users", async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });

  res.json({
    success: true,
    data: user,
  });
});

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({
    success: true,
    data: users,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});