import Head from 'next/head';

import Header from '../components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div
      className="h-full overflow-x-hidden"
      style={{ scrollBehavior: 'smooth' }}
    >
      <Head>
        <title>Jose Lopez - Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Header />
      <main role="main" className="max-w-screen-xl mx-auto font-sans md:py-2">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
