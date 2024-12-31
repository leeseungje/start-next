'use client'
import { Layout } from '@/components/Layout/Layout'
import Header from '@/components/Header'
import styles from './page.module.scss'
import { useState } from 'react'

export default function Home() {
  const [close, setClose] = useState(false)
  const handleToggle = () => {
    setClose(!close)
  }
  return (
    <div className={styles.wrapper}>
      <Header close={close} handleToggle={handleToggle} />
      <Layout close={close} />
    </div>
  )
}

