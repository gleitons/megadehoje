import styles from '../styles/Body.module.css'
import Anuncios from "../Components/Anuncios"
import Image from 'next/image'
import contato from '/public/img/entre-contato-conosco-min.jpg'
import Link from "next/link"
export default function Duvidas() {
    return (
        <>
         <div className={styles.bodyMega}>
            <div className={styles.artigo}>
                <h1>Entre em contato</h1>
                
               
                
                    <div className={styles.imgContato}>
                        <Image src={contato} />
                    </div>
                   
               
                <p>A Lotofácil é uma modalidade de loteria praticada no Brasil sob o controle da Caixa Econômica Federal (CEF). Seu primeiro concurso foi realizado em 29 de setembro de 2003, após lentidão no processo de aprovação no Congresso Nacional. Pouco tempo após seu lançamento, era a segunda loteria que mais arrecadava dinheiro para a CEF, atrás apenas da Mega-Sena. Nesta modalidade, o jogador deve marcar entre quinze e vinte números no volante, dentre os 25 disponíveis, e ganha um prêmio em dinheiro caso acerte entre onze e quinze números. Os concursos de final zero e o concurso especial de setembro, conhecido como Lotofácil da Independência, têm um prêmio composto da acumulação de sorteios comuns. Os sorteios são realizados diariamente, exceto aos domingos, desde agosto de 2020, e são transmitidos ao vivo. Parte dos valores arrecadados são repassados para programas sociais do governo.</p>
                <p>Jogar nas loterias Online é seguro. Você pode realizar boloes, salvar jogos, analisar e muito mais, tudo isso no conforto de sua casa, sem enfrentar as terríveis filas das lotéricas. Vamos ter dicas de como jogar na loteria federal totalmente online.</p>
                
                

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