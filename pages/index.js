import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = fetch(`https://jsonplaceholder.typicode.com/posts?_limit=4`)
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <Head>
        <title>Mon premier blog</title>
      </Head>
      <h1>Mon premier blog</h1>
      <br />
      <Link href={`/page2`}>Page 2</Link>
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
