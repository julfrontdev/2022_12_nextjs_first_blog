import { useRouter } from 'next/router';
import { gql,useQuery } from "@apollo/client";
import client  from "../../apollo-client"

/*const getPost = async (id) => {
  const res = await fetch(`https://api.limonecat.com/wp-json/wp/v2/posts/${id}`);
  return res.json();
}*/


const Post = (props) => {
  /*const router = useRouter();
  const { id } = router.query;
  const { title } = props.post;*/
console.log(props);
  return (
      <div>
        <h1>{title}</h1>
      </div>
  );
}

/*Post.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const post = await getPost(id);
  return { post };
}*/

export async function getStaticProps(ctx) {
    const postID = ctx.params.id;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useQuery(
        gql`
            query($id: ID!) {
                post(id: $id, idType: DATABASE_ID) {
                    title
                    content
                }
            }
        `,
        { variables: { id: postID } }
    );
    return {
        props: {
            data,
        },
    };
}

export default Post;
