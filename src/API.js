const baseURL = "http://localhost:3000"
const signUpURL = `${baseURL}/users`
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`

// const get = (url, token) => {
//   const configurationObject = {
//     headers: {
//       "Authorization": token
//     }
//   }
//   return fetch(url, configurationObject)
// }


const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // "Content-Type": "application/json",
      "Accept": "application/json"
   
    },
    body: JSON.stringify(data)
  };
  return fetch(url, configurationObject)
}

const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}

const signIn = (data) => post(signInURL, data).then(resp => resp.json()).catch(error => console.log(error.message))

const validate = (token) => get(validateURL, token).then(resp => resp.json()).catch(error => console.log(error.message))

const signUp = (data) => post(signUpURL, data).then(resp => resp.json()).catch(error => console.log(error.message))

export default { signIn, validate, signUp }
