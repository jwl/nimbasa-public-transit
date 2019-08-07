import http from "http";
import express from "express";
import { applyMiddleWare } from "./utils";
import middleware from "./middleware";

const router = express();
applyMiddleWare(middleware, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
