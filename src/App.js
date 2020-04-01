import React from 'react';
import './App.css';
import { Header, Hello } from './components/Header';
import { PuppyList, handleClick } from './components/puppy.ul';

const user = 'Steven';

function App() {
  return (
    <div className='App'>
      <Header name={user} />
      <button onClick={Hello(user)}>Click to get user</button>
      <button onClick={handleClick}>Show me the puppies!</button>
      <PuppyList />
    </div>
  );
}

export default App;
