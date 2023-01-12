import { gql } from "@apollo/client";
import client from "../../apollo-client";

export async function getStaticPaths() {
  // Fetch the IDs of all posts from the server
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
  });
  // Generate a path for each post ID
  const paths = data.posts.edges.map((post) => ({
    params: { id: post.node.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($id: ID!) {
        post(id: $id) {
          title
          content
        }
      }
    `,
    variables: { id: params.id },
  });
  return {
    props: {
      data,
    },
  };
}

const Post = ({ data }) => {
  //Ici, il faut traiter {data} pour afficher le contenu du post.
  return (
    <div>
      <h1>{data.post.title}</h1>
      <p>{data.post.content}</p>
    </div>
  );
};
export default Post;
