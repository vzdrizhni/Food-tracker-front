import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import './meal.css';

const Meal = props => {
  const { meal } = props;
  const { created } = meal;
  const val = Math.floor(Math.random() * 100);

  return (
    <>
      <div>{created}</div>
      <CircularProgressbar className="meal-bar" value={val} text={`${val} cal`} />
    </>
  );
};

Meal.propTypes = {
  meal: PropTypes.instanceOf(Object).isRequired,
  created: PropTypes.string,
};

Meal.defaultProps = {
  created: '',
};

export default Meal;
