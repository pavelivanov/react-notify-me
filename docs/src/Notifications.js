import React from 'react'
import NotificationsSystem from '../../src'
  

let addNotification

class Notifications extends React.Component {
  componentDidMount() {
    addNotification = this.refs.notifications.addNotification
  }

  render() {
    return <NotificationsSystem ref="notifications" />
  }
}

const notify = (params) => {
  if (typeof addNotification == 'function') {
    addNotification(params);
  }
}


export default notify
export { Notifications }
