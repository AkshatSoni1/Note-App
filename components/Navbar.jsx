import Link from "next/link"

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center bg-slate-800 px-8 py-4 rounded-md mb-5">
        <Link className="text-white font-bold text-xl" href={"/"}>Notes App</Link>
        <Link className="bg-white px-3 py-2 text-lg text-slate-800 rounded-md" href={"/addTopic"}> Add Note</Link>
    </nav>
  )
}

export default Navbar
