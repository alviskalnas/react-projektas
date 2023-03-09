import React from 'react';

const TodoForm = (props) => {
    return (
      <>
        {props.formVis && (
          <form className="todo-form" onSubmit={props.submitForm}>
            <div className="todo-form-control">
              <label className="todo-tile" htmlFor="title">
                To do title:
              </label>
              <input className="todo-text" type="text" id="title" name="title" />
            </div>
            <div className="todo-form-control">
              <label htmlFor="description">Description:</label>
              <textarea
                className="todo-description"
                id="description"
                name="description"
                value={props.desc}
                onChange={(event) => props.setDesc(event.target.value)}
              ></textarea>
              {props.formSubm && !document.getElementById("title").value.trim() && (
                <span className="todo-span" style={{ color: "red" }}>
                  This field needs to be filled.
                </span>
              )}
            </div>
            <div className="todo-form-control">
              <label className="todo-priority" htmlFor="priority">
                Priority:
              </label>
              <select id="priority" name="priority">
                <option className="low" value="low">
                  Low
                </option>
                <option className="medium" value="medium">
                  Medium
                </option>
                <option className="high" value="high">
                  High
                </option>
              </select>
            </div>
            <button className="todo-save-btn" type="submit">
              Save
            </button>
          </form>
        )}
      </>
    );
  };
export default TodoForm;
