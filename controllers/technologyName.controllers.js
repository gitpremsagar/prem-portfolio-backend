import TechnologyName from "../models/technologyName.model.js";

export const getAllTechnologyNames = async (req, res) => {
  try {
    const technologyNames = await TechnologyName.find();
    res.json(technologyNames);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
