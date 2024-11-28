import React, { useState } from 'react';

function PostForm() {
  const [value, setValue] = useState();

  function handleSubmit(e) {
    
    const count = parseInt(value);
    if (!isNaN(count)) {
      fetch('http://localhost:8081/count', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `count=${value}`,
      }).then(() => {
        
      });
    } else {
      alert('Введите число');
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Добавить значение к счетчику</button>
    </form>
  );
}

export default PostForm;
