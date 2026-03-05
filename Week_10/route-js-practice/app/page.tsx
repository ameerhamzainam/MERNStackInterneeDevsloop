"use client";
import Image from "next/image";
export default function Home() {
  const handlePostRequest = async () => {
    let data = await fetch("/api", {
      method:"POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({name:"Ameer Hamza Rubani Posted"})
    })
    .then((response) => response.json());
  };

  
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl">Welcome to the Home Page</h2>
      <button className="cursor-pointer bg-white text-black rounded px-2 py-2" onClick={handlePostRequest}>Click me for Post Request</button>
    </div>
    </div>
  );
}
