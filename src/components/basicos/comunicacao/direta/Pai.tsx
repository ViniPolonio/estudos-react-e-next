
import Desenvolvedor from "./Filho"

interface PaiProps {
    nome:string
    sobrenome: string
}

export default function Pai (props: PaiProps) {
    return (
        <div className={`
            flex flex-col gap-5
            bg-blue-500 text-white border-white
            rounded-md p-5
        `}>
            
            <div className="flex  justify-center gap-2 text-2xl">
                <span className="font-black">Responsável BackEnd :</span>
                <span>{props.nome}</span>
                
            </div>
            <div className="flex gap-5">
            <Desenvolvedor nome="Alysson" sobrenome={props.sobrenome}/>
            <Desenvolvedor nome="Lucas" sobrenome={props.sobrenome}/>
            <Desenvolvedor nome="Junior" sobrenome={props.sobrenome}/>
            </div>
        </div>
    )
}