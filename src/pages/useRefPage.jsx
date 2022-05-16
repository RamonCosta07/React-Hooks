import React, { useState, useRef } from "react";

export const UseRefPage = () => {
    const [message, setMessage] = useState('');
    const inputRef = useRef();

    return (
        <>
            <h2>Bem vindo ao useRef</h2>
            <input
                ref={inputRef}
                placeholder="Digite a mensagem"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button onClick={() => {
                console.log(inputRef.current.value)
                inputRef.current.focus()
                setMessage('');
            }}>Enviar</button>
        </>
    )
}

export default UseRefPage;