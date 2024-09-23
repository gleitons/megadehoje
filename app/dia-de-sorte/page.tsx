'use client'
import { useState, useEffect } from "react";
import BotaoVoltar from '@/app/components/header/BotaoVoltar'

export default function LotofacilResult() {
  const [data, setData] = useState(null); // Estado para armazenar os dados
  const [loading, setLoading] = useState(true); // Estado para o carregamento
  const [error, setError] = useState(null); // Estado para tratar erros

  useEffect(() => {
    // Função para fazer a chamada à API
    const fetchMegaSena = async () => {
      try {
        const response = await fetch("https://loteriascaixa-api.herokuapp.com/api/timemania/latest");
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da Mega-Sena");
        }
        const result = await response.json();
        setData(result); // Atualiza o estado com os dados da API
        setLoading(false); // Define que o carregamento terminou
      } catch (error) {
        setError(error.message); // Armazena o erro, se ocorrer
        setLoading(false); // Define que o carregamento terminou, mesmo com erro
      }
    };

    fetchMegaSena(); // Chama a função quando o componente é montado
  }, []); // O array vazio faz o `useEffect` rodar apenas uma vez ao carregar o componente

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="p-4">
      <BotaoVoltar />
      <h1 className="text-2xl font-bold">Resultado do Dia de Sorte {data.concurso}</h1>
      {data && (
        <div>
          <p>Concurso: {data.concurso}</p>
          <p>Data: {data.data}</p>
          <p>Números sorteados:</p>
          <ul className="flex space-x-2">
            {data.dezenas.map((numero: string) => (
              <li key={numero} className="text-orange-600 font-semibold">
                {numero}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
