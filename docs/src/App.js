import React from 'react'
import notify, { Notifications } from './Notifications'
  

export default class App extends React.Component {
  addNotification = () => {
    notify({
      message: 'Smth going here',
      type: 'error'
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
