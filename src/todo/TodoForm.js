import React from 'react';

const TodoForm = ({ todo, handleSubmit, setTodo, editId }) => {
    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input placeholder='add todo...'
                type='text'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit'>{editId ? "Edit" : "Go"}</button>
        </form>
    )
};

export default TodoForm;