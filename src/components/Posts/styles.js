import styled from "styled-components";

export const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  max-height: 60vh;
`;

export const PostWrapper = styled.article`
  background: ${({ theme }) => theme.colors.postBackground};
  color: ${({ theme }) => theme.colors.text4};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadow.gray};

  width: clamp(10%, 611px, 100vw);
  height: 276px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px;
  gap: 1rem;
`;

export const PostHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-self: start;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

export const LinkWrapper = styled.div`
  height: 155px;

  width: 90%;
  align-self: end;
  margin-left: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.linkBorder};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;

  display: flex;

  div {
    width: 100%;
    overflow-x: hidden;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      color: ${({ theme }) => theme.colors.text5};
      font-size: ${({ theme }) => theme.fontSize.xs};
    }

    p {
      color: ${({ theme }) => theme.colors.text6};
      font-size: ${({ theme }) => theme.fontSize.xxs};
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 37%;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text5};
      font-size: ${({ theme }) => theme.fontSize.xxs};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: right top;
    border-radius: 0 ${({ theme }) => theme.borderRadius.md}
      ${({ theme }) => theme.borderRadius.md} 0;
  }
`;
