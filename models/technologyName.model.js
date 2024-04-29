import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TechnologyNameSchema = new Schema({
  technologyName: "String",
  description: "String",
});

export default mongoose.model(
  "TechnologyName",
  TechnologyNameSchema,
  "technologyNames"
);
