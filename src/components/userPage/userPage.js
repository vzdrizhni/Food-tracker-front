import React from 'react'
import {connect} from 'react-redux';
import {Redirect, Link} from "react-router-dom";

const UserPage = (props) => {
  const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/meals'
  const handleSubmit = () => {
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          "AUTH-TOKEN": localStorage.getItem('token')
        }
      })
      .then(response => response.json())
      .then(data => console.log(data.data.meal))
  }

  if (Object.keys(props.user).length === 0)
    return <Redirect to='/'/>
  return (
    <article>
      <div className='wrapper'>
        <button onClick={handleSubmit}>Add Meal</button>
      </div>
      <div>{props
          .user
          .meals
          .map(meal => (
            <Link to={`/meal/${meal.id}`} key={meal.id}>
              <div key={meal.id}>
                <span>{meal.created}</span>
              </div>
            </Link>
          ))}
      </div>
    </article>
  )
}

const mapStateToProps = state => ({user: state});

export default connect(mapStateToProps)(UserPage)