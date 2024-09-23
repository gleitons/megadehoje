'use client'
import { useState, useEffect } from "react";
import BotaoVoltar from '@/app/components/header/BotaoVoltar'

export default function LotofacilCard() {
  const [data, setData] = useState(null); // Estado para armazenar os dados
  const [loading, setLoading] = useState(true); // Estado para o carregamento
  const [error, setError] = useState(null); // Estado para tratar erros

  useEffect(() => {
    // Função para fazer a chamada à API
    const fetchLotofacil = async () => {
      try {
        const response = await fetch("https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest");
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da Lotofácil");
        }
        const result = await response.json();
        setData(result); // Atualiza o estado com os dados da API
        setLoading(false); // Define que o carregamento terminou
      } catch (error) {
        setError(error.message); // Armazena o erro, se ocorrer
        setLoading(false); // Define que o carregamento terminou, mesmo com erro
      }
    };

    fetchLotofacil(); // Chama a função quando o componente é montado
  }, []); // O array vazio faz o `useEffect` rodar apenas uma vez ao carregar o componente

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="max-w-sm mx-auto bg-purple-600 text-white shadow-lg rounded-lg overflow-hidden">
        <BotaoVoltar /> <div><br /></div>
      <div className="bg-purple-800 p-4">
        <h2 className="text-xl font-bold">Lotofácil - Concurso {data.concurso}</h2>
        <p>Data: {data.data}</p>
      </div>

      <div className="p-6 bg-white text-gray-900">
        <h3 className="text-lg font-bold text-purple-700">Números Sorteados:</h3>
        <ul className="flex flex-wrap justify-center space-x-2 my-4">
          {data.dezenas.map((numero) => (
            <li key={numero} className="text-xl font-semibold bg-purple-200 p-2 rounded-md">
              {numero}
            </li>
          ))}
        </ul>

        <p className="text-gray-700">
          <span className="font-semibold">Prêmio:</span> R$ {data.acumulado ? data.acumulado : data.premiacoes[0].valor}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Acumulado:</span> {data.acumulado ? 'Sim' : 'Não'}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Próximo Sorteio:</span> {data.dataProximoConcurso}
        </p>

        {data.localGanhador && (
          <p className="text-gray-700">
            <span className="font-semibold">Ganhador Local:</span> {data.localGanhador}
          </p>
        )}
      </div>

      <div className="bg-purple-800 text-white text-center p-3">
        <p>Boa sorte no próximo sorteio!</p>
      </div>
    </div>
  );
}
