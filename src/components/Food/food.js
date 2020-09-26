import React from 'react';
import './food.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import Meal from './meal.svg';
import Scale from './body-scale.svg';

const Food = props => {
  const { food } = props;
  const { calories, grams, title } = food;
  const value = Math.floor((calories * (grams / 100)));

  return (
    <div className="food">
      <div className="food-data">
        <div className="title">
          <span>Title: </span>
          {title}
        </div>
        <div className="measure-wrapper">
          <div className="calories">
            <div>
              <span>Calories: </span>
              {calories}
            </div>
            {' '}
            <img src={Meal} alt="React Logo" />
          </div>
          <div className="calories">
            <div>
              <span>Grams: </span>
              {grams}
            </div>
            <img src={Scale} alt="React Logo" />
          </div>
        </div>
      </div>
      <CircularProgressbar value={value} text={`${value} cal`} />
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  calories: PropTypes.string,
  grams: PropTypes.string,
  title: PropTypes.string,
};

Food.defaultProps = {
  calories: '123',
  grams: '123',
  title: 'Soup',
};

export default Food;
