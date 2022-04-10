import PropTypes from 'prop-types';
import './DistanceInput.css';

function DistanceInput(props) {
  const { value, onChange } = props;
  return (
    <label className="DistanceInput">
      Пройдено км
      <input className="DistanceInput-input" name="distance" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );

}

DistanceInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DistanceInput;