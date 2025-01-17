import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const useHydrated = () => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true)
  }, []);

  return hydrated;
}

/**
 * This file generates a static page at
 * build time using getStaticProps()
 */

export async function getStaticProps() {
  return {
    props: {
      message: "This is a static page — and a prop",
    },
  };
}

const Page = ({ message, bucket }) => {
  const hydrated = useHydrated();

  return (
    <>
      <Head>
        <title>This is a statically generated page using getStaticProps()</title>
        <meta
          name="description"
          content="With @netlify/next, you get access to enhanced request and response features through an intuitive API. Check out the demo."
        />
        <script async src="https://cdn.tailwindcss.com"></script>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whitep4nth3r" />
        <meta name="twitter:creator" content="@whitep4nth3r" />
        <meta property="og:url" content="https://nextjs-advanced-middleware-demo.netlify.app/" />
        <meta property="og:title" content="Next.js Advanced Middleware — Only on Netlify" />
        <meta
          property="og:description"
          content="With @netlify/next, you get access to enhanced request and response features through an intuitive API. Check out the demo."
        />
        <meta property="og:site_name" content="nextjs-advanced-middleware-demo.netlify.app" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://nextjs-advanced-middleware-demo.netlify.app/og.png" />
        <meta property="og:image:alt" content="Next.js Advanced Middleware Demo — only On Netlify" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Advanced Middleware Demo</h1>

        <img alt="Only on Netlify!" src="/sticker.svg" />

        <p className={styles.description}>
          <Link href="/">Learn more on the home page &rarr;</Link>
        </p>
        <h3 className={styles.title} id="message">
          {message}
        </h3>

        <div className="py-12">
          <h1 className="text-2xl font-bold leading-tight text-purple-300">A/B testing bucketed content.</h1>

          <div className="space-y-12 divide-y divide-purple-300">
            {(!bucket || hydrated && bucket === 'a') && (
                <div className="py-12" data-bucket="a">
                  <h2 className="text-2xl font-bold leading-tight ">Bucket A</h2>
                  <p className="py-4 text-lg ">This is bucket A content</p>
                  <p className="py-4 text-lg ">This is bucket A content</p>
                  <p className="py-4 text-lg ">This is bucket A content</p>
                </div>
            )}
            {(!bucket || hydrated && bucket === 'b') && (
            <div className="py-12" data-bucket="b">
              <h2 className="text-2xl font-bold leading-tight ">Bucket B</h2>
              <p className="py-4 text-lg ">This is bucket B content</p>
              <p className="py-4 text-lg ">This is bucket B content</p>
              <p className="py-4 text-lg ">This is bucket B content</p>
            </div>
            )}
            {(!bucket || hydrated && bucket === 'original') && (
            <div className="py-12" data-bucket="original">
              <h2 className="text-2xl font-bold leading-tight text-purple-300">Bucket Original</h2>
              <p className="py-4 text-lg text-purple-300">This is bucket Original content</p>
              <p className="py-4 text-lg text-purple-300">This is bucket Original content</p>
              <p className="py-4 text-lg text-purple-300">This is bucket Original content</p>
            </div>
            )}
          </div>
        </div>

        <img className={styles.kitten} alt="An ad for a kitten" src="https://placekitten.com/400/300" />
      </main>
      <footer className={styles.footer}>
        <a href="https://ntl.fyi/3K7uewQ" target="_blank" rel="noopener noreferrer">
          <img src="/netlify.svg" alt="Netlify Logo" />
          <span>Powered by Netlify</span>
        </a>
      </footer>
    </>
  );
};

export default Page;
