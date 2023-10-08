"use client"

import {HiOutlineTrash} from 'react-icons/hi'
import { useRouter } from 'next/navigation';

function DeleteBtn({id}) {
  const router = useRouter();
  const removeTopic = async()=>{
    const confirmed = confirm("Are you sure want to delete this note?");

    if(confirmed){
      const res = await fetch(`${process.env.PROJECT_URL}/api/Notes?id=${id}`,{
        method: "DELETE",
      });
      if(res.ok){
        router.refresh();
      }
    }
  }
  return (
    <button onClick={removeTopic} className='text-red-400'>
        <HiOutlineTrash size={24} className='hover:text-red-500'/>
    </button>
  )
}

export default DeleteBtn
