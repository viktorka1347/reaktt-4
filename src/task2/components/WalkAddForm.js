import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './WalkAddForm.css';
import DateInput from './DateInput';
import DistanceInput from './DistanceInput';
import WalkModel, { initForm } from '../models/WalkModel';
import { dateToText, distanceToText, dateTyping, distanceTyping, dateToInt, distanceToInt } from '../utils/utils';

function WalkAddForm(props) {
  const { form, onSubmit } = props;
  const { id, date, distance } = form;

  const [dateText, setDateText] = useState('');
  const [distanceText, setDistanceText] = useState('');
  const [prevState, setPrevState] = useState(initForm);
  const [error, setError] = useState('');

  if ((id !== prevState.id) || (date !== prevState.date) || (distance !== prevState.distance)) {
    setPrevState(new WalkModel(id, date, distance));
    setDateText(dateToText(date));
    setDistanceText(distanceToText(distance, true));
  }

  const onDateChange = (value) => {
    setDateText((prev) => dateTyping(prev, value));
  }

  const onDistanceChange = (value) => {
    setDistanceText((prev) => distanceTyping(prev, value));
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const date = dateToInt(event.target.date.value);
    if (date === null) {
      setError('Введите корректную дату текущего столетия');
      return;
    }

    const distance = distanceToInt(event.target.distance.value);
    if (distance === null) {
      setError('Введите дистанцию в диапазоне от 00.0 до 99.9 км');
      return;
    }

    setError('');
    setPrevState(new WalkModel(id, date, distance));

    onSubmit({ id, date, distance });
  }

  return (<React.Fragment>
    <form className="WalkAddForm" onSubmit={onFormSubmit}>
      <DateInput value={dateText} onChange={onDateChange} />
      <DistanceInput value={distanceText} onChange={onDistanceChange} />
      <button className="WalkAddForm-button" type="submit">OK</button>
    </form>
    {error && <p className="WalkAddForm-error">{error}</p>}
  </React.Fragment>);
}

WalkAddForm.propTypes = {
  form: PropTypes.instanceOf(WalkModel).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default WalkAddForm;