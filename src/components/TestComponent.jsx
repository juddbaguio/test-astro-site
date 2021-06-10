import React, { useEffect, useState } from 'react'

const TestComponent = ({ todos = [] }) => {
    const [text, setText] = useState('Test World')
    return (
    <div>
        <h1>{text}</h1>
        <button onClick={() => setText('Test World Hello World')}>Change Text</button>
        {todos.map(todo => (<div key={todo.id}>{todo.title}</div>))}
    </div>
    )
}

export default TestComponent