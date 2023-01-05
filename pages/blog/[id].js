import { useRouter } from 'next/router';
const getPost = async (id) => {
  const res = await fetch(`https://api.limonecat.com/wp-json/wp/v2/posts/${id}`);
  return res.json();
}

const Post = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { title } = props.post;

  return (
      <div>
        <h1>{title.rendered}</h1>
      </div>
  );
}

Post.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const post = await getPost(id);
  return { post };
}

export default Post;
