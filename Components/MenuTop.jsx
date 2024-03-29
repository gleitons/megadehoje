import Image from "next/image"
import Link from "next/link"
import logoMega from '/public/img/logo-mega-de-hoje.svg'
import styles from '/styles/Menu.module.css'
import Head from "next/head"
import {FaWindowClose} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react"
export default function Menutop({children}) {

    const fechaM = () => {
        const menUU = document.querySelector('#menuI');
        menUU.style.display = 'none'
        
    }
    const abreM = () => {
        const menUU = document.querySelector('#menuI');
        menUU.style.display = 'block'
        
    }

    return (
        <>
            <Head>
                <title>Mega de Hoje</title>
            </Head>
            <div className={styles.menu}>
                <div className={styles.menuFront}>
                    <Link href='/'>
                        <Image className={styles.logoImg} src={logoMega} alt={'Mega de Hoje'}/>
                    </Link>
                   
                    <nav id="menuI">
                    <FaWindowClose className={styles.iconFechar}  onClick={fechaM}/>
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
                            <Link href='/duvidas' >
                                <li >Contato</li>
                            </Link>
                            <Link href='/resultado/mega-sena' >
                                <li>Resultados</li>
                            </Link>
                        </ul>
                    </nav>
                    <div >
                    <GiHamburgerMenu className={styles.iconA} onClick={abreM} />
                    </div>
                </div>
            </div>
        </>

        
       
    )
}