import Image from "next/image";

export default function Menu() {
  return (
    <nav className="flex items-center p-4 bg-gray-100 shadow-lg rounded-md ">
      {/* Logo */}
      <div className="mr-4">
        <Image src="/img/logo-mega-de-hoje.jpg" width={80} height={80} alt="Logo" className="rounded-full" />
      </div>
      {/* Textos */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-center text-green-600">Mega de Hoje</h1>
        <p className="text-gray-500 text-sm text-center">Resultados e dicas da Mega-Sena e outras loterias</p>
        
      </div>
    </nav>
  );
}
