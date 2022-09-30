import Head from 'next/head'
import Image from 'next/image'
import Link from '../src/components/Link'
import styles from '../styles/Home.module.css'

export default function Page404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Error :/</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Unfortunatly we could not find this page :/
        </h1>

        <div className={styles.grid}>
          <Link href="/" className={styles.card} >
               <h2>Go to Home page &rarr;</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}