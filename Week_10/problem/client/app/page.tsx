'use client';
import Button from "@/components/Button";
import { useState } from "react";
import {generateEmployees, saveEmployees,clearEmployees} from "@/services/api";


export default function Home() {
  const [employees, setEmployees] = useState<any[]>([]);

  const handleGenerate = async () => {
    const data = await generateEmployees();
    setEmployees(data);
    console.log("Generated Employees:", data);
    console.log(data);
  };

  const handleSave = async () => {
    if (!employees.length) return alert("Generate first!");
    const res = await saveEmployees(employees);
    alert(res.message);
  };

  const handleClear = async () => {
    const res = await clearEmployees();
    alert(res.message);
    setEmployees([]);
  };
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center mt-5  bg-zinc-50 font-sans dark:bg-black">
       <h1 className="text-3xl">Welcome to Random Employee data saver</h1>
      <div className="flex gap-4">
       <Button label="Generate Employees" onClick={handleGenerate}/>
       <Button label="Save data" onClick={handleSave}/>
       <Button label="Clear data" onClick={handleClear}/>
      </div>
    </div>
  );
}
