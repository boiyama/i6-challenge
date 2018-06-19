import Head from "next/head";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <style>body {"{background-color: yellow; font-size: 4em;}"}</style>
    </Head>
    <span>Home</span>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);
