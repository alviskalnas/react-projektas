import { useState } from 'react';
import TodoForm from './to-do-form';
import './to-do-list.css';

function ToDoList() {
    const [items, setItems] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [description, setDescription] = useState('');
    const [deletedForms, setDeletedForms] = useState([]);
    const [formVisible, setFormVisible] = useState(true);

    const getTime = () => {
        const d = new Date();
        return d.toLocaleString();
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        const title = event.target.title.value.trim();
        if (!title) {
            setFormSubmitted(true);
            return;
        }
        const newItem = {
            id: Math.random(),
            title,
            description,
            done: false,
            priority: event.target.priority.value,
            createdDate: getTime(),
            deleted: false,
        };
        setItems([newItem, ...items]);
        event.target.reset();
        setDescription('');
        setFormSubmitted(false);
    };

    const onDeleteHandler = (itemId) => {
        const itemToDelete = items.find((item) => item.id === itemId);
        const newItem = { ...itemToDelete, deleted: true, deletedDate: getTime() };
        setItems((prevState) => prevState.filter((item) => item.id !== itemId));
        setDeletedForms((prevState) => [...prevState, newItem]);
    };

    const onChangeStatusHandler = (itemId) => {
        setItems((prevState) =>
            prevState.map((item) => {
                if (item.id === itemId) {
                    return { ...item, done: !item.done };
                }
                return item;
            })
        );
    };

    const renderList = () => {
        if (!items || items.length < 1) {
            return <p>Your list is empty.</p>;
        }

        return items.map((item) => {
            if (!item.deleted) {
                return (
                    <li className="todo-list-item" key={item.id}>
                        <button onClick={() => onDeleteHandler(item.id)}>X</button>
                        <span onClick={() => onChangeStatusHandler(item.id)}>{item.title}</span>
                        <span>{item.priority}</span>
                        <p>
                            <strong>Description:</strong> {item.description}
                        </p>
                        <p>
                            <strong>Created at:</strong> {item.createdDate}
                        </p>
                    </li>
                );
            }
            return null;
        });
    };

    const renderDeletedForms = () => {
        if (!deletedForms || deletedForms.length < 1) {
            return null;
        }

        return deletedForms.map((item) => (
            <li className="todo-list-item" key={item.id}>
                <button onClick={() => setDeletedForms((prevState) => prevState.filter((form) => form.id !== item.id))}>
                    Delete Form
                </button>
                <span>{item.title}</span>
                <span>{item.priority}</span>
                <p>
                    <strong>Deleted at:</strong> {item.deletedDate}
                </p>
            </li>
        ));
    };

    return (
        <>
          <TodoForm
          formVis={formVisible}
          submitForm={onSubmitForm}
          desc={description}
          setDesc={setDescription}
          formSubm={formSubmitted}
          />
            <button className="todo-add-btn" onClick={() => setFormVisible(!formVisible)}>
                {formVisible ? "Hide form" : "Add new item"}
            </button>

            <div className="todo-list">
                <h2>To Do List:</h2>
                <ul className="list">
                    {renderList()}
                    {renderDeletedForms()}
                </ul>
            </div>
        </>
    );
}

export default ToDoList;





