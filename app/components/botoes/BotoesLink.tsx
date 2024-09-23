import Link from "next/link";

export default function BotoesLink({ icone, texto, link }: { icone: React.ReactNode, texto: string, link: string }) {
    return (
        <Link 
            className={`bg-green-600 hover:scale-105 transition-transform hover:brightness-125 w-full p-3 rounded-md flex items-center my-2`} 
            href={link}
        >
            <span className={`w-[50px] text-4xl text-white  text-center items-center rounded-xl`}>
                {icone}
            </span>
            <span className="text-center w-full text-white font-bold">
                {texto}
            </span>
        </Link>
    );
}
