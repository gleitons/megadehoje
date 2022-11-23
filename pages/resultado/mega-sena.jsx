
import { FaRegCalendarAlt } from 'react-icons/fa'
import Bola from "../../Components/Bola"
import styles from '../../styles/Mega.module.css'

export async function getStaticProps() {
  const URL_Api = 'https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest'
  
  const api = await fetch(URL_Api);
  const data = await api.json();

  return {
    props: {
       megaSena: data,
    }
}
}

export default function RMegaSena({megaSena}) {
  // const URL_Api = 'https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest'
  // const [loading, setLoading] = useState(false)
  // const [data, setdata] = useState(true)
  // const fechAllData = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await fetch(URL_Api);
  //     const data = await response.json()
  //     console.log(data)
  //     setdata(data)

  //   } catch (error) {
  //     console.log(Error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  // useEffect(() => {
  //   fechAllData()
  // }, [])
  // const dezena = data.dezenas;

  return (
    <>

      <div>
        <div>
          <div>
            <h2>Último resultado</h2>
            <h3>Concurso</h3>
          </div>
          <div>
            <FaRegCalendarAlt />
            <p>22 de novembro de 2022</p>
            <div className={styles.divBolas}>
              <Bola bol={megaSena.dezenas[0]} />
              <Bola bol={megaSena.dezenas[1]} />
              <Bola bol={megaSena.dezenas[2]} />
              <Bola bol={megaSena.dezenas[3]} />
              <Bola bol={megaSena.dezenas[4]} />
              <Bola bol={megaSena.dezenas[5]} />
              

            </div>
          </div>
        </div>

      </div>

      <h1>Testando</h1>

    </>
  )
}