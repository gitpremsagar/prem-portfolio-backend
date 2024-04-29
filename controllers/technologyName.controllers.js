import TechnologyName from "../models/technologyName.model.js";

export const createTechnologyName = async (req, res) => {
  const technologyName = new TechnologyName({
    technologyName: req.body.technologyName,
    description: req.body.description,
  });

  try {
    const newTechnologyName = await technologyName.save();
    res.status(201).json(newTechnologyName);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllTechnologyNames = async (req, res) => {
  try {
    const technologyNames = await TechnologyName.find();
    res.json(technologyNames);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
