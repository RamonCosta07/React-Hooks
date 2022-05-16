import React, { useState } from "react";

export const UseStatePage = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>bem vindo ao useStatePage</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Adicionar</button>
            <button onClick={() => setCount(count-1)}>Diminuir</button>
        </>
    )
}

export default UseStatePage;