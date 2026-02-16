import mongoose from "mongoose";

const Schema = mongoose.Schema;


const EmployeeSchema = new Schema({
  name: String,
  Salary: Number,
  Language: String,
  city: String,
  isManager: Boolean,
});
export default mongoose.model("Employee", EmployeeSchema);