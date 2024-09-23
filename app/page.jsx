import BotoesLink from "./components/botoes/BotoesLink";
import loterias from "./components/loterias/Loterias";


export default function Home() {
  const rLoterias = loterias;

  return (
    <div>
      <div className="w-full md:w-[360px] m-auto">        
       
        <div>
          {rLoterias.map((loteria) => (
            <BotoesLink key={loteria.nome} cor={loteria.cor} texto={loteria.nome} link={loteria.link} icone={loteria.icone} />
          ))}
        </div>
      </div>
    </div>
  );
}
