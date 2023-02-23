import styles from '../styles/Body.module.css'
import Anuncios from "../Components/Anuncios"
import Image from "next/image"
import Link from "next/link"
import logoMega from '/public/img/logo-mega-de-hoje.svg'
import LogoCss from '../Components/LogoCss'
export default function Sobre() {
    return (
        <>
         <div className={styles.bodyMega}>
            <div className={styles.artigo}>
                <h1>Sobre Mega de Hoje</h1>  
                <LogoCss />
                               
                    {/* <Image src={logoMega} width={360} alt={"Mega de hoje"}/> */}
                  
               <p>Somos um site com notícias, informações e dicas de como ganhar na mega-sena. Criado em 2018 o megadehoje.com te informa os últimos sorteios e premiações que aconteceram na mega sena. Confira nosso canal no youtube e instagram. Resultado e dicas de como ganhar na lotofácil, mega-sena e muito mais, todas as loterias nacional.</p>
                <p>Jogar nas loterias Online é seguro. Você pode realizar boloes, salvar jogos, analisar e muito mais, tudo isso no conforto de sua casa, sem enfrentar as terríveis filas das lotéricas. Vamos ter dicas de como jogar na loteria federal totalmente online.</p>
                
                

                <p>Não perca essa oportunidade, jogue online agora mesmo.</p>
                <h2>Como jogar na Mega-sena</h2>
                <p>A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).</p>
                <p>Para jogar online, basta acessar o link abaixo:</p>
                <Link href='http://bit.ly/aposte-online' target='_blank' ><button>Jogar Online Agora mesmo</button></Link>
                <div className={styles.imgContato}>
                        <Image src={logoMega} alt={"Mega de hoje"} />
                    </div>
               

            </div>
            <div className={styles.anuncios}>
            <Anuncios />
                
            </div>
        </div>
        </>
    )
}