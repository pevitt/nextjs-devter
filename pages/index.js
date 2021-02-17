import Head from 'next/head'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className={styles.title}>
          <a href="https://nextjs.org">Devter</a>
        </h1>
        </main>
       
    </div>
  )
}
