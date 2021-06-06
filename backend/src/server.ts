import express from "express";
import "./database/connection";

const app = express();

app.get("/", (req, resp) => {
  return resp.json({ message: "hello world" });
});

app.listen(3333);
