import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Posts = styled.div`
  display: flex;
  height: 276px;
  width: 611px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.postBackground};
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 18px;
`;

const LeftArea = styled.div`
  display: flex;
  height: 276px;
  width: 86px;
`;

const RightArea = styled.div`
  display: flex;
  height: 276px;
  width: 86px;
`;
const UserPhoto = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  object-fit: cover;
  margin-bottom: 18px;
  cursor: pointer;
`;
const Typography = styled.span`
  font-size: 17px;
  color: #7b7b7b;
`;

export { StyledLink, Posts, UserPhoto, RightArea, LeftArea, Typography };
