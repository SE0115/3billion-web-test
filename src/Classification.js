import React, { useContext } from "react";
import styled from "styled-components";
import { LikeInfo } from "./LikeContext";

const Container = styled.div`
  width: 1110px;
  margin: 60px auto;
  text-align: center;
  .title {
    height: 83px;
    margin-bottom: 30px;
    background-color: #323232;
    font-size: 32px;
    line-height: 83px;
    color: #fff;
    font-weight: bold;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 30px;
  font-size: 24px;
  font-weight: bold;
`;
const LikeBox = styled.div`
  flex: 1;
  padding: 47px 128px 100px;
  color: #006ebe;
  border: 2px solid #006ebe;

  img {
    display: flex;
    margin-top: 47px;
  }
  img + img {
    margin-top: 30px;
  }
`;
const HateBox = styled.div`
  flex: 1;
  padding: 47px 128px 100px;
  color: #d74b00;
  border: 2px solid #d74b00;

  img {
    display: flex;
    margin-top: 47px;
  }
  img + img {
    margin-top: 30px;
  }
`;

function Classification() {
  const { animals, like, hate } = useContext(LikeInfo);

  return (
    <Container>
      <div className="title">내가 좋아하는 동물</div>
      <Content>
        <LikeBox>
          <div>좋아요</div>
          {animals
            .filter((animal) => like.includes(animal.name))
            .map((x) => (
              <img key={x.id} src={x.img_url} alt={x.name} />
            ))}
        </LikeBox>
        <HateBox>
          <div>싫어요</div>
          {animals
            .filter((animal) => hate.includes(animal.name))
            .map((x) => (
              <img key={x.id} src={x.img_url} alt={x.name} />
            ))}
        </HateBox>
      </Content>
    </Container>
  );
}

export default Classification;
