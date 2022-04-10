import PropTypes from 'prop-types';
import './ColorInput.css';

function ColorInput(props) {
  const { input, onChange } = props;
  return <input className="ColorInput" name="color" value={input} onChange={(event) => onChange(event.target.value)} />
}

ColorInput.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorInput;