import React, { useEffect, useState } from 'react'
import { USMFButton } from 'usmf-ui-lib'

const TestComponent = ({ todos = [] }) => {
    const [text, setText] = useState('Test World')
    return (
    <div>
        <h1>{text}</h1>
        <USMFButton onClick={() => setText('Test World Hello World')} label="Change Text" style={{
            fontSize: 29
        }} />
        {todos.map(todo => (<div key={todo.id}>{todo.title}</div>))}
    </div>
    )
}

export default TestComponent