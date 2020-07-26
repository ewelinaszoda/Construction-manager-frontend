const baseURL = "http://localhost:3000"
const signUpURL = `${baseURL}/users`
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
}

const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, configurationObject)
}

const postProject = (url, data) => {
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
}

const signIn = (data) => post(signInURL, data).then(resp => resp.json()).catch(error => console.log(error.message))

const validate = (token) => get(validateURL, token).then(resp => resp.json()).catch(error => console.log(error.message))

const signUp = (userData) => {
  return fetch(signUpURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: userData }),
  })
};

const getMyProjects = () => {
  return get(baseURL + "/my-projects")
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

const submitNewProject = (e, data, submitForm) => {
  e.preventDefault()
  postProject(projectsURL, data)
  submitForm()
}

const configurationObject = (request, key, data) => {

  const object = {
    method: request,
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ key:  data })
  };
  return object
}

const updateAuth = (url) => {
  return fetch(url, configurationObject())
}

const updateUserInfo = (userData, id) => {
  return updateAuth(signUpURL + "/" + id, userData)
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
      return resp;
    })
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
  getMyProjects,
  submitNewProject,
  updateUserInfo,
  getProjectMeetings,
  getProjectNotes,
}
