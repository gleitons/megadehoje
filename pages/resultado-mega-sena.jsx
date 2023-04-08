import styles from '../styles/Body.module.css'
import Anuncios from "../Components/Anuncios"
import MegaSenaSorteio from '../Components/mega-sena/MegaSenaSorteio';
import { FaRegCalendarAlt } from 'react-icons/fa'
import Bola from '../Components/Bola';
import Head from 'next/head';
import TodosDepoimentos from '../Components/TodosDepoimentos';
import MegaSenaPalpite from '../Components/mega-sena/MegaSenaPalpite';
import MegaSenaResultado from '../Components/mega-sena/MegaSenaResultado';



export async function getStaticProps() {
    const URL_Api = "https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest";

    const api = await fetch(URL_Api);
    var data = await api.json();


    const Anterior = (data.concurso) - 1;
    const bola1 = data.dezenas[0];
    
    return {
        props: { megaSena: data, Anterior, bola1  },
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
                                          {/* {data.map((bm) => (
                                                <li key={bm.concurso} >tim</li>
                                                //< key={bolasMega.concurso} bol={megaSena.bolasMega[1]} />
                                            ))} */}
                                            <Bola bol={bola1} />
                                            <Bola bol={megaSena.dezenas[1]} />
                                            <Bola bol={megaSena.dezenas[2]} />
                                            <Bola bol={megaSena.dezenas[3]} />
                                            <Bola bol={megaSena.dezenas[4]} />
                                            <Bola bol={megaSena.dezenas[5]} />
                                        </div>
                                        <h4>O concurso anterior foi o {Anterior}</h4>
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

                    

                    <MegaSenaResultado
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

                    <TodosDepoimentos />


                </div>
                <div className={styles.anuncios}>
                    <Anuncios />

                </div>
            </div>
        </>
    )
}

