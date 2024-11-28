import React, { useState } from 'react';

function QueryForm() {
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');

    async function fetchQuery(event) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8083/api/user?name=' + inputValue);
            if (response.ok) {
                const data = await response.text();
                setName(data);
            } else {
                console.error('Ошибка при получении данных');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form>
            <input 
                type="text" 
                value={inputValue} 
                onInput={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" onClick={fetchQuery}>Отправить</button>
            {name && <p>Результат: {name}</p>}
        </form>
    );
}

export default QueryForm;