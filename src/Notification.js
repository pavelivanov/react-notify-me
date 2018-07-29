import React, { PureComponent } from 'react'
import cx from 'classnames'


const classes = {
  notificationContainer: 'react-notify-me-notification-container',
  notificationContainerMounted: 'react-notify-me-notification-container__mounted',
  notificationContainerRemoved: 'react-notify-me-notification-container__removed',
  notification: 'react-notify-me-notification',
  notificationMounted: 'react-notify-me-notification__mounted',
  notificationRemoved: 'react-notify-me-notification__removed',
  notificationContent: 'react-notify-me-notification-content',
}

class Notification extends PureComponent {

  constructor() {
    super()

    this.closeTimer = null

    this.state = {
      mounted: false,
      removed: false,
    }
  }

  componentWillUnmount() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
    }
  }

  onMount = (el) => {
    const { mounted } = this.state

    if (!mounted && el) {
      el.style['margin-top'] = `-${el.clientHeight}px`

      setTimeout(() => {
        this.setState({
          mounted: true,
        }, () => {
          this.closeTimer = setTimeout(this.close, 5000)
        })
      }, 30)
    }
  }

  close = () => {
    const { id, onClose } = this.props

    clearTimeout(this.closeTimer)
    this.closeTimer = null

    this.setState({
      removed: true,
    }, () => {
      setTimeout(() => {
        onClose(id)
      }, 300)
    })
  }

  render() {
    const { mounted, removed } = this.state
    const { children } = this.props

    const containerClassName = cx([classes.notificationContainer], {
      [classes.notificationContainerMounted]: mounted,
      [classes.notificationContainerRemoved]: removed,
    })

    const notificationClassName = cx([classes.notification], {
      [classes.notificationMounted]: removed ? false : mounted,
      [classes.notificationRemoved]: removed,
    })

    const notificationContentClassName = classes.notificationContent

    return (
      <div className={containerClassName}>
        <div className={notificationClassName} ref={this.onMount} onClick={this.close}>
          <div className={notificationContentClassName}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Notification
