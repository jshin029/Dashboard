export const userLoginFetch = (user) => {
  return dispatch => {
    return fetch("http://localhost:5000/login", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user}),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
        } else {
          localStorage.setItem("token", resp.token)
          dispatch(loginUser(resp.user))
        }
      })
      .catch(err => console.log(err))
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:5000/validateToken", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(resp => resp.json())
        .then(resp => {
          if (resp.message) {
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(resp.user))
          }
        })
        .catch(err => console.log(err))
    }
  }
}

const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
