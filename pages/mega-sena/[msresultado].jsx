import Link from "next/link"
import Head from "next/head";
//import { useRouter } from "next/router"

import styles from '../../styles/Body.module.css'
import Anuncios from "../../Components/Anuncios"
import { FaRegCalendarAlt } from 'react-icons/fa'
import Bola from '../../Components/Bola';
import MegaSenaResultado from '../../Components/mega-sena/MegaSenaResultado';


export async function getStaticProps(context) {

    const { params } = context

    const URL_Api = `https://loteriascaixa-api.herokuapp.com/api/mega-sena/${params.msresultado}`;

    const api = await fetch(URL_Api);
    const data = await api.json();

    console.log(data)



    return {
        props: { megaSena: data },
    }
}

export async function getStaticPaths() {
    const URL_Api = `https://loteriascaixa-api.herokuapp.com/api/mega-sena/`;

    const api = await fetch(URL_Api);
    const data = await api.json();

    const paths = data.map((msresult) => {
        return {
            params: {
                msresultado: `${msresult.concurso}`,
            }

        }
    })
    return { paths, fallback: false }
}




export default function ResultMegaSena({ megaSena }) {
    //const router = useRouter();
    //const megaId = router.query.msresultado
    function irResultado() {
        const numeroInserido = document.querySelector('#numeroInserido').value;
        const btnPesquisar = document.querySelector('#btnPesquisar');

        //btnPesquisar.setAttribute('href', `/mega-sena/${numeroInserido}`)
        btnPesquisar.innerHTML = `<a href="/mega-sena/${numeroInserido}" > <button>Ver Resultado</button> </a>`

        console.log(btnPesquisar)



        // window.location.href = `/mega-sena/${numeroInserido}`
    }

    const megaS = `Mega Sena ${megaSena.concurso} - mega de hoje`
    const keyW = `mega de hoje, mega sena, mega sena, mega sena ${megaSena.concurso}, ultimo resultado da mega de hoje ${megaSena.concurso}, resultado da loto, resultado da mega sena, mega-sena da virada, mega da virada'`
    const descrip = `Resultado da mega-sena ${megaS} Mega de hoje, resultados e dicas da mega-sena e loterias nacional. Mega de hoje possui o último resultado da mega-sena. megadehoje.`




    return (
        <>
            <Head>
                <meta name='keywords' content={megaS} />
                <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
                <link rel='canonical' href='https://megadehoje.com/' />
                <meta name='description' content={descrip} />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <title>Resultado Mega Sena {megaSena.concurso}</title>
            </Head>

            <Link href="/mega-sena">
                Voltar
            </Link>
            <h2>MEGA-SENA{megaSena.concurso}</h2>
            <div className={styles.bodyMega}>

                <div className={styles.artigo}>
                    <h1>RESULTADO DA MEGA-SENA {megaSena.concurso}: Último resultado sorteado no concurso {megaSena.concurso} da mega de hoje, {megaSena.data}</h1>
                    <h4>O sorteio do concurso {megaSena.concurso} da Mega-Sena foi sorteado hoje, {megaSena.data}. Veja agora o resultado e o valor do prêmio</h4>
                    <div className={styles.apresentacaoMega}>
                        <div className={styles.info}>
                            <input type="number" placeholder='Digite o Sorteiro' id='numeroInserido' onKeyUp={irResultado} minlength="1"
                                maxlength="4" required /> <div id="btnPesquisar" > <Link href=""> <button>Ver Resultado</button> </Link>
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
                                            <Bola bol={megaSena.dezenas[0]} />
                                            <Bola bol={megaSena.dezenas[1]} />
                                            <Bola bol={megaSena.dezenas[2]} />
                                            <Bola bol={megaSena.dezenas[3]} />
                                            <Bola bol={megaSena.dezenas[4]} />
                                            <Bola bol={megaSena.dezenas[5]} />
                                        </div>
                                        <h5>acesse megadehoje.com</h5>
                                        <h3>Próximo Concurso: {megaSena.proxConcurso}</h3>
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
                    <div>
                            <h1>Resultado da mega-sena {megaSena.concurso} dia {megaSena.data}</h1>
                            <p>Sorteio da mega-sena aconteceu hoje, {megaSena.data}, confira agora mesmo o resultado da mega-sena {megaSena.concurso}.</p>
                            <h2>Como ficou o resultado da loteria nacional hoje</h2>
                            <p>É isso mesmo, saiu o resultado do concurso {megaSena.concurso}, realizado a partir das 20:00 hs, dia {megaSena.data}, as dezenas sorteadas foram: <strong>{megaSena.dezenas[0]} - {megaSena.dezenas[1]} - {megaSena.dezenas[2]} - {megaSena.dezenas[3]} - {megaSena.dezenas[5]} - {megaSena.dezenas[5]}</strong>. Foram ... apostas vencedoras da sena, cada um vai receber o valor de R$ ... de reais, ... vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um R$... </p>
                            {/* {acumulaO[1].premio} de reais. Já com 4 acertos (quadra) foram {acumulaO[2].vencedores} apostas ganhadoras, ficando cada um com R$ {acumulaO[2].premio} reais. Confira agora mesmo o resultado da {loteria} {concurso} dia {data} - {diaConcurso}. */}
                        </div>



                    {/* <MegaSenaResultado
                        nome={megaSena.nome}
                        loteria={megaSena.loteria}
                        proxConcurso={megaSena.proxConcurso}
                        dataProxConcurso={megaSena.dataProxConcurso}
                        acumuladaProxConcurso={megaSena.acumuladaProxConcurso}
                        local={megaSena.local}
                        concurso={megaSena.concurso}
                        dezenas={megaSena.dezenas}
                        premiacoes={megaSena.premiacoes}
                        acumulou={megaSena.acumulou}
                        data={megaSena.data}
                    /> */}


                </div>
                <div className={styles.anuncios}>
                    <Anuncios />

                </div>
            </div>


        </>
    )
}