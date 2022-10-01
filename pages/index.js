import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation/Navigation.component';
import Hero from '../components/Hero/Hero.component';
import About from '../components/About/About.component';
import Menu from '../components/Menu/Menu.component';
import Contact from '../components/Contact/Contact.component';
import Footer from '../components/Footer/Footer.component';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Jomolhari&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Navigation />
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
