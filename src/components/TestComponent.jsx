import React, { useEffect, useState } from 'react'

const TestComponent = () => {
    const [text, setText] = useState('Test World')
    useEffect(() => {
        console.log('Hello World')
    }, [])
    return (
    <div>
        <h1>{text}</h1>
        <button onClick={() => setText('Test World Hello World')}>Change Text</button>
    </div>
    )
}

export default TestComponent