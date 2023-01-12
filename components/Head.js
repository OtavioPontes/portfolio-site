import Head from "next/head";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Otávio Pontes</title>
        <meta
          name="description"
          content="Developer Frontend Otávio Pontes"
          key="desc"
        />
        <meta property="og:title" content="@Otávio Pontes" />
        <meta
          property="og:description"
          content="My portfolio website, check it out 😎"
        />
      </Head>
    </div>
  );
}

export default IndexPage;
