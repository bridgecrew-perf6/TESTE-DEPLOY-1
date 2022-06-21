import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import { PostsWrapper } from "./styles";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/timeline`)
      .then(({ data }) => setPosts(data))
      .catch(() =>
        window.alert(
          "An error occured while trying to fetch the posts, please refresh the page",
        ),
      )
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <PostsWrapper>Loading...</PostsWrapper>;

  return (
    <PostsWrapper>
      {posts.length > 0
        ? posts.map((post, index) => (
            <Post
              key={post.url + index}
              pictureUrl={post.pictureUrl}
              username={post.username}
              description={post.description}
              linkData={post.linkData}
            />
          ))
        : "There are no posts yet"}
    </PostsWrapper>
  );
}
