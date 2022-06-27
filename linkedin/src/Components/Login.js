import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signInApi } from "../actions/index";
// import { Redirect } from "react-router";
import { Navigate } from "react-router";
// import { useDispatch } from "react-redux";

const Login = (props) => {
  // const dispatch = useDispatch();
  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="Logo"></img>
        </a>

        <div>
          <Join>JOIN NOW</Join>
          <SignIn>SIGNIN</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional community </h1>
          <img src="/images/login-hero.svg" alt="Logo"></img>
        </Hero>
        <Form>
          <Google onClick={() => props.SignIn()}>
            <img src="/images/google.svg" alt="Google"></img>
            SignInGoogle
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  position: relative;
  padding: 16px 0px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0px 10px 0px 10px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 12px 15px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  transition-duration: 167ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid blue;
    border-radius: 15px;
    color: rgba(0, 0, 0, 1);
  }
`;

const SignIn = styled.a`
  font-size: 16px;
  padding: 12px 15px;
  text-decoration: none;
  border: 1px solid blue;
  border-radius: 20px;
  margin-left: 15px;
  margin-right: 15px;
  transition-duration: 167ms;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgba(0, 0, 0, 1);
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
  max-width: 1128px;
  width: 100%;
  margin: auto;
  min-height: 700px;
  position: relative;
  padding-bottom: 135px;
  padding: 60px 0px;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: start;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 10px;
    width: 55%;
    font-size: 57px;
    text-align: left;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      font-size: 20px;
      letter-spacing: 1px;
    }
  }

  img {
    /* z-index: -1; */
    width: 680px;
    height: 650px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 22px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 400px;
  align-self: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 100%;
  border-radius: 15px;
  font-size: 25px;
  border: 1px solid #2977c9;
  color: rgba(0, 0, 0, 0.6);
  transition-duration: 170ms;

  &:hover {
    background-color: #2977c9;
    border-radius: 25px;
    border-color: grey;
    color: #f5f5f5;
    letter-spacing: 1px;
  }

  img {
    margin-right: 10px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  SignIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
