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

  // return {
  //   id: 123,
  //   user: 'Ewelina',
  //   token: '123123123'
  // }
}

export const validate = (token) => get(VALIDATE_URL, token).then(resp => resp.json()).catch(error => console.log(error.message))

export const signUp = (data) => post(SIGN_UP_URL, data).then(resp => resp.json()).catch(error => console.log(error.message))

export const getProjects = () => get(PROJECTS_URL).then(resp => resp.json()).catch(error => console.log(error.message))

export const getProjectDetails = (id) => {
  return fetch(PROJECTS_URL + `${id}`)
    .then(resp => resp.json())
}