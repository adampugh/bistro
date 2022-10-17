import { setState, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation/Navigation.component';
import Hero from '../components/Hero/Hero.component';
import About from '../components/About/About.component';
import Menu from '../components/Menu/Menu.component';
import Contact from '../components/Contact/Contact.component';
import Footer from '../components/Footer/Footer.component';
import ComingSoon from '../components/ComingSoon/ComingSoon.component';

export default function Home() {
  const [comingSoon, setComingSoon] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cagzy&apos;s Bistro</title>
        <meta name="description" content="Cagzy's Bistro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Jomolhari&display=swap" rel="stylesheet"></link>
      </Head>
      {comingSoon ? (
        <main>
          <ComingSoon />
        </main>
      ) : (
        <>
          <main>
            <Navigation />
            <Hero />
            <About />
            <Menu />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
