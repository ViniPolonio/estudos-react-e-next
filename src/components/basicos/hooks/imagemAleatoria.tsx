export default function ImagemAleatoria() {

    function renderizarBotao() {
        return (
            <button className={`
                bg-blue-500 px-10 py-2 rounded-md font-serif text-8xl
            `}>
                Test
            </button>
        )
    }
    
    return (
        <div>
            
            {renderizarBotao()}

            
        </div>
    )
}