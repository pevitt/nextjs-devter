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
        <nav>
          <Link className={styles.orange} href='/timeline'>
            Timeline
          </Link>
        </nav>
        </main>
       

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
