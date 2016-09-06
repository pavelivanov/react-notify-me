import React from 'react'
import notify, { Notifications } from '../lib'

import style from './style.css'


function getRandomInt(num) {
  return Math.floor(Math.random() * (num + 1));
}

const notifications = [
  {
    content: 'Something goes wrong!',
    type: 'error'
  },
  {
    content: 'You did this! New notification added!',
    type: 'success'
  },
  {
    content: 'Press this button <b>wisely</b>!',
    type: 'warning',
    contentType: 'html'
  },
  {
    content: 'This is just info about you pressed that Button! If you want more visit <a href="https://github.com/grammka/react-notify-me">Github</a>',
    type: 'info',
    contentType: 'html'
  }
]


export default class App extends React.Component {
  addNotification = () => {
    notify(notifications[getRandomInt(3)])
  }

  render() {
    return (
      <div className={ style.wrapper }>
        <div className={ style.button } onClick={ this.addNotification }>Add notification</div>
        <Notifications config={{ autoDismiss: 4000, position: 'bottomRight' }} />
      </div>
    )
  }
}
