import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectName: "String",
  projectDescription: "String",
  usedTechnologiesIds: ["number"],
  projectImage: "String",
  projectLiveUrl: "String",
  projectGithubFrontendUrl: "String",
  projectGithubBackendUrl: "String",
  projectBUllPoints: ["String"],
});

export default mongoose.model("Project", ProjectSchema, "projects");
