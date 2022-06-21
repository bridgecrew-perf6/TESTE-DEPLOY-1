import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import Header from "../../components/header.js";
import PostForm from "../../components/PostForm/PostForm";
import Posts from "../../components/Posts/Posts";

import { FormWrapper } from "../../styles/form.style";
import * as S from "../../styles/global.style";
import { Div, TimelineHeader } from "./style";

export default function HomePage() {
  const navigate = useRef(useNavigate());
  const { userToken } = useContext(UserContext);

  useEffect(() => {
    if (!userToken) navigate.current("/");
  }, [userToken]);

  return (
    <>
      <Header />
      <FormWrapper>
        <S.Body>
          <Div>
            <TimelineHeader>timeline 2</TimelineHeader>
          </Div>
          <PostForm />
          <Posts />
        </S.Body>
      </FormWrapper>
    </>
  );
}
