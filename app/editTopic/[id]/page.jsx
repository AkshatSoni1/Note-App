import React from 'react'

const page = () => {
  return (
    <form className='flex flex-col gap-5 mx-2'>
    <input
        type='text'
        className='border text-xl border-slate-500 px-5 py-2 mt-8 rounded-md'
        placeholder='Title'
    />
    <textarea
        type='text'
        className='border text-xl border-slate-500 px-5 py-3 rounded-md'
        placeholder='Write the description here...' 
        rows="4"
    />
    <button className='bg-green-600 font-bold px-6 py-3 mt-3 w-fit text-white rounded-md text-lg'>Update Note</button>
</form>
  )
}

export default page
