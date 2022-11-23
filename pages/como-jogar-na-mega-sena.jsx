import Image from "next/image"
import jogarOnline from '../public/img/jogar-na-mega-sena-online-megadehoje.png'
import jogarOnline2 from '../public/img/aposte-hoje-mesmo.png'
import styles from '../styles/Body.module.css'
import Anuncios from "../Components/Anuncios"
import TodosDepoimentos from "../Components/TodosDepoimentos";
import Link from "next/link"
export default function Comojogar() {
    return (
        <>
        <div className={styles.bodyMega}>
            <div className={styles.artigo}>
                <h1>Como Jogar na Mega-Sena</h1>
                <h2>Dicas e cursos de como jogar na loteria federal online</h2>
                <p>Jogar nas loterias Online é seguro. Você pode realizar boloes, salvar jogos, analisar e muito mais, tudo isso no conforto de sua casa, sem enfrentar as terríveis filas das lotéricas. Vamos ter dicas de como jogar na loteria federal totalmente online.</p>
                <div className = {styles.jogarImage}>
                    <Image src={jogarOnline} />
                    <Image src={jogarOnline2} />
                </div>
                <h2>Depoimentos</h2>
                <p>Escolhemos um site de confiança que está a mais de 12 anos no mercado e já distribuiu mais de 100 milhões de reais em prêmios. Confira os depoimentos de quem também já jogou e confia.</p>
                
                <TodosDepoimentos />
                <p>Todos os depoimentos são de pessoas que agora apostam online sem sair do conforto de sua casa. Depoimento de pessoas que conseguiram realizar bolões por apenas R$ 10,00 e serem premiadas nesse ano de 2021.</p>

                <p>Não perca essa oportunidade, jogue online agora mesmo.</p>
                <h2>Como jogar na Mega-sena</h2>
                <p>A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).</p>
                <p>Para jogar online, basta acessar o link abaixo:</p>
                <Link href='http://bit.ly/aposte-online' target='_blank' ><button>Jogar Online Agora mesmo</button></Link>

            </div>
            <div className={styles.anuncios}>
            <Anuncios />
                
            </div>
        </div>
        </>
    )
}
