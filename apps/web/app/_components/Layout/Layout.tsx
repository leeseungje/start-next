'use client'
import Link from 'next/link'
import styles from './Layout.module.scss'

export interface LayoutProps {
  close: boolean
}

export function Layout({ close }: LayoutProps) {
  return (
    <div className={`${styles.container} ${close ? styles.closed : ''}`}>
      <Link href={'/test'}>테스트</Link>
    </div>
  )
}
