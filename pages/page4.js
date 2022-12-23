import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// SSR Server Side Rendering

export default function Page4({ posts }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <Head>
        <title>Mon premier blog</title>
      </Head>
      <h1>Page4 avec getServerSideProps en Server Side Rendering SSR </h1>
      <br />
      <h2>Compteur: {count}</h2>
      <br />
      <Link href={`/page5`}>Page 5</Link>
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <h3>
                {post.id}/ {post.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// Next récupère les données en amont (précharge) et donne le rendu
export async function getServerSideProps() {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=4`
  ).then((r) => r.json());
  return {
    props: {
      posts,
    },
  };
}
