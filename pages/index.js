import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Layout.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

// blog cf. https://www.youtube.com/watch?v=wTFThzLcrOk&ab_channel=Grafikart.fr

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
      <Link href={`/page2`}>Aller à la page 2</Link>
      <Link href={`/page3`}>Aller à la page 3</Link>
      <Link href={`/page4`}>Aller à la page 4</Link>
      <Link href={`/page5`}>Aller à la page 5</Link>
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
