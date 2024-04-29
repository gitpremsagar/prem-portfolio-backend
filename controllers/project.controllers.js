import Project from "../models/project.model.js";

export const createProject = async (req, res) => {
  const project = new Project({
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    usedTechnologiesIds: req.body.usedTechnologiesIds,
    projectImage: req.body.projectImage,
    projectLiveUrl: req.body.projectLiveUrl,
    projectGithubFrontendUrl: req.body.projectGithubFrontendUrl,
    projectGithubBackendUrl: req.body.projectGithubBackendUrl,
    projectBUllPoints: req.body.projectBUllPoints,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
