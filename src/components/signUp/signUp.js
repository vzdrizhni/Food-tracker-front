import React, {useEffect} from 'react'

const SignUp = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/sign_up'
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then(resp => resp.json())
    .then(data => {
      console.log(data.data.user);
    })
  }

  let user = {user: {}};

  const handleChange = (e) => {
    user.user = Object.assign(user.user, {[e.target.name]: e.target.value })
    console.log(JSON.stringify(user));
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Email:</label>
        <input type="text" id="fname" name="email" onChange={handleChange}/>
        <label htmlFor="lname">Password:</label>
        <input type="text" id="lname" name="password" onChange={handleChange}/>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default SignUp