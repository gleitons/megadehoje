"use client";
import { useState, useEffect } from "react";
import BotaoVoltar from "@/app/components/header/BotaoVoltar";
import Bolas from "@/app/components/botoes/bolas";
import MegaS from "@/app/components/skeletons/MegaS";

export default function MegaSenaCard() {
  const [data, setData] = useState<{
    concurso: string;
    data: string;
    dezenas: number[];
    acumulado: boolean;
    premiacoes: { valor: number; ganhadores: number, valorPremio: number }[]; // Adicionando 'ganhadores' aqui
    ganhadores: { ganhadores: number }[]; // Esta linha pode ser removida se não for usada
    dataProximoConcurso: string;
    localGanhador?: string;
    local: string;
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
        <MegaS  />
      </p>
    );
  if (error) return <p><BotaoVoltar cor={"bg-green-600"} />{" "} <br />Erro: Atualize a página Novamente -  {error}</p>;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <BotaoVoltar cor={"bg-green-600"} />{" "}
      <div>
        <br />
      </div>
      <div className="bg-green-600 p-4">
        <h1 className="text-white text-2xl font-bold text-center">ACUMULOU</h1>
        <h2 className="text-white text-xl font-bold text-center">
          Mega-Sena - Concurso {data?.concurso}
        </h2>
        <div>
          <p className="text-white">Data: {data?.data}</p>
          <div>
            <p className="text-white text-center">LOCAL</p>
            <p className="text-white text-center ">
              Local: <strong>{data?.local.split("em")[1]}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-700">Números Sorteados:</h3>
        <ul className="flex space-x-3 my-4">
          {data?.dezenas.map((numero) => (
            <Bolas key={numero} cor={"bg-green-600"} numero={numero} />
          ))}
        </ul>
      </div>
      <div>
      <table className="table-auto w-full border-collapse border text-xs border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">PREMIAÇÃO</th>
            <th className="px-4 py-2 border border-gray-300">GANHADORES</th>
            <th className="px-4 py-2 border border-gray-300">PRÊMIO</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-300 text-center">SENA</td>
            <td className="px-4 py-2 border border-gray-300 text-center">{data?.premiacoes[0]?.ganhadores || 0}</td> 
            <td className="px-4 py-2 border border-gray-300">{data?.premiacoes[0]?.valorPremio?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) || 0}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-300 text-center">QUINA</td>
            <td className="px-4 py-2 border border-gray-300 text-center">{data?.premiacoes[1]?.ganhadores || 0}</td>
            <td className="px-4 py-2 border border-gray-300">{data?.premiacoes[1]?.valorPremio?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) || 0}</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-300 text-center">QUADRA</td>
            <td className="px-4 py-2 border border-gray-300 text-center">{(data?.premiacoes[2]?.ganhadores) || 0}</td>
            <td className="px-4 py-2 border border-gray-300">{data?.premiacoes[2]?.valorPremio?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) || 0}</td>
          </tr>
        </tbody>
      </table>

       
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
