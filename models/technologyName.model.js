import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TechnologyNameSchema = new Schema({
  name: "String",
  description: "String",
});

export default mongoose.model(
  "TechnologyName",
  TechnologyNameSchema,
  "technologyNames"
);
