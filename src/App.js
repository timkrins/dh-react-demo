import React from 'react'
import _ from 'lodash'
import { List } from 'immutable'

import Button from './Button/Button'
import Column from './Column/Column'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    // 'selection' is an immutable list
    // Immutable in this instance means you can't change it in place, only replace it with another thing.

    // This is an example flat 'topics' structure.

    this.state = {
      selection: List([ null ]),
      topics: [
        {
          id: 101,
          title: 'Test A',
          content: 'This is content',
          color: '#BEE3DB',
        },
        {
          parent: 101,
          id: 102,
          title: 'Test A1',
          content: 'This is content',
          color: '#FFD6BA'
        },
        {
          parent: 101,
          id: 103,
          title: 'Test A2',
          content: 'This is content',
          color: '#89B0AE'
        },
        {
          parent: 103,
          id: 104,
          title: 'Test A2A',
          content: 'This is content',
          color: '#D4CDF4'
        },
        {
          parent: 103,
          id: 105,
          title: 'Test A2B',
          content: 'This is content',
          color: '#97DFFC'
        },
        {
          id: 106,
          title: 'Test B',
          content: 'This is content',
          color: '#E5CDC8'
        },
        {
          parent: 106,
          id: 107,
          title: 'Test B1',
          content: 'This is content',
          color: '#68EDC6'
        },
        {
          parent: 107,
          id: 108,
          title: 'Test B1A',
          content: 'This is content',
          color: '#68EDC6'
        },
        {
          parent: 107,
          id: 109,
          title: 'Test B1B',
          content: 'This is content',
          color: '#68EDC6'
        },
        {
          parent: 107,
          id: 110,
          title: 'Test B1C',
          content: 'This is content',
          color: '#68EDC6'
        },
        {
          parent: 107,
          id: 111,
          title: 'Test B1D',
          content: 'This is content',
          color: '#68EDC6'
        },
        {
          parent: 107,
          id: 112,
          title: 'Test B1E',
          content: 'This is content',
          color: '#68EDC6'
        }
      ]
    }

    this.setSelection = this.setSelection.bind(this)
  }

  setSelection(index, id) {
    this.setState(previousState => {
      const { selection } = previousState
      // Using the ImmutableJS 'List' type we can make state updates easy.
      // This will set the value at the index,
      // and then remove all the values that are after the indexed value.
      const newSelection = selection.set(index, id).setSize(index + 1)

      return { selection: newSelection }
    })
  }

  render() {
    const { selection, topics } = this.state

    const totalColumns = 3

    const rootTopics = _.filter(topics, topic => _.isNil(topic.parent))

    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <Column>
                  {_.map(rootTopics, ({ id, title, color }) => (
                    <div key={id}>
                      <Button
                        color={color}
                        onClick={() => this.setSelection(0, id)}
                        disabled={selection.get(0) === id}
                      >
                        {title}
                      </Button>
                    </div>
                  ))}
                </Column>
                {_.map(_.range(1, totalColumns), index => {
                  const selectedParentId = selection.get(index - 1)

                  const parent = _.find(topics, { id: selectedParentId })

                  let childTopics = []
                  if (parent) {
                    childTopics = _.filter(topics, topic => topic.parent === parent.id)
                  }

                  return (
                    <Column key={index}>
                      {_.map(childTopics, ({ id, title, color }) => (
                        <div key={id}>
                          <Button
                            color={color}
                            disabled={selection.get(index) === id}
                            onClick={() => this.setSelection(index, id)}
                          >
                            {title}
                          </Button>
                        </div>
                      ))}
                    </Column>
                  )
                })
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
