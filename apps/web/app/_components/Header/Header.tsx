'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'

export interface HeaderProps {
  handleToggle: () => void
  close: boolean
}

export default function Header({ close, handleToggle }: HeaderProps) {
  return (
    <header className={`${styles.header} ${close ? styles.closed : ''}`}>
      <h1 className={styles.logo}>CROWS</h1>
      <ul className={styles.sns}>
        <li>
          <Link href="https://www.instagram.com/myubbak" target="_blank">
            <Image src="./instagram.svg" alt="instagram" width={40} height={40} />
          </Link>
        </li>
      </ul>
      <button className={styles.close} onClick={handleToggle}>
        <span></span>
      </button>
    </header>
  )
}
