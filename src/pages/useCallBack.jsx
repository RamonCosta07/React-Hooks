import React, { useState, useEffect, useCallback } from "react";

export const UseCallBackPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

   /*  const onChangeName = (event) => (
        setName(event.target.value)
    ) */
    
    const onChangeName = useCallback((event) => { 
        setName(event.target.value)
    }, []);

    return (
        <>
            <h2>bem vindo ao useCallBackPage</h2>
            <input
                placeholder="Nome"
                value={name}
                onChange={onChangeName}
            />
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </>
    )
}

export default UseCallBackPage;