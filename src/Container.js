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

  removeNotification = (index) => {
    const { notifications } = this.state

    notifications.splice(index, 1)

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
      top: 0,
      right: 10,
      bottom: 10,
      zIndex: '9998'
    }


    return (
      <div style={ containerStyle }>
        {
          notifications.map((notification, index) => {
            return (
              <Notification
                key={ index }
                { ...notification }
                onRemove={ () => this.removeNotification(index) }
              />
            )
          })
        }
      </div>
    )
  }
}
