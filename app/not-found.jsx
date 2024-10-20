import Redireciona from "./components/loterias/Redireciona";

export default function Page() {

    return (
        <div className="flex flex-col justify-center items-center h-1/2">
            <Redireciona />
            <h1 className="text-4xl font-bold text-gray-800">404</h1>
            <p className="text-lg text-gray-600">Página não encontrada</p>
        </div>
    );
};
