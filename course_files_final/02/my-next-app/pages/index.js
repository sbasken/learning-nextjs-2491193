import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my E-learning site
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/learn/next">
            <a className={styles.card}>
              <h2>Learn NextJS &rarr;</h2>
            </a>
          </Link>

          <Link href="/learn/react">
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn React &rarr;</h2>
            </a>
          </Link>

          <Link href="/learn/angular">
            <a className={styles.card}>
              <h2>Learn Angular &rarr;</h2>
            </a>
          </Link>


          <Link href="/learn/vue">
            <a className={styles.card}>
              <h2>Learn Vue &rarr;</h2>
            </a>
          </Link>

          <Link href="/learn/koko">
            <a className={styles.card}>
              <h2>Learn Koko &rarr;</h2>
            </a>
          </Link>

         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
