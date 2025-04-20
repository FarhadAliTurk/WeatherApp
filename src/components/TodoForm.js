import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;