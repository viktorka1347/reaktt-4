import { useState } from 'react';
import { nanoid } from 'nanoid';
import './Walks.css';
import WalkAddForm from './components/WalkAddForm';
import WalkList from './components/WalkList';
import WalkModel, { initForm } from './models/WalkModel';
import { findById, findByDate, sortByDate } from './utils/array';

function Walks() {
  const [walks, setWalks] = useState([]);
  const [form, setForm] = useState(initForm);

  const addWalk = ({ id, date, distance }) => {
    setForm(initForm);
    setWalks((prev) => {
      const arr = [...prev];
      if (id !== null) {
        const index = findById(arr, id);
        arr[index].date = date;
        arr[index].distance = distance;
        return sortByDate(arr);
      }

      const index = findByDate(arr, date);
      if (index < 0) {
        return sortByDate([...arr, new WalkModel(nanoid(), date, distance)]);
      }

      arr[index].distance += distance;
      if (arr[index].distance > 99.9) {
        arr[index].distance = 99.9;
      }

      return arr;
    });
  }

  const editWalk = (id) => {
    const index = findById(walks, id);
    setForm(new WalkModel(id, walks[index].date, walks[index].distance)); 
  }

  const deleteWalk = (id) => {
    const index = findById(walks, id); 
    setForm(initForm);   
    setWalks((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  }

  return (
    <div className="Walks">
      <WalkAddForm form={form} onSubmit={addWalk} />
      <WalkList walks={walks} onEditClick={editWalk} onDeleteClick={deleteWalk} />
    </div>
  );
}

export default Walks;