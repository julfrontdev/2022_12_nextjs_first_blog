import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Layout.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

// SSR Server Side Rendering

// Next récupère les données en amont (précharge) et donne le rendu
export const getStaticProps = async () => {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  ).then((r) => r.json());
  return {
    props: {
      posts,
      date: new Date().toString(),
    },
    revalidate: 5,
  };
};

export default function Page5({ posts, date }) {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => setCount((n) => n + 1), 1000);
  //   return () => clearInterval(timer);
  // });
  console.log(posts);
  return (
    <>
      <Head>
        <title>My first blog 5</title>
      </Head>
      <h1>Page 5 avec approche statique incrémentale (approche hybride)</h1>
      <br />
      <h2>
        {/* Compteur: {count} - {date} */}
        {date}
      </h2>
      <br />
      {/* Nav component with Nav.module.css style */}
      <Nav />
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
      <br />
    </>
  );
}
