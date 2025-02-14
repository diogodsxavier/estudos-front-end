import { useLayoutEffect, useRef, useState } from "react"

function Exemplo() {
    const [largura, setLargura] = useState(0);
    const refElemento = useRef(null);

    useLayoutEffect(() => {
        if (refElemento.current) {
            // Mede a largura do elemento e atualiza o estado antes da pintura
            setLargura(refElemento.current.offsetWidth);
        }
    }, []);

    return (
        <div>
            <div ref={refElemento} style={{ width: '50%', background: '#eee', padding: '20px' }}>
                Meu elemento
            </div>
            <p>A largura do elemento é: {largura}px</p>
        </div>
    );
};

export default Exemplo