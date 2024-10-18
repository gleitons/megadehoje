"use client";

import { useEffect, useState } from "react";
import BotaoVoltar from "../components/header/BotaoVoltar";
import Bolas from "@/app/components/botoes/bolas";
import MegaS from "../components/skeletons/MegaS";

export default function Page() {
  const [data, setData] = useState<{
    concurso: string;
    data: string;
    dezenas: number[];
    acumulado: boolean;
    premiacoes: { valorPremio: number; ganhadores: number }[];
    dataProximoConcurso: string;
    localGanhador?: string;
    local: string;
    valorEstimadoProximoConcurso: number;
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

  if (loading) return <MegaS cor={'purple'} />;
  if (error)
    return (
      <p>
        <BotaoVoltar cor={"bg-green-600"} /> <br />
        Erro: Atualize a página Novamente - {error}
      </p>
    );

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
     
      <BotaoVoltar cor={"bg-purple-600"} />
      <div>
        <br />
      </div>
      <div className="bg-purple-600 p-4 rounded-t-xl">
        <h2 className="text-white text-xl text-center font-bold">
          Lotofácil - Concurso {data?.concurso}
        </h2>
        <p className="text-white text-center">Data: {data?.data}</p>
        <h3 className="text-white text-xl text-center font-bold">
          {data?.acumulado ? "ACUMULOU" : "TEVE GANHADOR"}
        </h3>
      </div>
      <div className="p-6">
      <h3 className="text-lg text-gray-500 text-center ">:Próximo Sorteio:</h3>
        <h1 className="text-2xl font-bold text-center text-gray-700">{data?.valorEstimadoProximoConcurso.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}:</h1>
        <h3 className="text-lg font-bold text-gray-700">Números Sorteados:</h3>
        <ul className="flex flex-wrap justify-center">
          {data?.dezenas.map((numero) => (
            <Bolas key={numero} cor={"bg-purple-500"} numero={numero} />
          ))}
        </ul>
        <div className="bg-purple-500 text-white mt-4 p-2 rounded-lg">
          <p className="text-white-700 text-center">
            <span className="font-semibold select-none text-center">
              Aposta de 15 números vencedoras:{" "}
              {data?.premiacoes[0]?.ganhadores.toLocaleString("pt-br")}
            </span>
          </p>
        </div>
        <div className="mt-4">
          <table className="table-auto w-full border-collapse border text-xs border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300">ACERTOS</th>
                <th className="px-4 py-2 border border-gray-300">VENCEDOR</th>
                <th className="px-4 py-2 border border-gray-300">PRÊMIAÇÃO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  15
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {data?.premiacoes[0]?.ganhadores.toLocaleString("pt-br")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {data?.premiacoes[0]?.valorPremio.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  14
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {data?.premiacoes[1]?.ganhadores.toLocaleString("pt-br")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {data?.premiacoes[1]?.valorPremio.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  13
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {data?.premiacoes[2]?.ganhadores.toLocaleString("pt-br")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {data?.premiacoes[2]?.valorPremio.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  12
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {data?.premiacoes[3]?.ganhadores.toLocaleString("pt-br")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {data?.premiacoes[3]?.valorPremio.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  11
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {data?.premiacoes[4]?.ganhadores.toLocaleString("pt-br")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {data?.premiacoes[4]?.valorPremio.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-white bg-purple-600 p-2 rounded-lg">
          Próximo sorteio! {data?.dataProximoConcurso}
        </p>
      </div>
    </div>
  );
}
