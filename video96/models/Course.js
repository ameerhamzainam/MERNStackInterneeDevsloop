import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema({
  name: String,
  price: Number,
  instructor: String
}, { collection: "Course" })

export const Course = mongoose.model("Course", CourseSchema)