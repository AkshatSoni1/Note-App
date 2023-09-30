import connectToMongoDB from "@/libs/mongoose";
import Notes from "@/models/Notes";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description} = await request.json();
    await connectToMongoDB();
    await Notes.create({title, description});
    return NextResponse.json({ message: "Note Created" }, { status:201 });
}

export async function GET(){
    await connectToMongoDB();
    const notes = await Notes.find();
    return NextResponse.json({notes});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectToMongoDB();
    await Notes.findByIdAndDelete(id);
    return NextResponse.json({message:"Note Deleted"}, { status:200 });
}