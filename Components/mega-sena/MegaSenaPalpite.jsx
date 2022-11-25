import styles from '/styles/Banners.module.css'
import logoMega from '/public/img/logo-mega-de-hoje.svg'    
import apresenta from '/public/img/palpite-loteria-nacional.webp'
import Bola from '../Bola.jsx'






import Image from 'next/image'
export default function MegaSenaPalpite({ nome, loteria, proxConcurso, dataProxConcurso, acumuladaProxConcurso }) {
    const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const diaProxConcurso = dataProxConcurso;
    const array = Object.values(diaProxConcurso)
    const dia = array.slice(0, 2).join('')
    const mes = mesEmIngles(array.slice(3, 5).join(''))

    const ano = array.slice(6, 10).join('')


    const d = new Date(`${mes} ${dia}, ${ano} 00:00:00`);

    const diaDaSemana = semana[d.getDay()]
    const anota = array.slice(3, 5).join('') * ano


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    //const p1b1 = verificaMaior60(anota);

    // const palpites = [];
    // const palpitesS = palpites.replace('', ' - ')


    // const palpite01 = palpites.push('p1b1');
    // const palpite02 = palpites.push('amor')

    // console.log(palpites)

    // function verificaMaior60(numb) {
    //    console.log(numb)
    //     const numb2 = numb;
    //     if (numb2 > 60) {
    //         var num1 = numb2 / 2;
    //         var num = toString(num1 )
    //     } else {
    //         var num = numb2;
    //     }

    //     return num;
    // }





    function mesEmIngles(mes) {
        const meses = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        const mesref = meses[mes - 1]

        return mesref;

    }

    return (
        <>
            <div className={styles.bannerInstaPalpite}>
                <h2 className={styles.marcadagua}>megadehoje.com</h2>
                <div className={styles.divTop}>
                    <div className={styles.logoM}>
                        <Image src={logoMega} />

                    </div>
                    <div>
                        <div className={styles.sorteioApresentacao}>
                            <Image className={styles.apresenta} src={apresenta} />
                            <div>
                                <p><strong>Palpite da {nome}</strong>, Selecionamos vários palpites para você realizar o seu jogo!</p>
                                <button className={styles.button88} role="button">CLIQUE 2X E FAÇA SUA APOSTA</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.divBottom}>
                    <h2 className={styles.site}>megadehoje.com</h2>

                    <h2 className={styles.concu}> Palpite {loteria} Concurso: <strong>{proxConcurso}</strong></h2>

                    <div className={`${styles.dataSorteioPalpite} ${styles.espaco}`}> <p>Palpite 01:</p>
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />

                    </div>

                    <div className={`${styles.dataSorteio} ${styles.espaco}`}> <p>Palpite 02:</p>
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                    </div>

                    <div className={`${styles.dataSorteio} ${styles.espaco}`}> <p>Palpite 03:</p>
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                        <Bola bol={getRandomInt(1, 60)} />
                    </div>



                    {/* <p className={styles.dataSorteio}>{diaDaSemana}, {dataProxConcurso}</p> */}

                    <h1 className={styles.valorEstimadoPalpite} >Valor Estimado: {acumuladaProxConcurso}</h1>
                    <strong>
                        <p>Sorteio {diaDaSemana}, {dataProxConcurso}</p>
                    </strong>
                </div>

            </div>
            <div>
                <p>@megadehoje - Sentimento Milionário para ganhar na <strong>{nome}</strong> {proxConcurso}</p>
                <p>https://megadehoje.com</p>
                <p>Próximo Sorteio: {diaDaSemana}, {dataProxConcurso} - Prêmio Estimado: {acumuladaProxConcurso} de reais</p>
                <p>@megadehoje Link de acesso na bio, resultados e palpites, acesse;</p>
                <p>#megasena{proxConcurso}</p>
                <p>#palpitemegasena{proxConcurso} </p>
                <p>#{proxConcurso}</p>
                <p>#{proxConcurso - 1}</p>
                <p>#ganharnamegasena{proxConcurso}</p>
                <p>#ganharnamegasena</p>
                <p>#megadehoje</p>
                <p>#loteria{proxConcurso}</p>
                <p>#ganharnaloto{proxConcurso}</p>
                <p>#sentimentos</p>
                <p>#palpitemegasena{proxConcurso}</p>
                <p>#sentimentosmilionarios</p>
                <p>#megasenavirada</p>
                <p>#megasena</p>
                <p>#lotofacil</p>
                <p>#ficarrico</p>
                <p>#leidaatracao</p>
                <p>#leidaatração</p>
            </div>
        </>
    )
}