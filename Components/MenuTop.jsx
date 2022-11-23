import Image from "next/image"
import Link from "next/link"
import logoMega from '/public/img/logo-mega-de-hoje.svg'
import styles from '/styles/Menu.module.css'
export default function Menutop({children}) {
    return (
        
        <div className={styles.menu}>
            <div className={styles.menuFront}>
                <Link href='/'>
                    <Image className={styles.logoImg} src={logoMega}/>
                </Link>
                <nav>
                    <ul className={styles.menuItens}>
                        <Link href='/'>
                            <li>Home</li>
                        </Link>
                        <Link href='/mega-sena'>
                            <li>Mega Sena</li>
                        </Link>
                        <Link href='/lotofacil'>
                            <li>Lotofácil</li>
                        </Link>
                        <Link href='/quina'>
                            <li>Quina</li>
                        </Link>
                        <Link href='/dupla-sena'>
                            <li>Dupla Sena</li>
                        </Link>
                        <Link href='/como-jogar-na-mega-sena'>
                            <li>Como Jogar</li>
                        </Link>
                        <Link href='/sobre'>
                            <li>Sobre</li>
                        </Link>
                        <Link href='/duvidas'>
                            <li>Contato</li>
                        </Link>
                        <Link href='/resultado/mega-sena'>
                            <li>Resultados</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>

        
       
    )
}