import Link from "next/link";

function blog( { posts }) {
    return (
        <>
            <h1>Blog alimenté par Wordpress</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                            <h1>{post.title.rendered}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default blog;

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