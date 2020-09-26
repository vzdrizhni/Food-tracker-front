import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Meal from '../Meal/meal';
import { getMeal } from '../../actions/actions';
import './userpage.css';

const UserPage = props => {
  const { meals, getMeal, user } = props;

  useEffect(() => {
    const url = 'https://boiling-beyond-13092.herokuapp.com/api/v1/meals';
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
    })
      .then(resp => resp.json())
      .then(response => getMeal(response.data.meal));
  }, []);

  if (Object.keys(user).length === 0) { return <Redirect to="/" />; }
  return (
    <article>
      <div className="meals-list">
        {meals.map(meal => (
          <Link to={`/meal/${meal.id}`} key={meal.id}>
            <div key={meal.id} className="meal-item">
              <Meal meal={meal} key={meal.id} />
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
};

const mapStateToProps = state => ({ user: state.user, meals: state.meals });

const mapDispatchToProps = dispatch => ({
  getMeal: value => dispatch(getMeal(value)),
});

UserPage.propTypes = {
  getMeal: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  meals: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
