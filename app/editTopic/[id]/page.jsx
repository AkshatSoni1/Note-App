import EditForm from "@/components/EditForm";

const getNoteById = async(id) =>{
  try {
    const res = await fetch(`http://localhost:3000/api/Notes/${id}`,{
      cache: "no-store",
    });

    if(!res.ok){
      throw new Error("Failed to fetch note");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const page = async({params}) => {

  const {id} = params;
  const {note} = await getNoteById(id);
  const {title, description} = note;

  return (
    <EditForm id={id} title={title} description={description}/>
  )
}

export default page
