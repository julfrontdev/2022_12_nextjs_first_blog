import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Layout.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// Next récupère les données en amont (précharge) et donne le rendu
export async function getStaticProps() {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=2`
  ).then((r) => r.json());
  return {
    props: {
      posts,
    },
  };
}

export default function Page2({ posts }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => clearInterval(timer);
  });
  return (
    <>
      <Head>
        <title>My first blog 2</title>
      </Head>
      <h1>Page 2 avec getStaticProps</h1>
      <br />
      <h2>Compteur: {count}</h2>
      <br />
      <Link href={`/`}>Revenir à la page 1</Link>
      <br />
      <Link href={`/page3`}>Page 3</Link>
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
