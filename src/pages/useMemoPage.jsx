import React, { useState, useMemo } from "react";

export const UseMemoPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const ValidadePasswordA = useMemo(() => { 
        return <ValidadePassword password={password} />
    }, [password]);
    
    return (
        <>
            <h2>bem vindo ao useMemoPage</h2>
            <input
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br />
            <br />
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            {ValidadePasswordA}
            {/* <ValidadePassword password={password} /> */}
        </>
    )
}

const ValidadePassword = ({ password }) => {
    console.log(password);
    if (password.length === 0) return <span>Preencha a senha</span>
    if (password.length <= 5) return <span>A senha deve possuir mais de 5 caracteres</span>
    return <span>Senha aprovada</span>
}

export default UseMemoPage;