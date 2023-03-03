import { useState } from 'react';
import Container from './Container'

const ShoppingList = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const submitHandler = event => {
    event.preventDefault();

    if (input.trim()) {
      const newShoppingItem = {
        id: Math.random(),
        title: input.trim(),
        done: false,
      }

      setList(prevState => [newShoppingItem, ...prevState]);
      setInput('');
    }
  }

  const inputHandler = event => setInput(event.target.value);
  
  const deleteHandler = id => setList(prevState => prevState.filter(item => item.id !== id));

  const doneHandler = id => {
    setList(prevState => {
      const updatedList = prevState.map((item) => {
        if (item.id === id) {
          const itemToUpdate = {...item};
          itemToUpdate.done = !item.done;

          return itemToUpdate;
        }

        return item;
      });

      return updatedList;
    })
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="shopping-item-input">Shopping Item:</label>
          <input type="text" id="shopping-item-input" value={input} onChange={inputHandler} />
        </div>
        <button type="submit">Add</button>
      </form>

      <div className="shopping-list-wrapper">
        {list && list.length > 0 ? (
          <>
            <h2>Shopping List:</h2>

            <ul>
              {list.map((item) => (
                <li key={item.id}>
                  <input type="checkbox" checked={item.done} onChange={() => doneHandler(item.id)} />
                  <span className={item.done ? 'done' : ''}>{item.title}</span>
                  <button onClick={() => deleteHandler(item.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2>Your shopping list is empty...</h2>
        )}
        <button
          type="button"
          onClick={() =>
            alert(
              `Submitted items:\n${list
                .filter((item) => item.done)
                .map((item) => item.title)
                .join('\n')}`
            )
          }
          disabled={list.filter((item) => item.done).length === 0}
        >
          Submit
        </button>
      </div>
    </Container>
  )
}

export default ShoppingList;










