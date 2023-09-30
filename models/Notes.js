import mongoose, { Schema } from "mongoose";

const notesModel = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps:true,
    }
);

const Notes = mongoose.models.Notes ||  mongoose.model("Notes", notesModel);

export default Notes;