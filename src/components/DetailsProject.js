import React from 'react'
// import React, {useState} from 'react'
// import Box from '@material-ui/core/Box';

const DetailsProject = ({project}) => {

  // const [name, setName] = useState("")
  // const [address, setAddress] = useState("")
  // const [image, setImage] = useState("")
  // const [description, setDescription] = useState("")
  // const [client, setClient] = useState("")
  // const [project_manager, setProject_manager] = useState("")
  // const [site_manager, setSite_manager] = useState("")
  // const [quantity_surveyor, setQuantity_surveyor] = useState("")
  // const [start_date, setStart_date] = useState("")
  // const [end_date, setEnd_date] = useState("")


  // useEffect(() => {
  //   API.getProjectsDetails(projectId)
  //   .then(getData)
  //   .catch(error => console.log(error.message))
  // }, [])


  // const getData = (data) => ({
  //   setName({data.name}),
  //   setAddress({data.description}),
  //   setImage({data.image}),
  //   setDescription({data.description}),
  //   setClient({data.client}),
  //   setProject_manager({data.project_manager}),
  //   setQuantity_surveyor({data.quantity_surveyor}),
  //   setStart_date{(data.start_date)},
  //   setEnd_date{(data.end_date)}
  // )}

  return (
    <div>
      <h1>Details</h1>
      <h2>{project.name}</h2>
      <h3>{project.address}</h3>
      <image scr={project.image} alt="image" />
      <h3>{project.description}</h3>
      
    </div>
  )

}
export default DetailsProject