import PropTypes from 'prop-types';
import './ColorForm.css';
import ColorInput from './ColorInput';
import { hexToRGB, getContrastColor } from '../utils/utils';

function ColorForm(props) {
  const { color, input, state, onChangeInput } = props;
  const background = getContrastColor(color);

  return (
    <form className="ColorForm" onSubmit={(event) => event.preventDefault()}>
      <ColorInput input={input} onChange={onChangeInput} />
      <label className="ColorForm-rgb" style={{ backgroundColor: background }}>
        {state ? hexToRGB(color) : 'Ошибка'}
      </label>
    </form>
  );
}

ColorForm.propTypes = {
  color: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  onChangeInput: PropTypes.func.isRequired
};

export default ColorForm;