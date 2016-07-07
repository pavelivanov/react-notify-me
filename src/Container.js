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
    const { config: { position } } = this.props

    const id = createId()
    const insertMethod = position == 'topLeft' || position == 'topRight' ? 'unshift': 'push'
  
    notificationIds[insertMethod](id)
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
    const { config } = this.props
    const { position } = config

    let containerStyle = {
      display: 'flex',
      maxHeight: '100%',
      flexDirection: 'column',
      flexWrap: 'wrap-reverse',
      position: 'fixed',
      zIndex: '9998'
    }

    if (position == 'topLeft') {
      containerStyle.top = 0
      containerStyle.left = '5px'
    } else if (position == 'topRight') {
      containerStyle.top = 0
      containerStyle.right = '5px'
    } else if (position == 'bottomLeft') {
      containerStyle.left = '5px'
      containerStyle.bottom = 0
    } else if (position == 'bottomRight') {
      containerStyle.right = '5px'
      containerStyle.bottom = 0
    }


    return (
      <div style={ containerStyle }>
        {
          notificationIds.map((id) => {
            const notification = notifications[id]

            return (
              <Notification
                key={ id }
                config={ config }
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
