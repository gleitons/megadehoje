import styles from '/styles/Banners.module.css'
import logoMega from '/public/img/logo-mega-de-hoje.svg'
import Bola from '../Bola.jsx'






import Image from 'next/image'
export default function MegaSenaResultado({ nome, loteria, proxConcurso, dataProxConcurso, data, acumuladaProxConcurso, local, concurso, dezenas, premiacoes, acumulou }) {

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

    if (acumulou == true) {
        var acumula = 'ACUMULOU'
    } else {

        var acumula = `${acumulaO[0].vencedores} GANHADOR(A)`
    }
    const quadra = acumulaO[2].premio
    const quina = acumulaO[1].premio
    const premiosSoma = quadra + quina



    function mesEmIngles(mes) {
        const meses = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        const mesref = meses[mes - 1]

        return mesref;

    }

    return (
        <>
            <h1>Resultado da {loteria} {concurso} dia {data} - {diaConcurso}</h1>
            <p>Sorteio da {loteria} aconteceu hoje, {data}, confira agora mesmo o resultado da {loteria} {concurso}.</p>
            <h2>Como ficou o resultado da loteria nacional hoje</h2>
            <p>É isso mesmo, saiu o resultado do concurso {concurso}, realizado a partir das 20:00 hs, dia {data}, {diaConcurso}, as dezenas sorteadas foram: 
            <strong><li>{dezenas[0]}</li> 
            <li>{dezenas[1]}</li> 
            <li>{dezenas[2]}</li> 
            <li>{dezenas[3]}</li> 
            <li>{dezenas[4]}</li> 
            
            </strong>
            Foram {acumulaO[0].vencedores} apostas vencedoras com 15 números, onde vai receber o valor de R$ {acumulaO[0].premio} de reais, {acumulaO[1].vencedores} vencedores(as) que conseguiram acertar 14 números e levaram R$ {acumulaO[1].premio} de reais. Já com 13 acertos foram {acumulaO[2].vencedores} apostas ganhadoras, ficando com R$ {acumulaO[2].premio} reais. 
            
            Confira agora mesmo o resultado da {loteria} {concurso} dia {data} - {diaConcurso}.</p>
            {/* <div className={styles.bannerInstaPalpite}>
                <h2 className={styles.marcadagua}>megadehoje.com</h2>
                <div className={styles.divTopResult}>
                    <div className={styles.logoMR}>
                        <Image src={logoMega} alt={"Mega de hoje"} />
                        <div>
                            <h2>RESULTADO DA<span className={styles.Maiuscula}> {loteria}</span> {concurso}</h2>
                            <h3>Sorteio {diaConcurso}, {data}</h3>
                        </div>

                    </div>
                    <div>
                        <div className={styles.sorteioApresentacaoResult}>
                            <div>
                                <p><strong>Resultado da {nome}</strong></p>
                                <div className={`${styles.espaco}`}>
                                    <Bola bol={dezenas[0]} />
                                    <Bola bol={dezenas[1]} />
                                    <Bola bol={dezenas[2]} />
                                    <Bola bol={dezenas[3]} />
                                    <Bola bol={dezenas[4]} />
                                    <Bola bol={dezenas[5]} />

                                </div>
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
                                <td>R$ {acumulaO[0].premio}</td>
                            </tr>
                            <tr>
                                <td>Quina</td>
                                <td>{acumulaO[1].vencedores}</td>
                                <td>R$ {acumulaO[1].premio}</td>
                            </tr>
                            <tr>
                                <td>Quadra</td>
                                <td>{acumulaO[2].vencedores}</td>
                                <td>R$ {acumulaO[2].premio}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div> */}
            <h2>Como jogar na Mega-sena</h2>
            <p>A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). APOSTE ONLINE</p>
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