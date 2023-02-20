import styles from '../styles/Body.module.css'
import Anuncios from "../Components/Anuncios"
import Link from 'next/link'




export default function Home() {
 
  return (
    <>
      <div className={styles.bodyMega}>
            <div className={styles.artigo}>
              
                <div>
                  <div>
                    <h2>Mega Sena</h2>
                    <p>A Mega Sena é a maior loteria do Brasil e uma das maiores do mundo, com um prêmio principal que pode valer centenas de milhões de reais. Os sorteios acontecem às quartas e sábados em semanas regulares, mas também tem uma série de sorteios especiais e Mega Semanas ao longo do ano.</p>
                    <p>O site <a href="https://megadehoje.com">megadehoje.com</a> fornece os últimos resultados assim que estão disponíveis, informações sobre quando você pode esperar o próximo grande evento e tudo o mais que precisa saber do jogo.</p>
                    <h3>Resultados da Loteria federal</h3>
                    <p>Você encontrará os últimos resultados da Mega Sena logo após a realização de cada sorteio. Descubra os números vencedores e se o prêmio principal foi ganho ou não. Vá para a página de Resultados para ver quantos jogadores ganharam em cada categoria.</p>
                    <Link href="/mega-sena"><li>Mega Sena</li></Link>
                    <Link href="/lotofacil"><li>Lotofácil</li></Link>
                    <Link href="/quina"><li>Quina</li></Link>
                   
                  </div>
                  <div>
                   
                  </div>
                
                </div>
            </div>
            <div className={styles.anuncios}>
            <Anuncios />
                
            </div>
        </div>
      
    </>
  )
}
