import { useState } from 'react';
import './to-do-list.css';

function ToDoList() {
  const [items, setItems] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function updateItems(newItems) {
    setItems(newItems);
  }
  
  const onSubmitForm = event => {
    event.preventDefault();
    const title = event.target.title.value.trim();
    if (!title) {
      setFormSubmitted(true);
      return;
    }
    const newItem = {
      id: Math.random(),
      title,
      done: false,
      priority: event.target.priority.value
    }
    updateItems([newItem, ...items]);
    event.target.reset();
    setFormSubmitted(false);
  }
  
  const onDeleteHandler = itemDelete => {
    updateItems(prevState => prevState.filter(item => item.id !== itemDelete));
  }
  
  const onChangeStatusHandler = (itemChange) => {
    updateItems(prevState => prevState.map(item => {
      if (item.id === itemChange) {
        return { ...item, done: !item.done };
      }
      return item;
    }));
  }

  const renderList = () => {
    if (!items || items.length < 1) {
      return 'Your list is empty.';
    }

    return items.map((item, index) => (
      <li className="list-item" key={index}>
        <button  onClick={() => onDeleteHandler(item.id)}>X</button>
        <span  onClick={() => onChangeStatusHandler(item.id)}>{item.title}</span>
        <span>{item.priority}</span>
      </li>
    ));
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="form-control">
          <label htmlFor="title">To do title:</label>
          <input type="text" id="title" name="title" />
          {formSubmitted && !document.getElementById('title').value.trim() && (
            <span style={{ color: 'red' }}>This field needs to be filled.</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="priority">Priority:</label>
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
      <div className="todo-list">
        <h2>To Do List:</h2>
        <ul className="list">
          {renderList()}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;





