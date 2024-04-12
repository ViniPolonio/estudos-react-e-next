interface FilhoProps {
    nome:string
    sobrenome: string
}

export default function Filho (props: FilhoProps) {
    return (
        <div className={`
            flex justify-center items-center
            bg-green-600 rounded-md p-5 border border-white
            `}>
                <div className="flex  justify-center gap-2 text-2xl">
                <span className="font-black">Dev</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
            </div>
        </div>
        
    )

}