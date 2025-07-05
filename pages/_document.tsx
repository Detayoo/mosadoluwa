import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Mosadoluwa Fasasi</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>{" "}
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
