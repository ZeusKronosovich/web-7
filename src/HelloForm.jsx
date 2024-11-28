import React, { useState } from 'react';

function HelloForm() {
  const [count, setCount] = useState('');

  async function fetchCount(event) {
    event.preventDefault(); 
    try {
      const response = await fetch('http://localhost:8082/get');
      if (response.ok) {
        const data = await response.text();
        setCount(data);
      } else {
        console.error('Ошибка при получении данных');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form>
          <div>
      <button onClick={fetchCount}>Получить привет</button>
      {count && <p>Привет: {count}</p>}
      </div>
    </form>
  );
}
export default HelloForm;