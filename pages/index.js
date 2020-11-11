import { useState } from 'react';

function Home() {
    return (
        <div>
            <h2>Vale muito for me</h2>
            <Contador />
            
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1000);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
    return <h1>Home</h1>
}

export default Home 