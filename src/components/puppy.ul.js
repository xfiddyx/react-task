import React from 'react';

const puppies = [
  {
    name: 'Betty',
    cuteness: 7,
    img:
      'https://cdn1-www.dogtime.com/assets/uploads/2020/01/golden-retriever-corgi-mixed-dog-breed-pictures-1.jpg'
  },
  {
    name: 'Rebel',
    cuteness: 8,
    img:
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232417/Greyhound-MP.jpg'
  },
  {
    name: 'Poppy',
    cuteness: 6,
    img:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg'
  }
];

const kittens = [
  {
    name: 'Nori',
    cuteness: 11,
    img: 'https://photos.app.goo.gl/RBzgQZdqnyMZnmgc8'
  },
  {
    name: 'Suki',
    cuteness: 7,
    img: 'https://photos.app.goo.gl/q2MFEzNbnDVrcTHE8'
  },
  {
    name: 'Jiji',
    cuteness: 10,
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/1200px-American_Shorthair.jpg'
  },
  {
    name: 'Umi',
    cuteness: 8,
    img: 'https://photos.app.goo.gl/RBzgQZdqnyMZnmgc8'
  }
];

let showImages = false;
const handleClick = () => {
  showImages = !showImages; // <-----
};

const animals = ['kittens', 'puppies'];

const PuppyList = () => {
  return (
    <ul>
      {puppies.map(puppy => {
        return (
          <li key={puppy.name}>
            <p>
              {puppy.name}, Cuteness: {puppy.cuteness}
            </p>
            {showImages ? (
              <img src={puppy.img} alt={`${puppy.name} profile pic`} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export { PuppyList, handleClick };
