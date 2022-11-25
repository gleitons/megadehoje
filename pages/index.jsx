import styles from '../styles/Body.module.css'
import Anuncios from "../Components/Anuncios"



export default function Home() {
  return (
    <>
      <div className={styles.bodyMega}>
            <div className={styles.artigo}>
                <div>
                  <div>
                    <h2>Mega Sena</h2>
                    <p>A Mega Sena é a maior loteria do Brasil e uma das maiores do mundo, com um prêmio principal que pode valer centenas de milhões de reais. Os sorteios acontecem às quartas e sábados em semanas regulares, mas também tem uma série de sorteios especiais e Mega Semanas ao longo do ano.</p>
                    <p>O site MegaSena.com fornece os últimos resultados assim que estão disponíveis, informações sobre quando você pode esperar o próximo grande evento e tudo o mais que precisa saber do jogo.</p>
                    <h3>Resultados da Mega Sena</h3>
                    <p>Você encontrará os últimos resultados da Mega Sena logo após a realização de cada sorteio. Descubra os números vencedores e se o prêmio principal foi ganho ou não. Vá para a página de Resultados para ver quantos jogadores ganharam em cada categoria.</p>
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
