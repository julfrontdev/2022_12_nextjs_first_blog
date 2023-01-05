import Link from "next/link";

function page6( { posts }) {
    posts.forEach(post => console.log(post));
  return (
    <>
        <h1>Page 6</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href="/blog/[id]">
                        <h1>{post.title.rendered}</h1>
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default page6;

export async function getStaticProps() {
    //URL de Wordpress.
  const response = await fetch('https://api.limonecat.com/wp-json/wp/v2/posts');
  const posts = await response.json()
  return {
    props: {
      posts,
    },
  };
}