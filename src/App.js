import React from 'react';

import Button from './Button/Button'
import Column from './Column/Column'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <Column>
                  <Button onClick={() => console.log('clicked')}>
                    Click Me
                  </Button>
                </Column>
                <Column>
                  Test Two
                </Column>
                <Column>
                  Test Three
                </Column>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
