import styles from '/styles/Banners.module.css'
import logoMega from '/public/img/logo-mega-de-hoje.svg'
import Money from '/public/img/imagem-resultado-megasena.png'
import apresenta from '/public/img/palpite-loteria-nacional.webp'
import Bola from '../Bola.jsx'






import Image from 'next/image'
export default function MegaSenaResultado({ nome, loteria, proxConcurso, dataProxConcurso, acumuladaProxConcurso, local,concurso }) {

    const localSorteio = Object.values(local).join('')
    const espacoSorteio = localSorteio.replace('SÃOPAULO', 'SÃO PAULO')
    
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
                <div className={styles.divTopResult}>
                    <div className={styles.logoM}>
                        <Image src={logoMega} />

                    </div>
                    <div>
                        <div className={styles.sorteioApresentacaoResult}>
                            {/* <Image className={styles.apresenta} src={apresenta} /> */}
                            <div>
                                <p><strong>Resultado da {nome}</strong></p>
                                <button className={styles.button88} role="button">CLIQUE 2X E FAÇA SUA APOSTA</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.divBottomResultado}>
                    <h2 className={styles.site}>megadehoje.com</h2>

                    <h2 className={styles.concu}> Resultado {loteria} Concurso: <strong>{concurso}</strong></h2>



                    <h2 className={styles.valorEstimadoPalpiteR} >PRÊMIO APROXIMADO: {'R$ 50.000.000,00'}</h2>
                    <strong>
                        <p>Sorteio {diaDaSemana}, {dataProxConcurso}</p>
                        <h4>Local: {espacoSorteio}   </h4>
                    </strong>
                    <table className={styles.tabelaResultado}>
                        <thead>
                            <tr>
                                <th>Jogo</th>
                                <th>Ganhadores(as)</th>
                                <th>Prêmio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th> </th>
                                <th>Total Ganhadores(as) <p>3550</p></th>
                                <th>Total Premiação <p>R$ 111.000.000,00</p></th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>Sena</td>
                                <td>0</td>
                                <td>R$ 1000,00</td>
                            </tr>
                            <tr>
                                <td>Quina</td>
                                <td>10</td>
                                <td>R$ 100,00</td>
                            </tr>
                            <tr>
                                <td>Quadra</td>
                                <td>100</td>
                                <td>R$ 10,00</td>
                            </tr>
                            {/* <tr>
                                <td>Ringo Starr</td>
                                <td>Drums</td>
                            </tr> */}
                        </tbody>
                    </table>
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