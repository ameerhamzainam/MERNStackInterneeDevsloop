import mongoose from "mongoose";
import express from "express";
import { Course } from "./models/Course.js";

let con = await mongoose.connect("mongodb://localhost:27017/Sigma");

const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const course = new Course({
        name: "NodeJS",
        price: 100,
        instructor: "John Doe"
    })
    
    if(course.save()){
        res.send("Course saved successfully")
    }else{
        res.send("Course not saved")
    }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})