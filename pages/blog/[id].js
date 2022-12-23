import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <main>
        <Link href="/page3">Revenir à la page 3</Link>
        <br />
        <Link href="/page4">Revenir à la page 4</Link>
        <br />
        <Link href="/page5">Revenir à la page 5</Link>
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
    `https://jsonplaceholder.typicode.com/posts?_limit=4`
  ).then((r) => r.json());
  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
}
