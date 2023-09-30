import connectToMongoDB from "@/libs/mongoose";
import Notes from "@/models/Notes";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription:description} = await request.json();
    await connectToMongoDB();
    await Notes.findByIdAndUpdate(id, {title,description});
    return NextResponse.json({message:"Note Updated"}, {status:200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectToMongoDB();
    const topic = await Notes.findOne({ _id: id});
    return NextResponse.json({ topic }, { status:200 });
}