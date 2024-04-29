import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TechnologySchema = new Schema({
  name: "String",
  description: "String",
});

export default mongoose.model("Technology", TechnologySchema, "technologies");
