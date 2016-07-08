import React from 'react'
import Container from './Container'
  

let addNotification

const defaultConfig = {
  position: 'rightTop'
}


class Notifications extends React.Component {
  componentDidMount() {
    addNotification = this.refs.notifications.addNotification
  }
  
  render() {
    const config = { ...defaultConfig, ...this.props.config }

    return <Container ref="notifications" config={ config } />
  }
}

const notify = (params) => {
  if (typeof addNotification == 'function') {
    addNotification(params);
  }
}


export default notify
export { Notifications }
