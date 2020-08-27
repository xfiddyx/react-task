import React from 'react';

const AnimalList = (props) => {
  const kittens = props.kittens;
  const puppies = props.puppies;
  const animals = kittens.concat(puppies);
  return (
    <ul>
      {animals
        .sort(function (a, b) {
          if (props.sortByCuteness) {
            return a.cuteness - b.cuteness;
          } else if (!props.sortByCuteness) {
            return b.cuteness - a.cuteness;
          }
        })
        .map((type) => {
          return (
            <li key={type.name}>
              <p>
                Name: {type.name}
                <br></br> Cuteness: {type.cuteness}
              </p>
              {props.showImages ? (
                <img src={type.img} alt={`${type.name} profile pic`} />
              ) : null}
              <br></br>
              <button onClick={() => props.deleteSelectedPet(type)}>
                Delete {`${type.name}`}
              </button>
              <button onClick={() => props.upVoteCuteness(type)}>
                YASSSSS {`${type.name} is a cutie`}
              </button>
              <p>adding in a comment</p>
              <p>adding another comment to it</p>
            </li>
          );
        })}
    </ul>
  );
};

export default AnimalList;
