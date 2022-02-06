import Head from 'next/head';

import Header from '../components/header/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jose Lopez - Web Developer</title>
        <meta
          name="description"
          content="This is my portfolio, a resume of my work and the tools i use like, Angular, React, Flutter, Redux, for frontend, web, and mobile development"
        />
        <meta
          name="keywords"
          content="web, developer, react, angular, colombia, caribbean, node, flutter, ionic, capacitor, cordova, mobile"
        />
        <meta
          property="og:description"
          content="This is my portfolio, a resume of my work and the tools i use like, Angular, React, Flutter, Redux, for frontend, web, and mobile development"
        />
        <meta property="og:title" content="Jose Lopez - Web Developer" />
        <meta property="og:url" content="www.lopez-ariza.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/personal-web-26017.appspot.com/o/logo.jpg?alt=media&token=0ce90842-b7ac-4334-b9f9-73d082548596"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
