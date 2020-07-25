const baseURL = "http://localhost:3000"
const usersURL = `${baseURL}/users`
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const projectsURL = `${baseURL}/projects`

const get = (url) => {
  const configurationObject = {
    headers: {
      "Authorization": `Bearer ${localStorage.token}`
    }
  }
  return fetch(url, configurationObject)
  .then(resp => resp.json())
  .catch(error => console.log(error.message))
}

const postAuth = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, configurationObject)
  .then(resp => resp.json())
  .catch(error => console.log(error.message))

}

const updateAuth = (url, data) => {
const configurationObject = {
  method: "PATCH",
  headers: {
    "Authorization": `Bearer ${localStorage.token}`,
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
body: JSON.stringify(data)
};
  return fetch(url, configurationObject)
  .then(resp => resp.json())
  .catch(error => console.log(error.message))
}

const updateUserInfo = (data, id) => {
  updateAuth(usersURL +"/" + id, data)
  .then(resp => resp.json())
  .catch(error => console.log(error))
}
const signIn = (data) => postAuth(signInURL, data)

const validate = (token) => get(validateURL, token)

const signUp = (data) => postAuth(usersURL, data)

const getMyProjects = () => {
  return get(baseURL + "/my-projects")
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

const submitNewProject = (e, data, submitForm) => {
  e.preventDefault()
  postAuth(projectsURL, data)
  submitForm()
}

const getProjectMeetings = () => {
  return get(baseURL + "/project-meetings")
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

const getProjectNotes = () => {
  return get(baseURL + "/project-notes")
    .then(resp => resp.json())
    .catch(error => console.log(error))
}


export default {
  get,
  signIn,
  validate,
  signUp,
  updateUserInfo,
  getMyProjects,
  submitNewProject,
  getProjectMeetings,
  getProjectNotes,
}