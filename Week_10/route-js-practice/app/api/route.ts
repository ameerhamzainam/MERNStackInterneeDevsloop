import { NextResponse } from "next/server";

export async function GET(request: Request) {}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {
    const url = request.url;
    console.log("url was :",url);
    let data = request.json();
    return NextResponse.json({ message:"Data received successfully"
    },{ status:203},);
}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
export async function OPTIONS(request: Request) {}