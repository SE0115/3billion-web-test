import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import AnimalEl from "./AnimalEl";
import { LikeInfo } from "./LikeContext";

const Container = styled.div`
  width: 1110px;
  margin: 60px auto 0;
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
  .classifyBtn {
    width: 400px;
    height: 80px;
    float: right;
    background-color: #dcdcdc;
    font-size: 24px;
    font-weight: bold;
    color: #323232;
    margin: 30px 0;
    border: none;
    cursor: pointer;
  }

  .loading {
    margin: 0 auto;
    border: 15px solid #a5a5a5;
    width: 40px;
    height: 40px;
    border-top-color: transparent;
    border-radius: 50%;
    animation: loading-spin 0.8s infinite linear;
    &.none {
      display: none;
    }
  }
  @keyframes loading-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Content = styled.div`
  display: flex;
  gap: 110px;
`;

const LeftBox = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;
const RightBox = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 400px;

  border: 1px solid #323232;
  font-size: 24px;
  font-weight: bold;
  color: #323232;

  .name + .name {
    margin-top: 60px;
  }
  .name.like {
    color: #006ebe;
  }
  .name.hate {
    color: #d74b00;
  }
`;

function Main() {
  const { like, hate, animals, setAnimals } = useContext(LikeInfo);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=Yw0UI7C2dRMOKigcRsDMrOQDuamlGRMtOQWrk22P6pFTkOuBPdTWU1eobI8CAT_3VQLhQsqBWmLpDkhJVtrrSih3grKDS_unm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA"
      )
      .then((res) => {
        setAnimals(res.data);
      });
  }, []);

  return (
    <Container>
      <div className="title">내가 좋아하는 동물</div>
      {animals.length ? (
        <>
          <Content>
            <LeftBox>
              {animals.map((animal) => (
                <AnimalEl key={animal.id} animal={animal} />
              ))}
            </LeftBox>
            <RightBox>
              <div className="List">
                {animals.length &&
                  animals.map((animal) => (
                    <div
                      key={animal.id}
                      className={
                        !like.includes(animal.name)
                          ? hate.includes(animal.name)
                            ? "name hate"
                            : "name"
                          : "name like"
                      }
                    >
                      {animal.name}
                    </div>
                  ))}
              </div>
            </RightBox>
          </Content>
          <button
            className="classifyBtn"
            onClick={() => {
              history.push("/classification");
            }}
          >
            좋아하는 동물들 나누기
          </button>
        </>
      ) : (
        <div className="loading"></div>
      )}
    </Container>
  );
}

export default Main;
