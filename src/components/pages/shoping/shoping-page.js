import { useState } from 'react';
import Container from '../container/Container'
import ShopingFormList from './shoping-form-list';

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
      <ShopingFormList
      submitHandler={submitHandler}
      list={list}
      input={input}
      inputHandler={inputHandler}
      deleteHandler={deleteHandler}
      doneHandler={doneHandler}

      />
    </Container>
  )
}

export default ShoppingList;










