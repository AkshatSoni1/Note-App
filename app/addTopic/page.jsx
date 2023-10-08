"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

const page = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(!title || !description){
            alert("Title and description are required fields!");
            return;
        }

        try {
            const res = await fetch(`${process.env.PROJECT_URL}/api/Notes`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({title, description}),
            });
            
            if(res.ok){
                router.push("/");
            }
            else{
                throw new Error("Failed to create the note");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form className='flex flex-col gap-5 mx-2' onSubmit={handleSubmit}>
            <input
                type='text'
                className='border text-xl border-slate-200 px-5 py-2 mt-8 rounded-md focus:outline-none focus:shadow-md focus:shadow-slate-200'
                placeholder='Title'
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
            />
            <textarea
                type='text'
                className='border text-xl border-slate-200 px-5 py-3 rounded-md focus:outline-none focus:shadow-md focus:shadow-slate-200'
                placeholder='Write the description here...' 
                rows="4"
                onChange={(e)=> setDescription(e.target.value)}
                value={description}
            />
            <button type="submit" className='w-fit text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:shadow-md hover:shadow-green-100 hover:scale-[1.03] transition-all duration-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 focus:scale-95'>Add Note</button>
        </form>
    )
}

export default page
