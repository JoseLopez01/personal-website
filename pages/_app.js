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
        <meta name="og:description" content="This is my portfolio, a resume of my work and the tools i use like, Angular, React, Flutter, Redux, for frontend, web, and mobile development" />
        <meta name="og:title" content="Jose Lopez - Web Developer" />
        <meta name="og:url" content="https://j-lopez.herokuapp.com/" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="images/logo.png" />
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
