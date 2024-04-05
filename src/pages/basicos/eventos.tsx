import Evento from "@/components/basicos/Eventos";

export default function PaginasEventos() {
    return (
        <div className="flex justify-center flex-wrap gap-5 bg-black h-screen p-10">
            <Evento />
            <Evento />
            <Evento />
        </div>
    )
}