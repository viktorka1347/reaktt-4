import PropTypes from 'prop-types';
import './WalkString.css';
import WalkModel from '../models/WalkModel';
import { dateToText, distanceToText } from "../utils/dateToText";

function WalkString(props) {
  const { walk, onEditClick, onDeleteClick } = props;
  const { id, date, distance} = walk;
  
  return (
    <tr>
      <td className="WalkString-cell WalkString-col1">{dateToText(date)}</td>
      <td className="WalkString-cell WalkString-col2">{distanceToText(distance)}</td>
      <td className="WalkString-cell WalkString-col3">
        <span className="WalkString-button" onClick={() => onEditClick(id)}>&#x270E;</span>
        <span>&nbsp;</span>
        <span className="WalkString-button WalkString-delete" onClick={() => onDeleteClick(id)}>&#x2718;</span>
      </td>
    </tr>
  );
}

WalkString.propTypes = {
  walk: PropTypes.instanceOf(WalkModel).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default WalkString;