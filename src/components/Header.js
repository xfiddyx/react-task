import React from 'react';

const Header = props => {
  return (
    <header>
      <h1 key={props.name}>{`${props.name}'s puppy list`}</h1>
    </header>
  );
};

const Hello = name => {
  return () => {
    console.log(`Hello ${name}`);
  };
};

export { Header, Hello };
