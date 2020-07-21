const baseURL = "http://localhost:3000"
const signUpURL = `${baseURL}/users`
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const projectsURL = `${baseURL}/projects`

const get = (url) => {
  const configurationObject = {
    headers: {
      "Authorization": localStorage.token
    }
  }
  return fetch(url, configurationObject)
}

const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/ld+json",
      "Accept": "application/json"
   
    },
    body: JSON.stringify(data)
  };
  return fetch(url, configurationObject)
}

const signIn = (data) => post(signInURL, data).then(resp => resp.json()).catch(error => console.log(error.message))

const validate = (token) => get(validateURL, token).then(resp => resp.json()).catch(error => console.log(error.message))

const signUp = (data) => post(signUpURL, data).then(resp => resp.json()).catch(error => console.log(error.message))

const getProjects = () => get(projectsURL).then(resp => resp.json()).catch(error => console.log(error.message))

const getProjectDetails = (id) => {
  return fetch(projectsURL + `${id}`)
    .then(resp => resp.json())
}

export default { get, signIn, validate, signUp, getProjects, getProjectDetails }
