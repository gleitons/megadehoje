
import styles from '/styles/Menu.module.css'
import Image from 'next/image'
import sentimentomilionario01 from '/public/img/sentimento-milionario/sentimento-milionario-01.gif'
import sentimentomilionario02 from '/public/img/sentimento-milionario/sentimento-milionario-02.gif'
import sentimentomilionario03 from '/public/img/sentimento-milionario/sentimento-milionario-03.gif'
import sentimentomilionario04 from '/public/img/sentimento-milionario/sentimento-milionario-04.gif'
import sentimentomilionario05 from '/public/img/sentimento-milionario/sentimento-milionario-05.gif'
import sentimentomilionario06 from '/public/img/sentimento-milionario/sentimento-milionario-06.gif'
import sentimentomilionario07 from '/public/img/sentimento-milionario/sentimento-milionario-07.gif'
import sentimentomilionario08 from '/public/img/sentimento-milionario/sentimento-milionario-08.gif'
import sentimentomilionario09 from '/public/img/sentimento-milionario/sentimento-milionario-09.gif'
import sentimentomilionario10 from '/public/img/sentimento-milionario/sentimento-milionario-10.gif'
import sentimentomilionario11 from '/public/img/sentimento-milionario/sentimento-milionario-11.gif'
import sentimentomilionario12 from '/public/img/sentimento-milionario/sentimento-milionario-12.gif'
export default function SentimentoMilionario() {
    return (
        <>
            <div>
                <div>
                    <table className = {styles.tabelaSentimento} id="Tabela_01" width="960" height="361" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>
                                <Image src={sentimentomilionario01} width={240} height={120} alt="Sentimento Milionario" />

                            </td>
                            <td>
                                <Image src={sentimentomilionario02} width={240} height={120} alt="Sentimento Milionario" />

                            </td>
                            <td>
                                <Image src={sentimentomilionario03} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario04} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                
                                <Image src={sentimentomilionario05} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario06} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario07} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario08} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Image src={sentimentomilionario09} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario10} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario11} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                            <td>
                                <Image src={sentimentomilionario12} width={240} height={120} alt="Sentimento Milionario"/>

                            </td>
                        </tr>
                    </table>
                </div>


            </div>

        </>
    )
}