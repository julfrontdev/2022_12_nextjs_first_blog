import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <main>
        <Link href="/page3">Page 3</Link>
        <br />
        <Link href="/page4">Page 4</Link>
        <br />
        <Link href="/page5">Page 5</Link>
        <br />
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}
// Récupérer les données en fonction de l'id de l'article que je souhaite
export async function getStaticProps({ params }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((r) => r.json());
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  ).then((r) => r.json());
  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
}
