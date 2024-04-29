import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToMongoDB from "./configs/db.js";
import projectRouteHandlers from "./routes/project.routes.js";
import technologyNamesHandlers from "./routes/technologyName.routes.js";

const app = express();
const port = process.env.PORT || 9000;

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/projects", projectRouteHandlers);
app.use("/api/technology-names", technologyNamesHandlers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}\n http://localhost:${port}`);
});
