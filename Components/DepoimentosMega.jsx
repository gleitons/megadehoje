import styles from '/styles/Depoiments.module.css'



export default function DepoimentosMega({ Cidade, Depoimento, Nome }) {
    return (
            <>
            <div className={styles.depoimentoOnly}>
                <div className={styles.cidade}>
                    <span>{Cidade}:</span><p>{Depoimento}</p>
                </div>
                <p>- {Nome}</p>
            </div>
            </>
            

       
    )
}