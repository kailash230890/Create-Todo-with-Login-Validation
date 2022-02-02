import React, { useState } from 'react';
import '../App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updateTodos = todos.map((t) =>
        t.id === editTodo.id ?
          (t = { id: t.id, todo }) :
          { id: t.id, todo: t.todo }
      );
      setTodos(updateTodos);
      setEditId(0);
      setTodo('');
      return;
    }

    if (todo !== '') { // specific id for todos, unique id , we can use package uuid also
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo)
    setEditId(id);
  }

  return <div className='App'>
    <div className='container'>
      <h1>Todo List App</h1>

     <TodoForm todo={todo} handleSubmit={handleSubmit} setTodo={setTodo} editId={editId} />

     <TodoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} /> 

    </div>

  </div>;
};

export default Todo;