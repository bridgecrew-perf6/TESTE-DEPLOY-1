import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { UserContext } from "../../contexts/user.context";
import { FormBanner, FormWrapper, Form } from "../../styles/form.style";

export default function SignForm({ isSignUp }) {
  const navigate = useRef(useNavigate());
  const { userToken, logUserIn } = useContext(UserContext);

  const [formInput, setFormInput] = useState({});
  const [isAwaitingRequest, setIsAwaitingRequest] = useState(false);

  useEffect(() => {
    if (userToken) navigate.current("/timeline");
  }, [userToken]);

  const handleInput = (e) => {
    const infoInput = e.currentTarget;
    formInput[infoInput.name] = infoInput.value;
    setFormInput({ ...formInput });
  };

  const validateFormInput = () => {
    const formErrors = [];
    if (!formInput.email) formErrors.push("Email is required");
    if (!formInput.password) formErrors.push("Password is required");
    if (!formInput.username && isSignUp) formErrors.push("username is required");
    if (!formInput.pictureUrl && isSignUp) formErrors.push("pictureUrl is required");

    const formIsValid = formErrors.length === 0;
    if (!formIsValid) alertFormErrors(formErrors);
    return formIsValid;
  };

  const alertFormErrors = (formErrors) => window.alert(formErrors.map((e) => e));

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_API_URL);

    if (!isAwaitingRequest && validateFormInput()) {
      setIsAwaitingRequest(true);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/${isSignUp ? "sign-up" : "sign-in"}`,
          formInput,
        )
        .then(({ data }) => logUserIn(data.token))
        .catch(({ response }) => alertFormErrors([response.data]))
        .finally(() => setIsAwaitingRequest(false));
    }
  };

  return (
    <FormWrapper>
      <FormBanner>
        <div>
          <h1>linkr</h1>
          <h4>save, share and discover the best links on the web</h4>
        </div>
      </FormBanner>
      <Form>
        <Input
          type="text"
          placeholder="email"
          onChange={handleInput}
          name="email"
          required={true}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={handleInput}
          name="password"
          required={true}
        />
        {isSignUp && (
          <>
            <Input
              type="text"
              placeholder="username"
              onChange={handleInput}
              name="username"
              required={true}
            />
            <Input
              type="text"
              placeholder="pictureUrl"
              onChange={handleInput}
              name="pictureUrl"
              required={true}
            />
          </>
        )}
        <button onClick={handleSubmit}>{isSignUp ? "Sign Up" : "Login"}</button>
        <Link to={isSignUp ? "/" : "/sign-up"}>
          {isSignUp ? "Switch back to login" : "First Time? Create an account!"}
        </Link>
      </Form>
    </FormWrapper>
  );
}
