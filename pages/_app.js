import Head from 'next/head';

import Header from '../components/Header';

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full">
      <Head>
        <title>Jose Lopez - Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main" className="container max-w-screen-xl mx-auto font-sans md:py-2 h-full">
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;