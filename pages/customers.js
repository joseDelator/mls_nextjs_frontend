
import Axios from "axios";
import { useRouter } from 'next/router'

const Post = ({ post }) => {
    console.log(post)
  return (
    <div>
      <h1>Post page</h1>
     <h1>{}</h1>
    </div>
  );
};

export default Post;

export const getServerSideProps = async () => {
  const { data } = await Axios.get('https://mls-salaries.herokuapp.com/position');

  if (!data) {
    return {
      notFound: true,
    };
  }

  const post = data;
  return {
    props: {
      post,
    },
  };
};

