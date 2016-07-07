import React from 'react'
import Notification from './Notification'


const createId = (() => {
  let id = +new Date()
  return () => id++
})()

export default class Container extends React.Component {
  constructor() {
    super()

    this.state = {
      notificationIds: [],
      notifications: {}
    }
  }

  addNotification = (params) => {
    const { notificationIds, notifications } = this.state
    const id = createId()

    notificationIds.unshift(id)
    notifications[id] = params

    this.setState({
      notificationIds,
      notifications
    })
  }

  removeNotification = (id) => {
    const { notificationIds, notifications } = this.state
    const idIndex = notificationIds.indexOf(id)

    notificationIds.splice(idIndex, 1)
    delete notifications[id]

    this.setState({
      notificationIds,
      notifications
    })
  }

  render() {
    const { notificationIds, notifications } = this.state

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
          notificationIds.map((id) => {
            const notification = notifications[id]

            return (
              <Notification
                key={ id }
                { ...notification }
                onRemove={ () => this.removeNotification(id) }
              />
            )
          })
        }
      </div>
    )
  }
}
