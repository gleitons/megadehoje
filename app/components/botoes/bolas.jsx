export default function Bolas({ numero, cor }) {
    return <div className={`text-xl w-[50px] h-[50px] m-1 font-semibold hover:scale-150 select-none transition-all   text-white ${cor} text-center  p-2 rounded-full hover:shadow-xl hover:-z-2 hover:border-l-zinc-950`} > {numero} </div>
};
