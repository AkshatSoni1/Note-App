"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
const EditForm = ({id, title, description}) => {
    const router = useRouter();
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/Notes/${id}`,{
                method:"PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newTitle, newDescription}),
            })

            if(!res.ok){
                throw new Error("Failed to update");
            }

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }
  return (
<form className='flex flex-col gap-5 mx-2' onSubmit={handleSubmit}>
    <input
        type='text'
        className='border text-xl border-slate-200 px-5 py-2 mt-8 rounded-md focus:outline-none focus:shadow-md focus:shadow-slate-200'
        placeholder='Title'
        onChange={e => setNewTitle(e.target.value)}
        value = {newTitle}
    />
    <textarea
        type='text'
        className='border text-xl border-slate-200 px-5 py-3 rounded-md focus:outline-none focus:shadow-md focus:shadow-slate-200'
        placeholder='Write the description here...' 
        rows="4"
        onChange={e => setNewDescription(e.target.value)}
        value = {newDescription}
    />
    {/* <button type="submit" className='bg-green-600 font-bold px-6 py-3 mt-3 w-fit text-white rounded-md text-lg'>Update Note</button> */}
    <button type="submit" className="w-fit text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:shadow-md hover:shadow-green-100 hover:scale-[1.03] transition-all duration-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 focus:scale-95">Update Note</button>
</form>
  )
}

export default EditForm
