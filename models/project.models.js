import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectName: "String",
  projectDescription: "String",
  usedTechnologiesID: "String",
  projectImage: "String",
  projectLiveUrl: "String",
  projectGithubFrontendUrl: "String",
  projectGithubBackendUrl: "String",
  projectBUllPoints: ["String"],
});

export default mongoose.model("Project", ProjectSchema, "projects");
