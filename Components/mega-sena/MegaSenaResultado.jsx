import styles from '/styles/Banners.module.css'
import logoMega from '/public/img/logo-mega-de-hoje.svg'
import Money from '/public/img/imagem-resultado-megasena.png'
import apresenta from '/public/img/palpite-loteria-nacional.webp'
import Bola from '../Bola.jsx'






import Image from 'next/image'
export default function MegaSenaResultado({ nome, loteria, proxConcurso, dataProxConcurso, data, acumuladaProxConcurso, local,concurso,dezenas, premiacoes,acumulou }) {

    const localSorteio = Object.values(local).join('')
    const espacoSorteio = localSorteio.replace('SÃOPAULO', 'SÃO PAULO')
    
    const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const conc = 1
    if (conc == 1) {
        
    } else {
        
    }

    const diaProxConcurso = dataProxConcurso;
    const array = Object.values(diaProxConcurso)
    const dia = array.slice(0, 2).join('')
    const mes = mesEmIngles(array.slice(3, 5).join(''))
    const ano = array.slice(6, 10).join('')

    var diadConcurso = data;
    const arrayc = Object.values(diadConcurso)
    const diac = arrayc.slice(0, 2).join('')
    const mesc = mesEmIngles(arrayc.slice(3, 5).join(''))
    const anoc = arrayc.slice(6, 10).join('')

    const c = new Date(`${mesc} ${diac}, ${anoc} 00:00:00`);
    const d = new Date(`${mes} ${dia}, ${ano} 00:00:00`);

    const diaConcurso = semana[c.getDay()]

    const diaDaSemana = semana[d.getDay()]
    const anota = array.slice(3, 5).join('') * ano


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    

    const acumulaO = Object.values(premiacoes)
    console.log(acumulaO)
    if (acumulou == true) {
        var acumula = 'ACUMULOU'
    } else {
        
        var acumula = `${acumulaO[0].vencedores} GANHADOR(A)`
    }
    const quadra = acumulaO[2].premio
    console.log(quadra)
    const quina = acumulaO[1].premio
    const premiosSoma = quadra + quina
    


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
                    <div className={styles.logoMR}>
                        <Image src={logoMega} />
                        <div>
                            <h2>RESULTADO DA MEGA SENA {concurso}</h2>
                            <h3>Sorteio {diaConcurso}, {data}</h3>
                        </div>

                    </div>
                    <div>
                        <div className={styles.sorteioApresentacaoResult}>
                            {/* <Image className={styles.apresenta} src={apresenta} /> */}
                            <div>
                                <p><strong>Resultado da {nome}</strong></p>
                                <p className={`${styles.espaco}`}> 
                        <Bola bol={dezenas[0]} />
                        <Bola bol={dezenas[1]} />
                        <Bola bol={dezenas[2]} />
                        <Bola bol={dezenas[3]} />
                        <Bola bol={dezenas[4]} />
                        <Bola bol={dezenas[5]} />

                    </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.divBottomResultado}>
                    <h2 className={styles.site}>megadehoje.com</h2>

                    <h2 className={styles.concu}> <strong>{acumula}</strong></h2>



                    <h2 className={styles.valorEstimadoPalpiteR} >PRÊMIO APROXIMADO: {acumuladaProxConcurso}</h2>
                    <strong>
                        <p>Próximo Sorteio {diaDaSemana}, {dataProxConcurso}</p>
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
                                <th>Total Ganhadores(as) <p>-</p></th>
                                <th>Total Premiação <p>{'-'}</p></th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>Sena</td>
                                <td>{acumulaO[0].vencedores}</td>
                                <td>{acumulaO[0].premio}</td>
                            </tr>
                            <tr>
                                <td>Quina</td>
                                <td>{acumulaO[1].vencedores}</td>
                                <td>{acumulaO[1].premio}</td>
                            </tr>
                            <tr>
                                <td>Quadra</td>
                                <td>{acumulaO[2].vencedores}</td>
                                <td>{acumulaO[2].premio}</td>
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