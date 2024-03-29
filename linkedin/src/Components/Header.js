import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signOutApi } from '../actions';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href='/home'>
            <img src='/images/home-logo.svg' alt='Logo' />
          </a>
        </Logo>
        <SearchBar>
          <div>
            <input type='text' placeholder='Search'></input>
          </div>
          <div>
            <img src='/images/search-icon.svg' alt='Search' />
          </div>
        </SearchBar>
        <Nav>
          <NavListWrap>
            <NavList className='active'>
              <a>
                <img src='/images/nav-home.svg' alt='Nav' />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <Link to='/home/mynetwork'>
                <a>
                  <img src='/images/nav-network.svg' alt='Nav' />
                  <span>My Network</span>
                </a>
              </Link>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-jobs.svg' alt='Nav' />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-messaging.svg' alt='Nav' />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-notifications.svg' alt='Nav' />
                <span>Notification</span>
              </a>
            </NavList>

            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt='' />
                ) : (
                  <img src='/images/user.svg' alt='User' />
                )}
                <span>
                  Me
                  <img src='/images/down-icon.svg' alt='Down' />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>SignOut</SignOut>
            </User>
            <Work>
              <a>
                <img src='/images/nav-work.svg' alt='Work' />
                <span>
                  Work
                  <img src='/images/down-icon.svg' alt='Down' />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 24px;
  z-index: 100;
`;

const Content = styled.div`
  max-width: 1128px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
`;

const Logo = styled.span`
  margin-right: 10px;
`;

const SearchBar = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  pointer-events: all;

  & > div:first-child {
    max-width: 300px;

    input {
      width: 280px;
      padding: 10px;
      padding-left: 40px;
      border: none;
      background-color: #eef3f8;
      border-radius: 5px;
      font-weight: 400;
      font-size: 17px;
      height: 28px;
      border-color: #2977c9;
    }
  }

  & > div:last-child {
    position: absolute;
    top: 15px;
    width: 40px;
    left: 2px;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: transparent;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;

  .active {
    span:after {
      content: '';
      transform: scale(1);
      border-bottom: 2px solid black;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transition: transorm 0.2s ease-in-out;
      border-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  background-color: white;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    font-size: 13px;
    font-weight: 400;
    min-height: 53px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;

      &:hover,
      &:active {
        color: rgba(0, 0, 0, 1);
      }
    }
    @media (max-width: 768px) {
      min-width: 60px;
      margin: 0px 5px 0px 5px;
      font-size: 11px;
      /* box-shadow: -2px -2px 23px -10px rgba(0, 0, 0, 1); */
      margin-bottom: 10px;
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  width: 100px;
  height: 25px;
  text-align: center;
  display: none;
  transition-delay: all 1s ease-in-out;
  cursor: pointer;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
  }

  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
      transition-delay: all 1s ease-in-out;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
    }
  }
`;
const Work = styled(User)``;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
