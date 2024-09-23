"use client";
import { useState, useEffect } from "react";
import BotaoVoltar from "@/app/components/header/BotaoVoltar";

export default function MegaSenaCard() {
  const [data, setData] = useState<{
    concurso: string;
    data: string;
    dezenas: number[];
    acumulado: boolean;
    premiacoes: { valor: number }[];
    dataProximoConcurso: string;
    localGanhador?: string;
  } | null>(null); // Definindo o tipo de dados
  const [loading, setLoading] = useState(true); // Estado para o carregamento
  const [error, setError] = useState<string | null>(null); // Atualizando o tipo do estado de erro

  useEffect(() => {
    // Função para fazer a chamada à API
    const fetchMegaSena = async () => {
      try {
        const response = await fetch(
          "https://loteriascaixa-api.herokuapp.com/api/megasena/latest"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da Mega-Sena");
        }
        const result = await response.json();
        setData(result); // Atualiza o estado com os dados da API
        setLoading(false); // Define que o carregamento terminou
      } catch (error: unknown) {
        // Especificando o tipo como 'unknown'
        if (error instanceof Error) {
          // Verificando se é uma instância de Error
          setError(error.message); // Armazena o erro, se ocorrer
        } else {
          setError("Erro desconhecido"); // Mensagem padrão para erro desconhecido
        }
        setLoading(false); // Define que o carregamento terminou, mesmo com erro
      }
    };

    fetchMegaSena(); // Chama a função quando o componente é montado
  }, []); // O array vazio faz o `useEffect` rodar apenas uma vez ao carregar o componente

  if (loading)
    return (
      <p>
        <BotaoVoltar cor={'bg-green-600'} /> Carregando... <br />
      </p>
    );
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <BotaoVoltar cor={'bg-green-600'} />{" "}
      <div>
        <br />
      </div>
      <div className="bg-green-600 p-4">
        <h2 className="text-white text-xl font-bold">
          Mega-Sena - Concurso {data?.concurso}
        </h2>
        <p className="text-white">Data: {data?.data}</p>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-700">Números Sorteados:</h3>
        <ul className="flex space-x-3 my-4">
          {data?.dezenas.map((numero) => (
            <li
              key={numero}
              className="text-2xl w-[50px] m-1 font-semibold hover:scale-150 select-none transition-all hover:shadow-xd text-green-600 bg-gray-200 p-2 rounded-md shadow-md"
            >
              {numero}
            </li>
          ))}
        </ul>

        <p className="text-gray-700">
          <span className="font-semibold select-none">Prêmio:</span> R${" "}
          {data?.acumulado ? data?.acumulado : data?.premiacoes[0].valor}
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

        <p className="mt-4 text-center text-white bg-green-600 p-2 rounded-lg">
          Boa sorte no próximo sorteio!
        </p>
      </div>
    </div>
  );
}
