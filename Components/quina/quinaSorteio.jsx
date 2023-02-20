import styles from '/styles/Banners.module.css'
import logoMega from '/public/img/logo-mega-de-hoje.svg'
import apresenta from '/public/img/apresenta-mega-jogo.png'

import Image from 'next/image'
export default function MegaSenaSorteio({ nome, loteria, proxConcurso, dataProxConcurso, acumuladaProxConcurso }) {
    const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const diaProxConcurso = dataProxConcurso;
    const array = Object.values(diaProxConcurso)
    const dia = array.slice(0, 2).join('')
    const mes = mesEmIngles(array.slice(3, 5).join(''))

    const ano = array.slice(6, 10).join('')


    const d = new Date(`${mes} ${dia}, ${ano} 00:00:00`);

    const diaDaSemana = semana[d.getDay()]

    function mesEmIngles(mes) {
        const meses = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        const mesref = meses[mes - 1]
       
        return mesref;

    }

    return (
        <>
            <div className={styles.bannerInsta}>
                <h2 className={styles.marcadagua}>megadehoje.com</h2>
                <div className={styles.divTop}>
                    <div className={styles.logoM}>
                        <Image src={logoMega} alt={"Mega de hoje"} />

                    </div>
                    <div>
                        <div className={styles.sorteioApresentacao}>
                            <Image className={styles.apresenta} src={apresenta} alt={"Mega de hoje"} />
                            <div>
                                <p>Proximo sorteio da <strong>{nome}</strong>, não deixe de ralizar sua aposta online!</p>
                                <button className={styles.button88} role="button">CLIQUE 2X E FAÇA SUA APOSTA</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.divBottom}>
                    <h2 className={styles.site}>megadehoje.com</h2>
                    <h1>Sorteio {loteria}</h1>
                    <h1 className={styles.concu}>Concurso: <strong>{proxConcurso}</strong></h1>
                    <p className={styles.dataSorteio}>{diaDaSemana}, {dataProxConcurso}</p>
                    <h2 >Valor Estimado</h2>
                    <h1 className={styles.valorEstimado} >{acumuladaProxConcurso}</h1>
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
                <p>#{proxConcurso-1}</p>
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