import React, {useEffect} from 'react'

const SignUp = () => {
  

  const signUp = (e) => {
    e.preventDefault();
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/sign_up'
    return fetch(url)
  }

  let user = {user: {}};

  const handleChange = (e) => {
    user = Object.assign({}, user.user, {[e.target.name]: e.target.value })
    console.log(user);
  }

  return (
    <div className='wrapper'>
      <form>
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