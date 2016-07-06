import React from 'react'
import NotificationsSystem from '../../src'
  

let addNotification

class Notifications extends React.Component {
  componentDidMount() {
    console.log(333, this.refs.notifications);
    console.log(444, this.refs.notifications.addNotification);

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
