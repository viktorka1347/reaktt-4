import PropTypes from 'prop-types';
import './DateInput.css';

function DateInput(props) {
  const { value, onChange } = props;
  return (
    <label className="DateInput">
      Дата (ДД.ММ.ГГГГ)
      <input className="DateInput-input" name="date" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

DateInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DateInput;