import React from 'react';
import './App.css';
import { Header, Hello } from './components/Header';
import { PuppyList, handleClick } from './components/puppy.ul';

const user = 'Steven';
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

function App() {
  return (
    <div className='App'>
      <Header name={user} />
      <button onClick={Hello(user)}>Click to get user</button>
      <button onClick={handleClick}>Show me the puppies!</button>
      <PuppyList puppies={puppies} kittens={kittens} />
    </div>
  );
}

export default App;
