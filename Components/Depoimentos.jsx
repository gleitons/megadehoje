import styles from '/styles/Dep.module.css'

export default function Depoimento({ Cidade, Depoimento, Nome }) {
    return (
       
            <div ClassName={styles.fundoDep}>
                <div ClassName={styles.depoCity}>
                    {Cidade}:<p>{Depoimento}</p>
                </div>
                <p>- {Nome}</p>
            </div>

       
    )
}