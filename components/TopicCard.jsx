import DeleteBtn from "./DeleteBtn"
import Link from "next/link"
import { HiPencilAlt } from 'react-icons/hi'

const TopicCard = () => {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start rounded-md mx-1">
        <div className="">
          <h1 className="font-bold text-2xl">Topic Title</h1>
          <div>Description</div>
        </div>
        <div className="flex gap-2">
          <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
          </Link>
          <DeleteBtn />
        </div>
      </div>

    </>
  )
}

export default TopicCard
