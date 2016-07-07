import React from 'react'
import notify, { Notifications } from './Notifications'


function getRandomInt(num) {
  return Math.floor(Math.random() * (num + 1));
}

const notifications = [
  'Happy Birthday to you! Happy Birthday to you! Happy Birthday to dead husband! Happy Birthday to you!',
  'Thanks. I assume you meant “dear”.',
  'Yes!!! I mean that is a crazy autocorrect! Sorry babe.',
  'A fabulous new site called "Damn You Auto Correct!" is gathering up people\'s screwed up text messages thanks to the auto correct feature on smartphones.',
  'We\'ve sifted through a few pages of texting errors and gathered our ten favorites. Enjoy!'
]
const types = [ 'info', 'success', 'warning', 'error' ]


export default class App extends React.Component {
  addNotification = () => {
    notify({
      message: notifications[getRandomInt(4)],
      type: types[getRandomInt(3)]
    })
  }

  render() {
    return (
      <div>
        <button onClick={ this.addNotification }>Add notification</button>
        <Notifications />
      </div>
    )
  }
}
