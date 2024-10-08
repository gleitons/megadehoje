import Link from "next/link";
export default function BotaoVoltar({cor}) {
    return (
      <Link href='/'>
        <button className={`${cor} text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-green-700 hover:brightness-125 transition duration-300 ease-in-out`}>
          Voltar
        </button>
      </Link>
    );
  }
  