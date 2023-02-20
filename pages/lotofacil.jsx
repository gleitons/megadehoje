import styles from '../styles/Body.module.css'
import Anuncios from "../Components/Anuncios"
import MegaSenaSorteio from '../Components/lotofacil/lotofacilSorteio';
import { FaRegCalendarAlt } from 'react-icons/fa'
import Bola from '../Components/Bola';
import Head from 'next/head';
import TodosDepoimentos from '../Components/TodosDepoimentos';
import MegaSenaPalpite from '../Components/lotofacil/lotofacilPalpite';
import MegaSenaResultado from '../Components/lotofacil/lotofacilResultado';
import Link from 'next/link';





export async function getStaticProps() {
    const URL_Api = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest";

    const api = await fetch(URL_Api);
    console.log(api)
    const data = await api.json();


    const Anterior = (data.concurso) - 1;
    const bola1 = data.dezenas[0];
    
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
                <meta name="keywords" content="mega de hoje, mega sena, resultado da loto, resultado da mega sena, mega-sena da virada, mega da virada" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
                <link rel="canonical" href="https://megadehoje.com/" />
                <meta name="description" content="Mega de hoje, resultados e dicas da mega-sena e loterias nacional. Mega de hoje possui o último resultado da mega-sena. megadehoje." />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Resultado da Mega Sena - mega de hoje</title>
            </Head>
            <div className={styles.bodyMega}>
                <div className={styles.artigo}>
                    <h1>Lotofácil</h1>
                    <div className={styles.apresentacaoMega}>
                        <div className={styles.info}>
                            <h2>Lotofácil</h2>
                            <p>A Lotofácil é, como o próprio nome diz, fácil de apostar e principalmente de ganhar. Você marca entre 15 e 20 números, dentre os 25 disponíveis no volante, e fatura prêmio se acertar 11, 12, 13, 14 ou 15 números. Pode ainda deixar que o sistema escolha os números para você por meio da Surpresinha, ou concorrer com a mesma aposta por 3, 6, 12, 18 ou 24 concursos consecutivos através da Teimosinha.</p>
                            <p>O site<Link href="/lotofacil"> megadehoje.com </Link>fornece os últimos resultados assim que estão disponíveis, informações sobre quando você pode esperar o próximo grande evento e tudo o mais que precisa saber do jogo.</p>
                            <h3>Resultados da Lotofácil</h3>
                            <p>Você encontrará os últimos resultados da lotofácil logo após a realização de cada sorteio. Descubra os números vencedores e se o prêmio principal foi ganho ou não. Vá para a página de Resultados para ver quantos jogadores ganharam em cada categoria.</p>
                        </div>
                        <div  >
                            <div className={styles.resultadosLotofacil}>
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
                                        <div className={styles.divBolasLotofacil}>
                                            <Bola bol={bola1} />
                                            <Bola bol={megaSena.dezenas[1]} />
                                            <Bola bol={megaSena.dezenas[2]} />
                                            <Bola bol={megaSena.dezenas[3]} />
                                            <Bola bol={megaSena.dezenas[4]} />
                                            <Bola bol={megaSena.dezenas[5]} /> 
                                            <Bola bol={megaSena.dezenas[6]} />
                                            <Bola bol={megaSena.dezenas[7]} />
                                            <Bola bol={megaSena.dezenas[8]} />
                                            <Bola bol={megaSena.dezenas[9]} />
                                            <Bola bol={megaSena.dezenas[10]} />
                                            <Bola bol={megaSena.dezenas[11]} />
                                            <Bola bol={megaSena.dezenas[12]} />
                                            <Bola bol={megaSena.dezenas[13]} />
                                            <Bola bol={megaSena.dezenas[14]} />
                                           
                                        </div>
                                        {/* <h2>No sorterio anterior {Anterior} teve {megaSena.vencedores}</h2> */}
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

                    

                    {/* <MegaSenaResultado
                        nome={megaSena.nome}
                        loteria={megaSena.loteria}
                        proxConcurso={megaSena.proxConcurso}
                        dataProxConcurso={megaSena.dataProxConcurso}
                        acumuladaProxConcurso={megaSena.acumuladaProxConcurso}
                        local = {megaSena.local}
                        concurso = {megaSena.concurso}
                        dezenas = {megaSena.dezenas}
                        premiacoes = {megaSena.premiacoes}
                        acumulou = {megaSena.acumulou}
                        data = {megaSena.data}
                    />

                    <MegaSenaPalpite
                        nome={megaSena.nome}
                        loteria={megaSena.loteria}
                        proxConcurso={megaSena.proxConcurso}
                        dataProxConcurso={megaSena.dataProxConcurso}
                        acumuladaProxConcurso={megaSena.acumuladaProxConcurso}
                    />
                    <MegaSenaSorteio
                        nome={megaSena.nome}
                        loteria={megaSena.loteria}
                        proxConcurso={megaSena.proxConcurso}
                        dataProxConcurso={megaSena.dataProxConcurso}
                        acumuladaProxConcurso={megaSena.acumuladaProxConcurso}
                    />              

                    <TodosDepoimentos /> */}


                </div>
                <div className={styles.anuncios}>
                    <Anuncios />

                </div>
            </div>
        </>
    )
}

