import React, { useState, useEffect } from 'react';
import './ToDoList.css';

const ToDoList = () => {

  //Store Todo lists to local Storage
  const savedTodos = localStorage.getItem('todos');
  const [todos, setTodos] = useState(() => {
    try {
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Error parsing todos from localStorage", error);
      return [];
    }
  });

  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

  useEffect(() => {
    console.log('Todos updated:', todos); 
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //Add Handle Events
  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      const newTodo = { heading: headingInput, lists: [] };
      setTodos([...todos, newTodo]);
      setHeadingInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };

  const handleAddList = (index) => {
    if (listInputs[index]?.trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].lists.push({ text: listInputs[index], checked: false });
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: '' });
    }
  };

  const handleCheckboxChange = (todoIndex, listIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].lists[listIndex].checked = !newTodos[todoIndex].lists[listIndex].checked;
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="title">My Todo List</h1>
      <div className="container-input">
        <input
          type="text"
          className="heading-input"
          placeholder="Enter Heading"
          value={headingInput}
          onChange={(e) => setHeadingInput(e.target.value)}
        />
        <button className="add-list-btn" onClick={handleAddTodo}>
          Add Heading
        </button>
      </div>
      <div className="todo-main">
        {todos.length === 0 ? (
          <p>No todos added yet. Please add some todos.</p>
        ) : (
          todos.map((todo, todoIndex) => (
            <div key={todoIndex} className="todo-card">
              <div className="heading-todo">
                <h3>{todo.heading}</h3>
                <button
                  className="delete-button-heading"
                  onClick={() => handleDeleteTodo(todoIndex)}
                >
                  Delete Heading
                </button>
                <ul>
                  {todo.lists.map((list, listIndex) => (
                    <li key={listIndex} className="todo-inside-list">
                      <input
                        type="checkbox"
                        checked={list.checked}
                        onChange={() => handleCheckboxChange(todoIndex, listIndex)}
                        className="todo-checkbox"
                      />
                      <p className={list.checked ? 'checked' : ''}>{list.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="add_list">
                  <input
                    type="text"
                    className="list-input"
                    placeholder="Add List"
                    value={listInputs[todoIndex] || ''}
                    onChange={(e) => handleInputChange(todoIndex, e.target.value)}
                  />
                  <button
                    className="add-list-btn"
                    onClick={() => handleAddList(todoIndex)}
                  >
                    Add List
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList;
