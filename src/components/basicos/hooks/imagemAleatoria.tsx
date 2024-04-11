import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {
    
    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const url = 'https://source.unsplash.com/featured/300x300?'
    

    function renderizarBotao(valor: string) {
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md 
            `} onClick={() => {
                alterarPesquisa(valor);
                console.log(valor)
            }}>
                {valor}
            </button>
        )
    }
    
    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md"> 
            <Image src={`${url}${pesquisa}`} height={300} width={300} alt="Imagem" />
            <div className="flex  justify-between gap-5">
                {renderizarBotao('Corinthians')}
                {renderizarBotao('car')}
                {renderizarBotao('person')}
            </div>
        </div>
    )
}