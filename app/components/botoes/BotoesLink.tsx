import Link from "next/link"

export default function BotoesLink({icone, texto, link, cor} : {icone:React.ReactNode, texto:string,  link:string, cor:string}) {
   
    return (
        <Link className={`bg${cor} hover:scale-105 hover:transition-all hover:filter hover:brightness-125   w-full p-3 rounded-md flex  items-center my-2`} href={link}>
            <span className={`w-[50px] text-4xl text${cor} bg-black text-center items-center rounded-xl  filter invert `}>{icone}</span>
            <span className="text-center w-full text-white font-bold">{texto}</span>

        </Link>
    )
};
