import React from "react";
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
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
  FooterLink,
} from "./stylesComponents/stylesComponents";
import { Link } from "react-router-dom";

export default function SignUp() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <Main>
        <Container>
          <Icon />
          <Title>Sign up</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="firstName"></Label>
            <Input
              type="text"
              name="firstName"
              className="error-message"
              placeholder="First Name*"
              ref={register({
                required: true,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {_.get("firstName.type", errors) === "minLength" && (
              <p
                style={{
                  color: "red",
                  fontSize: "18px",
                }}
              >
                First name must have at least 3 characters
              </p>
            )}
            <Label htmlFor="lastName"></Label>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              ref={register({
                required: true,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {_.get("lastName.type", errors) === "pattern" && (
              <p
                style={{
                  color: "red",
                  fontSize: "18px",
                }}
              >
                Last name must have at least 3 characters
              </p>
            )}
            <Label htmlFor="email"></Label>
            <Input
              type="text"
              name="email"
              placeholder="Email Address*"
              ref={register({
                required: true,
                pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
              })}
            />
            {_.get("email.type", errors) === "pattern" && (
              <p
                style={{
                  color: "red",
                  fontSize: "18px",
                }}
              >
                Enter the correct email.
              </p>
            )}
            <Label htmlFor="password"></Label>
            <Input
              type="password"
              name="password"
              placeholder="Password*"
              ref={register({
                required: true,
                pattern: /(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{8,}/g,
              })}
            />
            {_.get("password.type", errors) === "pattern" && (
              <p
                style={{
                  color: "red",
                  fontSize: "18px",
                }}
              >
                Password must have at least 8 characters, uppercase and
                lowercase letters.
              </p>
            )}
            <Label htmlFor="checkbox">
              <Checkbox type="checkbox" />
              <CheckboxTitle>
                I want to receive inspiration, marketing promotions and updates
                via email.
              </CheckboxTitle>
            </Label>
            <Submit
              type="submit"
              value="Sign up"
              onClick={handleSubmit(onSubmit)}
            />
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#8fc9f7",
              }}
            >
              Already have an account? Sign in
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
