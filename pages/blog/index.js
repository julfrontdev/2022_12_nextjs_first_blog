import Link from "next/link";
import { gql } from "@apollo/client";
import client  from "../../apollo-client"

function blog( { data }) {
    const posts = data.posts.edges.map((post) => post.node);
    return (
        <>
            <h1>Blog alimenté par Wordpress</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default blog;

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            query {
                posts {
                    edges {
                        node {
                            id
                            title
                            content
                            date
                        }
                    }
                }
            }
        `,
    });

    //URL de Wordpress.
   /* const response = await fetch('https://api.limonecat.com/wp-json/wp/v2/posts');
    const posts = await response.json()*/
    return {
        props: {
            data,
        },
    };
}