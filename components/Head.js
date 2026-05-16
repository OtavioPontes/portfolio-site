import Head from "next/head";

function IndexPage() {
  return (
    <Head>
      <title>Otávio Pontes — Software Engineer</title>
      <meta
        name="description"
        content="Portfolio of Otávio Pontes, Software Engineer focused on Mobile Apps, Websites and Web Systems."
        key="desc"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#16171e" />
      <meta name="color-scheme" content="dark" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Otávio Pontes — Software Engineer" />
      <meta
        property="og:description"
        content="My portfolio website, check it out 😎"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Otávio Pontes — Software Engineer" />
      <meta
        name="twitter:description"
        content="My portfolio website, check it out 😎"
      />
    </Head>
  );
}

export default IndexPage;
