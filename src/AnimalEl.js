import React, { useContext } from "react";
import styled from "styled-components";
import { LikeInfo } from "./LikeContext";

const Box = styled.div`
  width: 285px;

  img {
    display: block;
    margin-bottom: 15px;
  }

  &:nth-child(odd) {
    margin-right: 30px;
  }
`;

const Btns = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  margin-bottom: 30px;

  button {
    flex: 1;
    height: 45px;
    background-color: #fff;
    box-sizing: border-box;
    font-size: 10px;
    color: #323232;
    border: 1px solid #a5a5a5;
    cursor: pointer;
  }

  .like.selected {
    background-color: #006ebe;
    color: #fff;
    border: none;
  }
  .hate.selected {
    background-color: #d74b00;
    color: #fff;
    border: none;
  }
`;

function AnimalEl({ animal }) {
  const { like, setLike, hate, setHate } = useContext(LikeInfo);

  return (
    <Box>
      <img src={animal.img_url} alt={animal.name} />
      <Btns>
        <button
          className={like.includes(animal.name) ? "like selected" : "like"}
          onClick={() => {
            if (!like.includes(animal.name)) {
              if (hate.includes(animal.name)) {
                setHate(hate.filter((x) => x !== animal.name));
              }
              setLike((prev) => [...prev, animal.name]);
            }
          }}
        >
          좋아요
        </button>
        <button
          className={hate.includes(animal.name) ? "hate selected" : "hate"}
          onClick={(e) => {
            if (!hate.includes(animal.name)) {
              if (like.includes(animal.name)) {
                setLike(like.filter((x) => x !== animal.name));
              }
              setHate((prev) => [...prev, animal.name]);
            }
          }}
        >
          싫어요
        </button>
      </Btns>
    </Box>
  );
}

export default AnimalEl;
