// import Image from "next/image"
import Logo from '@/app/components/img/Logo'
export default function Footer() {
    return (
        <div className="w-full p-2 fixed bottom-0 py-3 bg-white">
             <Logo />
            {/* <Image className="m-auto" src='/img/logo.svg' width={300} height={200} alt="Logo Mega de Hoje Footer"  /> */}
        </div>
    )
};
