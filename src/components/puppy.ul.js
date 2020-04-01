import React from 'react';

let showImages = false;
const handleClick = () => {
  showImages = !showImages; // <-----
};

const PuppyList = props => {
  return (
    <ul>
      {Object.values(props).map(value => {
        //console.log(value);
        return value.map(type => {
          console.log(type.name);
          return (
            <li key={type.name}>
              <p>
                {type.name}, Cuteness: {type.cuteness}
              </p>
              {showImages ? (
                <img src={type.img} alt={`${type.name} profile pic`} />
              ) : null}
            </li>
          );
        });
      })}
    </ul>
  );
};

export { PuppyList, handleClick };
