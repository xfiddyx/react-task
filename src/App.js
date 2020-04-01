import React from 'react';
import './App.css';
import Header from './components/Header';

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

let showImages = false;

const handleClick = () => {
  showImages = !showImages; // <-----
};

function App() {
  return (
    <div className='App'>
      <Header />
      <button onClick={handleClick}>Show me the puppies!</button>
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
    </div>
  );
}

export default App;
