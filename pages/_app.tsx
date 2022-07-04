import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Viktor Avelino</title>
        <meta
          name="description"
          content="Viktor Avelino's Portfolio. Showcase projects and get in touch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
