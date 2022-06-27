import React from "react";
import styled from "styled-components";

const RIghtside = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add Your Feed</h2>
          <img src="/images/feed-icon.svg" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkdedin</span>
              <button>Follow</button>
            </div>
          </li>

          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommandation>
          View All Recommandation
          <img src="/images/right-icon.svg" alt="Right" />
        </Recommandation>
      </FollowCard>
      <BannerCard>
        <img src="/images/banner-card.jpg" alt="images" />
        <h1>MarudhupandiyanNayanthara</h1>
      </BannerCard>
    </Container>
  );
};

export default RIghtside;

const Container = styled.div`
  grid-area: rightside;
  width: 100%;
`;

const FollowCard = styled.div`
  overflow: hidden;
  text-align: center;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  border: none;
  border: 1px solid blue;
  box-shadow: 4px 10px 18px -1px rgba(0, 0, 0, 0.64);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 16px;

    & > div {
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
    }

    button {
      background-color: transparent;
      border: 1px solid #0a66c2;
      box-shadow: inset 7px 8px 15px -7px rgba(0, 0, 0, 1);
      padding: 7px;
      max-width: 400px;
      max-height: 32px;
      width: 80px;
      font-size: default;
      box-sizing: border-box;
      border-radius: 15px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Avatar = styled.img`
  background-image: url("/images/at-icon.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

const Recommandation = styled.div`
  color: #0a66c2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BannerCard = styled(FollowCard)`
  padding-bottom: 20px;
  img {
    width: 100%;
  }
`;
