import styles from '../styles/Body.module.css'
import Anuncios from "../Components/Anuncios"
import TodosDepoimentos from "../Components/TodosDepoimentos";
import Link from "next/link"
import { FaRegCalendarAlt } from 'react-icons/fa'
import Bola from '../Components/Bola';
import Head from 'next/head';






export async function getStaticProps() {
    const URL_Api = 'https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest'

    const api = await fetch(URL_Api);
    const data = await api.json();


    const Anterior = (data.concurso) - 1;
    const bola1 = data.dezenas[0];
    // if (megaSena.acumulou == true) {
    //     var acumulou = 'ACUMULOU'
    // } else {
    //     var acumulou = 'TEVE VENCEDOR(A)'
    // }
    return {
        props: {
            megaSena: data, Anterior, bola1
           
        }
    }
}
export default function MegaSena({ megaSena, Anterior, bola1 }) {
   
    return (
        
        <>
            <Head>            
            <meta name="keywords" content="mega de hoje, mega sena, resultado da loto, resultado da mega sena, mega-sena da virada, mega da virada"/>  
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <link rel="canonical" href="https://megadehoje.com/" />
            <meta name="description" content="Mega de hoje, resultados e dicas da mega-sena e loterias nacional. Mega de hoje possui o último resultado da mega-sena. megadehoje." />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>Resultado da Mega Sena - mega de hoje</title>
            </Head>
            <div className={styles.bodyMega}>
                <div className={styles.artigo}>
                    <h1>Mega-Sena</h1>


                    <div className={styles.apresentacaoMega}>
                        <div className={styles.info}>
                            <h2>Mega Sena</h2>
                            <p>A Mega Sena é a maior loteria do Brasil e uma das maiores do mundo, com um prêmio principal que pode valer centenas de milhões de reais. Os sorteios acontecem às quartas e sábados em semanas regulares, mas também tem uma série de sorteios especiais e Mega Semanas ao longo do ano.</p>
                            <p>O site MegaSena.com fornece os últimos resultados assim que estão disponíveis, informações sobre quando você pode esperar o próximo grande evento e tudo o mais que precisa saber do jogo.</p>
                            <h3>Resultados da Mega Sena</h3>
                            <p>Você encontrará os últimos resultados da Mega Sena logo após a realização de cada sorteio. Descubra os números vencedores e se o prêmio principal foi ganho ou não. Vá para a página de Resultados para ver quantos jogadores ganharam em cada categoria.</p>
                        </div>
                        <div  >
                            <div className={styles.resultados}>
                                <div className={styles.infoResult}>
                                    <h2>Último resultado</h2>
                                    <h3>Concurso: {megaSena.concurso}</h3>

                                </div>
                                <div>
                                    <div>
                                        <div className={styles.dataMega}>
                                            <FaRegCalendarAlt />
                                            <p>{megaSena.data}</p>
                                        </div>
                                        <div className={styles.divBolas}>
                                            <Bola bol={bola1} />
                                            <Bola bol={megaSena.dezenas[1]} />
                                            <Bola bol={megaSena.dezenas[2]} />
                                            <Bola bol={megaSena.dezenas[3]} />
                                            <Bola bol={megaSena.dezenas[4]} />
                                            <Bola bol={megaSena.dezenas[5]} />
                                        </div>
                                        <h2>{Anterior}</h2>
                                        <h3>Próximo Concurso: {megaSena.acumuladaProxConcurso}</h3>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.proximoP}>
                                <p>O prêmio da Mega Sena previsto para {megaSena.dataProxConcurso} é de:</p>
                                <h3>Próximo Concurso: {megaSena.acumuladaProxConcurso}</h3>
                            </div>
                        </div>

                    </div>
                  



                    <h2>o que é a Mega-Sena</h2>
                    <p>A Mega-Sena é a maior modalidade lotérica do Brasil, sendo uma entre as dez modalidades atuais das loterias da Caixa (Caixa Econômica Federal), com sorteios ordinários duas vezes por semana, além da Mega-Sena da Virada e outras modalidades de prêmios, devido a baixa arrecadação de Mercado.

                        Para ganhar o prêmio máximo da Mega-Sena, denominado sena, é necessário obter coincidência entre seis dos números apostados e os seis números sorteados, de um total de seis dezenas (de um a sessenta), independentemente da ordem da aposta ou da ordem do sorteio. O concurso prevê também a chance de se ganhar parte do prêmio máximo, pelo acerto da quina (apenas cinco dos números sorteados), ou da quadra (apenas quatro dos números sorteados), com prêmios significativamente menores que aquele que seria pago na ocorrência do acerto da sena, sendo o da quina maior que o da quadra.</p>

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

