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
        <meta name="description" content="This is my portfolio, a resume of my work and the tools i use like, Angular, React, Flutter, Redux, for frontend, web, and mobile development" />
        <meta name="keywords" content="web, developer, react, angular, colombia, caribbean, node, flutter, ionic, capacitor, cordova, mobile" />
        <meta property="og:description" content="This is my portfolio, a resume of my work and the tools i use like, Angular, React, Flutter, Redux, for frontend, web, and mobile development" />
        <meta property="og:title" content="Jose Lopez - Web Developer" />
        <meta property="og:url" content="www.lopez-ariza.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main role="main" className="max-w-screen-xl mx-auto font-sans md:py-2">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
