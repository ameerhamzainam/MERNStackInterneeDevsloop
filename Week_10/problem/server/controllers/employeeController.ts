import Employee from "../models/Employee";
import  GenerateRandomEmployees  from "../utils/GenerateDummy";
import { Request, Response } from "express";

//Generate Preview without saving to DB

export const generatePreviewEmployees = (req: Request, res:Response) => {
    const randomEmployees = GenerateRandomEmployees(10);
    try{
    res.json(randomEmployees);

    }
    catch(err:any){
        res.status(500).json({message: "Error generating preview employees", error: err.message || ''});
    }
}

export const saveGeneratedEmployees = async ( req: Request, res: Response) => {
    try{
        const randomEmployees = req.body;
        await Employee.insertMany(randomEmployees);
        res.json({message: "Employees saved successfully"});
    }
    catch(err:any){
        res.status(500).json({message: "Error While saving employees", error: err.message || ''});
    }
}

export const clearEmployees = async ( req: Request, res: Response) => {
    try{
        await Employee.deleteMany({});
        res.json({message: "All employees cleared successfully"});
    }
    catch(err:any){
        res.status(500).json({message: "Error While clearing employees", error: err.message || ''});
    }
}