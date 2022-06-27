import React from "react";

const Card = ({name}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://kuroganehammer.com/images/ultimate/character/${name}.png`} alt="characters" />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
