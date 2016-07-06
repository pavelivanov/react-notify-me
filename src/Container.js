import React from 'react'
import Notification from './Notification'


export default class Container extends React.Component {
  constructor() {
    super()

    this.state = {
      notifications: []
    }
  }

  addNotification = (params) => {
    const { notifications } = this.state

    notifications.push(params)

    this.setState({
      notifications
    })
  }

  render() {
    const { notifications } = this.state

    const containerStyle = {
      direction: 'rtl',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      position: 'fixed',
      top: '10px',
      right: '10px',
      bottom: '10px',
      zIndex: '9998'
    }


    return (
      <div style={ containerStyle }>
        {
          notifications.map((notification, index) => {
            return (
              <Notification key={ index } { ...notification } />
            )
          })
        }
      </div>
    )
  }
}
