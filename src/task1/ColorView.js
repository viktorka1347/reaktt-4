import { useState } from 'react';
import './ColorView.css';
import ColorForm from './components/ColorForm';
import { isHexColor } from './utils/utils';

function ColorView() {
  const [color, setColor] = useState('#FFFFFF');
  const [input, setInput] = useState('#FFFFFF');
  const [state, setState] = useState(true);

  const onChangeInput = (inputValue) => {
    if (inputValue.length < 2) {
      setInput('#');
    } else if (inputValue.length > 7) {
      setInput(inputValue.slice(0, 7));
    } else {
      setInput(inputValue);
    }

    if (inputValue.length !== 7) {
      return;
    }

    const newState = isHexColor(inputValue);
    setState(newState);
    if (newState) {
      setColor(inputValue);
    }
  }

  return (
    <div className="ColorView" style={{ backgroundColor: color }}>
      <ColorForm color={color} input={input} state={state} onChangeInput={onChangeInput} />
    </div>
  );
}

export default ColorView;