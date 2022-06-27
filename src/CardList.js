import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  const cardArray = characters.map((user, i) => {
    return (
      <Card
        key={i}
        id={characters[i].id}
        name={characters[i].name}
      />
    );
  });

  return <div>{cardArray}</div>;
};

export default CardList;
