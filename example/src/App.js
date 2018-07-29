import React, { Component } from 'react'
import notify, { NotificationConductor } from 'react-notify-me'

import './App.css'
import 'react-notify-me/style.css'


const getRandomInt = (num) => Math.floor(Math.random() * (num + 1))

const notifications = [
  'Something goes wrong!',
  'You did this! New notification added!',
  'Press this button <b>wisely</b>!',
  'This is just info about you pressed that Button! If you want more visit <a href="https://github.com/grammka/react-notify-me">Github</a>',
]

class App extends Component {

  addNotification = () => {
    const content = notifications[getRandomInt(3)]
    const notification = (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    )

    notify(notification)
  }

  render() {

    return (
      <div className="wrapper">
        <div className="button" onClick={this.addNotification}>Add notification</div>
        <NotificationConductor />
      </div>
    )
  }
}

export default App
