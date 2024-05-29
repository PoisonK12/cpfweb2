import server from "./server.js";
import { connectDB } from "./db.js";

connectDB();
server.listen(3000, () => {
  console.log("Server listening on port: ", 3000);
});
