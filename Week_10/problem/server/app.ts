import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employeeRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);
app.use(cors({ origin: "http://localhost:3000" }));

export default app;