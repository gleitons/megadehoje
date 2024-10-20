'use client'
import { useState } from "react"
export default function Redireciona() {
    const [contagem, setContagem] = useState(7);
    const redireciona = () => {
        setContagem(contagem - 1)

        if (contagem === 1) {
            window.location.href = '/'
        }
        if(contagem == 0) {
            return
        }
       
    }
    setInterval(redireciona, 1000);
    return (
        <div>
            <h2>Redireciona em {contagem} segundos</h2>
            
           
        </div>
    )
};
