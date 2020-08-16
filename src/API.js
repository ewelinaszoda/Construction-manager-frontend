const baseURL = "http://localhost:3000"

const signUpURL = `${baseURL}/users`
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const projectsURL = `${baseURL}/projects`
const meetingsURL = `${baseURL}/meetings`
const notesURL = `${baseURL}/notes`

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

const deleteProject = (id) => {
  const configObject = {
    method: 'DELETE',
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  }
  return fetch(projectsURL+ "/" + id, configObject)
  .then((res) => res.json())
  .then((res) => {
      console.log(res);
    return res;
  })
}

const updateUserData = (UserData, id) => {
  const configObject = {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: UserData}),
  };

  return fetch(signUpURL + "/" + id, configObject)
    .then((resp) => resp.json())
    .catch(error => console.log(error))
}

const getMyMeetings = () => {
  return get(baseURL + "/my-meetings")
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

const postMeeting = (url, data) => {
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

const submitNewMeeting = (e, data, submitForm) => {
  e.preventDefault()
  postMeeting(meetingsURL, data)
  submitForm()
}

const postNote= (url, data) => {
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

const submitNewNote = (e, data, submitForm) => {
  e.preventDefault()
  postNote(notesURL, data)
  submitForm()
}

export default {
  get,
  signIn,
  validate,
  signUp,
  getMyProjects,
  submitNewProject,
  deleteProject,
  updateUserData,
  getMyMeetings,
  submitNewMeeting,
  submitNewNote,
}
