import React, { useState } from "react";
import {
  Main,
  Container,
  Icon,
  Title,
  Form,
  Input,
  Checkbox,
  CheckboxTitle,
  Label,
  Submit,
  StyledLink,
  FooterLink,
  Error,
} from "./stylesComponents/stylesComponents";
import { Link } from "react-router-dom";

const initialState = {
  password: "",
  email: "",
};

function SignIn() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must enter a ${key}`);
        return;
      }
    }
  };

  const onInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  return (
    <div>
      <Main>
        <Container>
          <Icon />
          <Title>Sign in</Title>
          <Form onSubmit={onSubmit}>
            <Label htmlFor="email"></Label>
            <Input
              type="text"
              name="email"
              placeholder="Email Address*"
              value={state.email}
              onChange={onInput}
            />
            <Label htmlFor="password"></Label>
            <Input
              type="password"
              name="password"
              placeholder="Password*"
              value={state.password}
              onChange={onInput}
            />
            <Label htmlFor="checkbox">
              <Checkbox type="checkbox" onChange={onInput} />
              <CheckboxTitle>Remember me</CheckboxTitle>
            </Label>
            {error && (
              <Error>
                <p>{error}</p>
              </Error>
            )}
            <Submit type="submit" value="Sign in" />
            <StyledLink href="/#">Forgot password?</StyledLink>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#8fc9f7",
                marginLeft: "85px",
              }}
            >
              Don`t have an account? Sign Up
            </Link>
            <FooterLink href="/#">
              Copyright &copy; Your Website 2020.
            </FooterLink>
          </Form>
        </Container>
      </Main>
    </div>
  );
}

export default SignIn;
