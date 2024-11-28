import React, { useState } from 'react';

function GetForm() {
  const [count, setCount] = useState('');

  async function fetchCount(event) {
    event.preventDefault(); 
    try {
      const response = await fetch('http://localhost:8081/count');
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
      <button onClick={fetchCount}>Получить счетчик</button>
      {count && <p>Счетчик: {count}</p>}
      </div>
    </form>
  );
}

export default GetForm;