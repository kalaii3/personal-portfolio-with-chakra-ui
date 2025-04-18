import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>kalai&apos;s Portfolio </title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="description"
        content="Hello, This is my personal portfolio that created using next.js and chakra UI"
      />
      <meta
        name="author"
        content="kalaiyarasan"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
