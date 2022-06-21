import { PostHeader, PostWrapper } from "./styles";
import Link from "./Link";

export default function Post({ pictureUrl, username, description, linkData }) {
  return (
    <PostWrapper>
      <PostHeader>
        <img src={pictureUrl} alt="avatar" />
        <div>
          <h1>{username}</h1>
          <h3>{description}</h3>
        </div>
      </PostHeader>
      <Link linkData={linkData} />
    </PostWrapper>
  );
}
