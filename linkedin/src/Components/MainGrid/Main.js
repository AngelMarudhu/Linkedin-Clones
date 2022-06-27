import React from "react";
import styled from "styled-components";

const RIghtside = () => {
  return (
    <Container>
      <User>
        <div>
          <img src="/images/user.svg" alt="User" />
          <button>Share A Post</button>
        </div>

        <Events>
          <button>
            <img src="/images/photo-icon.png" alt="Photo" />
            <span>Photos</span>
          </button>

          <button>
            <img src="/images/video-icon.png" alt="Photo" />
            <span>Videos</span>
          </button>

          <button>
            <img src="/images/event-icon.png" alt="Photo" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.png" alt="Photo" />
            <span>Article</span>
          </button>
        </Events>
      </User>
      <Article>
        <SharedActor>
          <a>
            <img src="/images/user.svg" alt="User" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Title</span>
            </div>
          </a>
          <button>
            <img src="/images/ellipsis-icon.png" alt="Ellipsis" />
          </button>
        </SharedActor>

        <Description>Description</Description>
        <SharedImg>
          <a>
            <img src="/images/post1.jpg" />
          </a>
        </SharedImg>

        <SocialCounts>
          <li>
            <button>
              <img src="/images/like-icon.png" alt="Like" />
              <img src="/images/applause-icon.png" alt="Applause" />
              <span>99</span>
            </button>
          </li>
          <li>
            <a>9 Comments</a>
          </li>
        </SocialCounts>

        <HitButton>
          <button>
            <img src="/images/like-icon.png" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/command-icon.png" />
            <span>Comment</span>
          </button>
          <button>
            <img src="/images/share-icon.png" />
            <span>Share</span>
          </button>
          <button>
            <img src="/images/Sent-icon.png" />
            <span>Send</span>
          </button>
        </HitButton>
      </Article>
    </Container>
  );
};

export default RIghtside;

const Container = styled.div`
  grid-area: main;
  width: 100%;
`;

const CommonCard = styled.div`
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  border: none;
  box-shadow: 4px 10px 18px -1px rgba(0, 0, 0, 0.64);
  padding: 12px;
`;
const User = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px solid blue;

  div {
    button {
      outline: none;
      color: #0a66c2;
      font-size: 14px;
      min-height: 48px;
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      padding: 10px;
      font-weight: 600;

      img {
        margin-right: 10px;
        width: 35px;
        height: 35px;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 16px 8px 16px;
      flex-direction: row;

      button {
        background-color: whitesmoke;
        margin-left: 8px;
        border-radius: 40px;
        flex-grow: 1;
        box-shadow: 2px 0px 8px -3px rgba(0, 0, 0, 1);
        color: rgba(0, 0, 0, 0.4);
        border: 1px solid #0a66c2;
      }

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: 2px 0px 8px -3px rgba(0, 0, 0, 1);
        margin-right: 10px;
        border: 1px solid #0a66c2;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      padding-bottom: 10px;
      button {
        color: rgba(0, 0, 0, 0.4);
        &:hover {
          color: #0a66c2;
        }
        img {
          margin-right: 8px;
        }
      }
    }
  }
`;
const Events = styled.div``;

const Article = styled(CommonCard)`
  overflow: visible;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid blue;
`;

const SharedActor = styled.div`
  display: flex;
  padding: 12px 16px 10px;
  margin-bottom: 10px;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border: 1px solid #0a66c2;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 15px;

      span {
        text-align: left;
        padding: 4px;
      }
    }
  }

  button {
    position: absolute;
    border: none;
    background: transparent;
    right: 12px;
    top: 5px;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 5px 16px;
  overflow: hidden;
  font-size: 16px;
  text-align: left;
`;

const SharedImg = styled.div`
  width: 100%;
  display: block;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  list-style-type: none;
  line-height: 1.5;
  overflow: auto;
  margin: 8px 16px;
  padding-bottom: 3px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  li {
    margin-right: 8px;
    font-size: 12px;

    button {
      display: flex;
      align-items: center;
      border: none;
      background: transparent;

      img {
        width: 19px;
        height: 19px;
        padding: 2px;
      }
    }
  }
`;

const HitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 35px;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border: none;
    background: transparent;
    width: 120px;

    &:hover {
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.06);
    }

    span {
      margin-left: 3px;
    }
    img {
      width: 30px;
    }
  }
`;
