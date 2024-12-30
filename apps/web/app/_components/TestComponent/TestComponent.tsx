'use client'

import { useEffect, useState } from 'react'
import styles from './TestComponent.module.scss'

export default function TestComponent() {
  const [loading, setLoading] = useState(true)
  useEffect(() => setLoading(false), [])

  return (
    <>
      {!loading && (
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Hello World</h1>
          </header>
        </div>
      )}
    </>
  )
}
