import Image from "next/image";
import DeleteBtn from "./DeleteBtn"
import Link from "next/link"
import { HiPencilAlt } from 'react-icons/hi'

const getNotes = async() =>{
  try {
    const res = await fetch(`${process.env.PROJECT_URL}/api/Notes`, {
      cache:"no-store"
    });
    if(!res.ok){
      throw new Error("Failed to fetch notes");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
}

const TopicCard = async() => {
  const {notes} = await getNotes();
  return (
    <>
    {notes.length > 0 ? notes.map(note => (
      <div key={note._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start rounded-md mx-1">
        <div className=" max-w-2xl break-words">
          <h1 className="font-bold text-2xl pb-2">{note.title}</h1>
          <div>{note.description}</div>
        </div>
        <div className="flex gap-2">
          <Link href={`/editTopic/${note._id}`}>
            <HiPencilAlt size={24} className=" hover:text-slate-700"/>
          </Link>
          <DeleteBtn id={note._id}/>
        </div>
      </div>
    )):
      <div className="flex flex-col gap-4 justify-center items-center h-[70vh]">
        <img src="/assets/nothingImage.png" alt="Nothing to show here" className="w-3/4 px-2"/>
        <div className="text-center text-xl py-4 text-slate-800 font-bold">Noting to show here.. Add a new note!</div>
      </div>
    }

    </>
  )
}

export default TopicCard
