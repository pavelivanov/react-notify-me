import React, { Component } from 'react'

import Notification from './Notification'


const getId = (() => {
  let id = +new Date()
  return () => id++
})()

let addNotification

const notify = (notificationNode) => {
  if (typeof addNotification === 'function') {
    addNotification(notificationNode)
  }
}


class NotificationConductor extends Component {

  constructor() {
    super()

    this.state = {
      notificationIds: [],
      notifications: {},
    }
  }

  componentWillMount() {
    addNotification = this.addNotification
  }

  addNotification = (notificationNode) => {
    const { notificationIds, notifications } = this.state
    const id = getId()

    this.setState({
      notificationIds: [
        id,
        ...notificationIds,
      ],
      notifications: {
        ...notifications,
        [id]: notificationNode,
      }
    })
  }

  handleCloseNotification = (id) => {
    const { notificationIds, notifications } = this.state

    const count = notificationIds.length
    const index = notificationIds.indexOf(id)

    if (count === 1) {
      this.setState({
        notificationIds: [],
        notifications: {},
      })
    }
    else if (index >= 0) {
      const restNotificationIds = notificationIds.slice(0, index).concat(notificationIds.slice(index + 1))
      const { [id]: removedNotification, ...restNotifications } = notifications

      this.setState({
        notificationIds: restNotificationIds,
        notifications: restNotifications,
      })
    }
  }

  render() {
    const { notificationIds, notifications } = this.state

    if (!notificationIds.length) {
      return null
    }

    return (
      <div className="react-notify-me-conductor">
        {
          notificationIds.map((id) => {
            const notificationNode = notifications[id]

            return (
              <Notification key={id} id={id} onClose={this.handleCloseNotification}>
                {notificationNode}
              </Notification>
            )
          })
        }
      </div>
    )
  }
}


export default NotificationConductor

export {
  notify,
}