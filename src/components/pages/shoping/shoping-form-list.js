import React from 'react';

const ShopingFormList = ({submitHandler, inputHandler, list, input, doneHandler,deleteHandler,}) => {
    return (
        <>
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
        </>
    )
}
export default ShopingFormList;