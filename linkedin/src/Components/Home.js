import React from "react";
import styled from "styled-components";
import Leftside from "./MainGrid/Leftside";
import Main from "./MainGrid/Main";
import RIghtside from "./MainGrid/RIghtside";
import { Navigate } from "react-router";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Section>
        <h4>
          <a>Hiring In Hurry? - </a>
        </h4>
        <p>
          Find Talented Pros In Record With Time Upwork And Keep Business Moving
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <RIghtside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  text-decoration: underline;

  h4 {
    color: #0a66c2;
    margin-right: 4px;
    font-size: 14px;
    a {
      font-weight: 600;
    }
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    line-height: 25px;
    letter-spacing: 0.6px;
  }
`;

const Layout = styled.div`
  /* max-width: 1128px;
  margin: auto; */
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
