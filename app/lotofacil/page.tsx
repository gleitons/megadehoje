"use client";

import { useEffect, useState } from "react";
import BotaoVoltar from "../components/header/BotaoVoltar";

export default function Page() {
  const [data, setData] = useState<{
    concurso: string;
    data: string;
    dezenas: number[];
    acumulado: boolean;
    premiacoes: { valorPremio: number }[];
    dataProximoConcurso: string;
    localGanhador?: string;
   
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLotofacil = async () => {
      try {
        const response = await fetch(
          "https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest"
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar resultado da Mega-Sena");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro Desconhecido");
        }
        setLoading(false);
      }
    };
    fetchLotofacil();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <BotaoVoltar cor={'bg-purple-600'} />{" "}
      <div>
        <br />
      </div>
      <div className="bg-purple-600 p-4 rounded-t-xl">
        <h2 className="text-white text-xl text-center font-bold">
          Mega-Sena - Concurso {data?.concurso}
        </h2>
        <p className="text-white text-center">Data: {data?.data}</p>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-700">Números Sorteados:</h3>
        <ul className="flex flex-wrap justify-center ">
          {data?.dezenas.map((numero) => (
            <li
              key={numero}
              className="text-2xl w-[50px] m-1 font-semibold hover:scale-150 select-none transition-all hover:shadow-xd text-purple-600 bg-gray-200 p-2 rounded-md shadow-md"
            >
              {numero}
            </li>
          ))}
        </ul>

        <p className="text-gray-700">
          <span className="font-semibold select-none">Prêmio:</span> R$ {data?.premiacoes[0]?.valorPremio} {/* Corrigido para acessar 'valor' */}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold select-none">Acumulado:</span>{" "}
          {data?.acumulado ? "Sim" : "Não"}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold select-none">Próximo Sorteio:</span>{" "}
          {data?.dataProximoConcurso}
        </p>

        {data?.localGanhador && (
          <p className="text-gray-700">
            <span className="font-semibold select-none">Ganhador Local:</span>{" "}
            {data?.localGanhador}
          </p>
        )}

        <p className="mt-4 text-center text-white bg-purple-600 p-2 rounded-lg">
          Boa sorte no próximo sorteio!
        </p>
      </div>
    </div>
  );
}
