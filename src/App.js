import React from 'react';

import Button from './Button/Button'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button onClick={() => console.log('clicked')}>
          Click Me
        </Button>
      </div>
    );
  }
}

export default App;
