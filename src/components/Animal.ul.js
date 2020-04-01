import React from 'react';

const AnimalList = props => {
  const kittens = props.kittens;
  const puppies = props.puppies;
  const animals = kittens.concat(puppies);
  return (
    <ul>
      {animals
        .sort(function(a, b) {
          if (props.sortByCuteness) {
            return a.cuteness - b.cuteness;
          } else if (!props.sortByCuteness) {
            return b.cuteness - a.cuteness;
          }
        })
        .map(type => {
          return (
            <li key={type.name}>
              <p>
                {type.name}, Cuteness: {type.cuteness}
              </p>
              {props.showImages ? (
                <img src={type.img} alt={`${type.name} profile pic`} />
              ) : null}
            </li>
          );
        })
        .sort(function(a, b) {
          if (props.sortByCuteness) {
            return a.cuteness - b.cuteness;
          } else if (!props.sortByCuteness) {
            return b - a;
          }
        })}
    </ul>
  );
};

export default AnimalList;
