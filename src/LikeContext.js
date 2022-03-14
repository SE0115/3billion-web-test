import { createContext, useState } from "react";

export const LikeInfo = createContext({
  animals: [],
  setAnimals: () => {},
  like: [],
  setLike: () => {},
  hate: [],
  setHate: () => {},
});

function LikeContext({ children }) {
  const [animals, setAnimals] = useState([]);
  const [like, setLike] = useState([]);
  const [hate, setHate] = useState([]);

  return (
    <LikeInfo.Provider
      value={{ like, hate, animals, setLike, setHate, setAnimals }}
    >
      {children}
    </LikeInfo.Provider>
  );
}

export default LikeContext;
