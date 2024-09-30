import BotaoVoltar from "@/app/components/header/BotaoVoltar";

export default function MegaS() {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <BotaoVoltar cor={"bg-green-600"} />
          <div className="animate-pulse p-6">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="flex space-x-3 mb-4">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
          </div>
        </div>
      );
};
