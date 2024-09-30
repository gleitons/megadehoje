export default function Bolas({ numero, cor }) {
    return <div className={`text-xl w-[50px] h-[50px] m-1 font-semibold hover:scale-150 select-none transition-all hover:shadow-xd  text-white ${cor} text-center  p-2 rounded-full shadow-xl`} > {numero} </div>
};
