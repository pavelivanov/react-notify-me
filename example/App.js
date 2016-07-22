import React from 'react'
import notify, { Notifications } from '../lib'


function getRandomInt(num) {
  return Math.floor(Math.random() * (num + 1));
}

const notifications = [
  `Happy Birthday to you! <a href="/foo">Happy Birthday to you!</a> Happy Birthday to dead husband! Happy Birthday to you!`,
  'Thanks. I assume you meant “dear”.',
  'Yes!!! I mean that is a crazy autocorrect! Sorry babe.',
  'A fabulous new site called "Damn You Auto Correct!" is gathering up people\'s screwed up text messages thanks to the auto correct feature on smartphones.',
  'We\'ve sifted through a few pages of texting errors and gathered our ten favorites. Enjoy!'
]
const types = [ 'info', 'success', 'warning', 'error' ]


export default class App extends React.Component {
  addNotification = () => {
    notify({
      content: notifications[getRandomInt(4)],
      type: types[getRandomInt(3)]
    })
  }

  render() {
    const style = {
      backgroundImage: `url(${ require('./images/bg.jpg') })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div style={ style }>
        <button onClick={ this.addNotification }>Add notification</button>
        <Notifications config={{ position: 'bottomRight' }} />
      </div>
    )
  }
}
