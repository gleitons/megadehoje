import styles from '../../styles/Body.module.css'
import Anuncios from "../../Components/Anuncios"
import MegaSenaSorteio from '../../Components/mega-sena/MegaSenaSorteio';
import { FaRegCalendarAlt } from 'react-icons/fa'
import Bola from '../../Components/Bola';
import Head from 'next/head';
import Link from 'next/link';
import TodosDepoimentos from '../../Components/TodosDepoimentos';
import MegaSenaPalpite from '../../Components/mega-sena/MegaSenaPalpite';
import MegaSenaResultado from '../../Components/mega-sena/MegaSenaResultado';





export async function getStaticProps() {
    const URL_Api = "https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest";

    const api = await fetch(URL_Api);
    console.log(api)
    const data = await api.json();


    const Anterior = (data.concurso) - 1;
    const bola1 = data.dezenas[0];
    const premiacao = data.premiacoes;
    console.log(premiacao)
    
    return {
        props: {
            megaSena: data, Anterior, bola1, premiacao

        }
    }
    
}

function irResultado() {
    const numeroInserido = document.querySelector('#numeroInserido').value;
    const btnPesquisar = document.querySelector('#btnPesquisar');

    //btnPesquisar.setAttribute('href', `/mega-sena/${numeroInserido}`)
    btnPesquisar.innerHTML = `<a href="/mega-sena/${numeroInserido}" > <button>Ver Resultado</button> </a>`

    console.log(btnPesquisar)



    // window.location.href = `/mega-sena/${numeroInserido}`
}


export default function MegaSena({ megaSena, Anterior, bola1, premiacao }) {
    const megaS = `Mega Sena ${megaSena.concurso} - mega de hoje`
    const keyW = `mega de hoje, mega sena, mega sena, mega sena ${megaSena.concurso}, ultimo resultado da mega de hoje ${megaSena.concurso}, resultado da loto, resultado da mega sena, mega-sena da virada, mega da virada'`

    function irResultado() {
        const numeroInserido = document.querySelector('#numeroInserido').value;

        window.location.href = `/mega-sena/${numeroInserido}`
    }

    return (

        <>
            <Head>
                <meta name='keywords' content={keyW} />
                <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
                <link rel='canonical' href='https://megadehoje.com/' />
                <meta name='description' content='Mega de hoje, resultados e dicas da mega-sena e loterias nacional. Mega de hoje possui o último resultado da mega-sena. megadehoje.' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <title>{megaS}</title>
            </Head>
            <div className={styles.bodyMega}>
                <div className={styles.artigo}>
                    <h1>Mega-Sena {megaSena.concurso}</h1>
                    <div className={styles.apresentacaoMega}>
                        <div className={styles.info}>
                        <input type="number" placeholder='Digite o Sorteiro' id='numeroInserido' onKeyUp={irResultado} minlength="1"
                                maxlength="4" required /> <div id="btnPesquisar" > <a  href="#"> <button>Ver Resultado</button> </a>
                                    </div> 
                            <h2>Mega Sena {megaSena.concurso}</h2>
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
                                        <h5>acesse megadehoje.com</h5>
                                        <h3>Próximo Concurso: {megaSena.acumuladaProxConcurso}</h3>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.proximoP}>
                                {/* <li>Sena: {premiacao} ganhadores</li>
                                <li>Quina: {megaSena.concurso} ganhadores</li>
                                <li>Quadra: {megaSena.concurso} ganhadores</li> */}
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

                    {/* <MegaSenaPalpite
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

