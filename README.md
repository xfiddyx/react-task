# React List

## Section 1

### Mini tasks

a) Make a user variable in the App that you display in the Header component: '[user here]'s Puppies'
b) Add a cuteness rating to the puppies and display that alongside their name
c) Extract the list of puppies into its own List component
d) Add a list of kittens - bonus points if you reuse the list component (not making a separate 'KittenList' and 'PuppyList')
e) Add a button next to the header that triggers a `console.log` of 'Hello [user here]' when clicked

### Quiz

1. Why can we only do a `map` and not a `forEach` to render our list items?
2. Why do we need to include `import React from 'react'` at the top of each of our component files like App.js?
3. Where would a 'Each React child needs a unique key' error come from and how could we solve it?
4. If I get the following error, where 

## Section 2

### Mini tasks continued...

e) have a 'sort by cuteness' button that re-orders the puppies
f) add functionality to remove a puppy from the list
g) add functionality to upvote a puppy's cuteness ranking
h) give the puppies personalities (e.g `personalities: ['happy', 'excitable']` in the pup object) and having a drop down/buttons etc that filters list to show puppies by personality
i) let us know if you've got this far and we'll give some more fun tasks for you to do!

### Quiz continued...

5. Consider the snippet below where a counter is stored in state and I want to increase it by 1 with every click of a button.  Should I invoke `setState` with an object or a function?

```js
class App extends React.Component {
  state = {
    counter: 0
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.counter}</p>
        <button onClick={this.incrementCount}>Increase counter</button>
      </div>
    );
  }

  incrementCount = () => {
    this.setState(); // <------ HERE
  };
}
```

