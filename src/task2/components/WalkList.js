import PropTypes from 'prop-types';
import './WalkList.css';
import WalkString from './WalkString';
import WalkModel from '../models/WalkModel';

function WalkList(props) {
  const { walks, onEditClick, onDeleteClick } = props;
  
  return !!walks.length && (
    <div className="WalkList">
      <table>
        <tbody>
          <tr>
            <td className="WalkList-cell WalkList-col1">Дата (ДД.ММ.ГГГГ)</td>
            <td className="WalkList-cell WalkList-col2">Пройдено км</td>
            <td className="WalkList-cell WalkList-col3">Действия</td>
          </tr>
        </tbody>
      </table>
      <table className="WalkList-body">
        <tbody>
          {walks.map((walk) => 
            <WalkString walk={walk} onEditClick={onEditClick} onDeleteClick={onDeleteClick} key={walk.id} />
          )}
        </tbody>
      </table>
    </div>  
  );
}

WalkList.propTypes = {
  walks: PropTypes.arrayOf(PropTypes.instanceOf(WalkModel)).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default WalkList;