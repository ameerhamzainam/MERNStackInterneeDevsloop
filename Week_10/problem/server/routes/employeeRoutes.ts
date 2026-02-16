import express from "express";
import { generatePreviewEmployees, saveGeneratedEmployees, clearEmployees } from "../controllers/employeeController";

const router = express.Router();
const app = express();

router.get('/generate', generatePreviewEmployees);
router.post('/save', saveGeneratedEmployees);
router.delete('/clear', clearEmployees);

export default router;