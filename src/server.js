import express from "express";
import morgan from "morgan";
import cors from "cors";
import corsOptions from "./libs/cors.js";
import compression from "compression";
import compOptions from "./libs/compression.js";
import userRoutes from "./routes/user.routes.js"
import baseboardRoutes from "./routes/baseboard.routes.js"
import stepRoutes from "./routes/steps.routes.js"
import underlaymentRoutes from "./routes/underlayment.routes.js"
import floorRoutes from "./routes/floor.routes.js"
import setRoutes from "./routes/set.routes.js"
import moldingRoutes from "./routes/molding.routes.js"

const server = express();

server.use(cors(corsOptions));
server.use(morgan("dev"));
server.use(express.json());
server.use(compression(compOptions))

export default server;
