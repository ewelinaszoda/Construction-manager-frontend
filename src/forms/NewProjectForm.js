import React, { useState } from 'react'
import API from '../API'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBarWithoutSearchProject from "../layout/PrimarySearchAppBarWithoutSearchProject"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function NewProjectForm() {

  const classes = useStyles();

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [client, setClient] = useState("")
  const [project_manager, setProject_manager] = useState("")
  const [site_manager, setSite_manager] = useState("")
  const [quantity_surveyor, setQuantity_surveyor] = useState("")
  const [start_date, setStart_date] = useState(new Date());
  const [end_date, setEnd_date] = useState(new Date());


  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)


  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append("upload_preset", "construction_manager")
    setLoading(true)
    const res = await fetch("https://api.cloudinary.com/v1_1/dziowkyij/image/upload", {
      method: 'POST',
      body: data
    }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }

  const submitForm = () => {
    setFormSubmitted(!formSubmitted)
  }

  return (
    <>
      {!formSubmitted ?
        <div>
          <h5 >Add a New Project</h5>
          <form className={classes.container} noValidate
            onSubmit={(e) => API.submitNewProject(e, {
              name,
              address,
              image,
              description,
              client,
              project_manager,
              site_manager,
              quantity_surveyor,
              start_date,
              end_date,
            }, submitForm)}>
            <br></br>
            <input
              className="inputField"
              type="text" name="Name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)} />
            <br></br>
            <br></br>
            <input
              type="file" name="file"
              placeholder="Upload an Image"
              onChange={uploadImage}
            />
            {loading
              ? (<h5>Loading...</h5>)
              : (<img src={image}
                style={{ width: '300px' }}
                alt="" />)}
            <br></br>
            <br></br>
            <input
              className="inputField"
              type="text" name="Address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)} />
            <br></br>
            <br></br>
            <textarea
              className="inputField"
              type="text" name="Description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)} />
            <br></br>
            <br></br>
            <h3>You can fill the inputs below by contact emails below to enjoy sending email to your co-workers with one click!</h3>
            <input
              className="inputField"
              type="text" name="Client"
              placeholder="Client"
              onChange={(e) => setClient(e.target.value)} />
            <br></br>
            <br></br>
            <input
              className="inputField"
              type="text" name="Project_Manager"
              placeholder="Project Manager"
              onChange={(e) => setProject_manager(e.target.value)} />
            <br></br>
            <br></br>
            <input
              className="inputField"
              type="text" name="Site_Manager"
              placeholder="Site Manager"
              onChange={(e) => setSite_manager(e.target.value)} />
            <br></br>
            <br></br>
            {/* <input
              className="inputField"
              type="text" name="Quantity_surveyor"
              placeholder="Quantity Surveyor"
              onChange={(e) => setQuantity_surveyor(e.target.value)} /> */}



<div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Quantity_surveyor" 
              onChange={(e) => setQuantity_surveyor(e.target.value)} />
          </Grid>
        </Grid>
      </div>
            <br></br>
            <br></br>
            <TextField
              id="date"
              label="Start date"
              type="date"
              defaultValue={start_date}
              className={classes.textField}
              onChange={(e) => setStart_date(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br></br>
            <br></br>
            <br></br>
            <TextField
              id="date"
              label="End date"
              type="date"
              defaultValue = {end_date}
              className={classes.textField}
              onChange={(e) => setEnd_date(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <button>Submit</button>
          </form>
        </div>
        :  <div>
          <PrimarySearchAppBarWithoutSearchProject />
          <h5>Project has been added to your Collection! </h5>
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary" >
              BACK TO MY PROJECT
      </Button>
          </Link>
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" >
              BACK TO HOME
      </Button>
          </Link>
        </div>
      }
    </>
  );
}
