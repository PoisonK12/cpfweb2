import express from "express";
import morgan from "morgan";
import cors from "cors";
import corsOptions from "./libs/cors.js";
import compression from "compression";
import compOptions from "./libs/compression.js";

const server = express();

server.use(cors(corsOptions));
server.use(morgan("dev"));
server.use(express.json());
server.use(compression(compOptions))

export default server;
