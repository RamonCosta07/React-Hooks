import React, { useState, useEffect } from "react";

export const UseEffectPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(name);
    }, [name]);
    
    return (
        <>
            <h2>bem vindo ao useEffectPage</h2>
            <input
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </>
    )
}

export default UseEffectPage;