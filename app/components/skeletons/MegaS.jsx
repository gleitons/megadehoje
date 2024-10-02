import BotaoVoltar from "@/app/components/header/BotaoVoltar";

export default function MegaS() {
    return (
        <span className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <BotaoVoltar cor={"bg-green-600"} />
          <span className="animate-pulse p-6">
            <span className="h-8 bg-gray-300 rounded mb-4"></span>
            <span className="h-6 bg-gray-300 rounded mb-4"></span>
            <span className="flex space-x-3 mb-4">
              <span className="h-10 w-10 bg-gray-300 rounded-full"></span>
              <span className="h-10 w-10 bg-gray-300 rounded-full"></span>
              <span className="h-10 w-10 bg-gray-300 rounded-full"></span>
              <span className="h-10 w-10 bg-gray-300 rounded-full"></span>
              <span className="h-10 w-10 bg-gray-300 rounded-full"></span>
              <span className="h-10 w-10 bg-gray-300 rounded-full"></span>
            </span>
            <span className="h-6 bg-gray-300 rounded mb-4"></span>
            <span className="h-6 bg-gray-300 rounded mb-2"></span>
            <span className="h-6 bg-gray-300 rounded mb-2"></span>
            <span className="h-6 bg-gray-300 rounded mb-2"></span>
          </span>
        </span>
      );
};
