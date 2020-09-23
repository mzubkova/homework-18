import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "./img/padlock.svg";

const Main = styled.main`
  background: #121212;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 544px;
  height: 605px;
  background: #121212;
  margin: 0 auto;
`;

const Icon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 70px auto 15px auto;
  background-color: #f590b2;
  background-image: url(${img});
  background-size: 20px, 16px, cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin: 0 auto;
`;

const Form = styled.form`
  margin: 25px auto;
  width: 395px;
  height: 55px;
`;

const Input = styled.input`
  overflow: hidden;
  font-size: 16px;
  margin: 0 auto 25px;
  padding-left: 13px;
  width: 395px;
  height: 55px;
  background: inherit;
  color: #fff;
  border-radius: 10px;
  outline: none !important;
  border: 1px solid #494949;
`;

const Label = styled.label`
  display: flex;
  background: inherit;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  border: 2px solid #b8b8b8;
  background: red;
  color: red;
  cursor: pointer;
`;

const CheckboxTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin-left: 15px;
`;

const Submit = styled.input`
  cursor: pointer;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 35px;
  margin-bottom: 20px;
  height: 36px;
  background: #8fc9f7;
  border-radius: 5px;
  border-color: transparent;
  outline: none;
  color: #000;
  &:active {
    background-color: #f590b2;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  color: #8fc9f7;
  margin-top: 20px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const FooterLink = styled.h3`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #717171;
  margin-top: 70px;
  text-align: center;
`;

const Error = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #ea1919;
  margin: o auto;
`;

export {
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
};
