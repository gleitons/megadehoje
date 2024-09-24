import BotaoVoltar from "../header/BotaoVoltar";
export default function EmConstrucao() {
    return (
      <div className="flex flex-col items-center justify-center h-30 bg-gray-100">
        <BotaoVoltar cor={'text-yellow-500'} />
        <div className="bg-white p-6 rounded-t-lg shadow-lg">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            🚧 Em Construção 🚧
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Estamos trabalhando nesta seção. Em breve, mais novidades!
          </p>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 border-t-4 border-yellow-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }
  