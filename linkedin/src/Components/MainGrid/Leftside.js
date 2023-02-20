import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>
              Welcome,{props.user ? props.user.displayName : 'there'}!
            </Link>
          </a>
          <a>
            <AddPhotoText>AddPhoto</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow Your Network!!</span>
            </div>
            <img alt='Widgetimage' src='/images/widget-icon.svg' />
          </a>
        </Widget>
        <Item>
          <span>
            <img src='/images/item-icon.svg' alt='item' />
            <span>MyItems</span>
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src='/images/plus-icon.svg' alt='Plus' />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
  width: 100%;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: 1px solid blue;
  box-shadow: 4px 10px 18px -1px rgba(0, 0, 0, 0.64);
`;

const UserInfo = styled.div`
  border-bottom: 2px solid white;
  padding: 12px;
  word-wrap: break-word;
`;

const CardBackground = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 60px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  background: url('/images/photo.svg');
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-size: 60%;
  background-position: center;
  background-color: #fff;
  background-repeat: no-repeat;
  border: 2px solid black;
  margin: -32px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid red;
  padding: 10px 0px 10px 0px;
  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;

    &:hover {
      background-color: whitesmoke;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 13px;

        &:nth-child(2) {
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;

const Item = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  justify-content: center;
  padding: 12px;
  font-size: 15px;
  display: block;

  &:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 12px 0 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  a {
    color: black;
    padding: 5px 12px 5px 12px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid red;
      padding-top: 10px;
      padding-bottom: 10px;
      text-decoration: none;

      &:hover {
        background-color: rgba(0, 0, 0, 0.09);
      }
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(LeftSide);
