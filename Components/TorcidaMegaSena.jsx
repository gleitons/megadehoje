
import styles from '/styles/Menu.module.css'
import Image from 'next/image'
import sentimentomilionario01 from '/public/img/sorteio-mega/sorteio_01.jpg'
import sentimentomilionario02 from '/public/img/sorteio-mega/sorteio_02.jpg'
import sentimentomilionario03 from '/public/img/sorteio-mega/sorteio_03.jpg'
import sentimentomilionario04 from '/public/img/sorteio-mega/sorteio_04.jpg'
import sentimentomilionario05 from '/public/img/sorteio-mega/sorteio_05.jpg'
import sentimentomilionario06 from '/public/img/sorteio-mega/sorteio_06.jpg'
import sentimentomilionario07 from '/public/img/sorteio-mega/sorteio_07.jpg'
import sentimentomilionario08 from '/public/img/sorteio-mega/sorteio_08.jpg'
import sentimentomilionario09 from '/public/img/sorteio-mega/sorteio_09.jpg'
import sentimentomilionario10 from '/public/img/sorteio-mega/sorteio_10.jpg'
import sentimentomilionario11 from '/public/img/sorteio-mega/sorteio_11.jpg'
import sentimentomilionario12 from '/public/img/sorteio-mega/sorteio_12.jpg'
export default function SentimentoMilionario() {
    const w = 128;
    const h = 93;
    return (
        <>
            <div>
                <div className={styles.centralizaImg}>
                    <table className = {styles.tabelaSentimentomega} id="Tabela_01" width="473" height="268" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>
                                <Image src={sentimentomilionario01} width={w} height={h} alt="Sentimento Milionario" />

                            </td>
                            <td>
                                <Image src={sentimentomilionario02} width={w} height={h} alt="Sentimento Milionario" />

                            </td>
                            <td>
                                <Image src={sentimentomilionario03} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario04} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                
                                <Image src={sentimentomilionario05} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario06} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario07} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario08} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Image src={sentimentomilionario09} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario10} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario11} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario12} width={w} height={h} alt="Sentimento Milionario"/>

                            </td>
                        </tr>
                    </table>
                </div>


            </div>

        </>
    )
}