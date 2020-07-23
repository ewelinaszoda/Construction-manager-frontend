const baseURL = "http://localhost:3000"
export const SIGN_UP_URL = `${baseURL}/users`
export const SIGN_IN_URL = `${baseURL}/sign-in`
export const VALIDATE_URL = `${baseURL}/validate`
export const PROJECTS_URL = `${baseURL}/projects`

export const get = (url) => {
  const configurationObject = {
    headers: {
      "Authorization": localStorage.token
    }
  }
  return fetch(url, configurationObject)
}

export const post = (url, data) => {
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

// const validate = (token) => get(validateURL, token).then(resp => resp.json()).catch(error => console.log(error.message))

// const signUp = (data) => post(signUpURL, data).then(resp => resp.json()).catch(error => console.log(error.message))

// const getProjects = () => get(projectsURL).then(resp => resp.json()).catch(error => console.log(error.message))

// const getProjectDetails = (id) => {
//   return fetch(projectsURL + `${id}`)
//     .then(resp => resp.json())
// }