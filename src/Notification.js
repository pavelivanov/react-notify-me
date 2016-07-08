import React from 'react'
import cx from 'classnames'
import styles from './style.css'


export default class Notification extends React.Component {
  constructor() {
    super()

    this.state = {
      mounted: false,
      removed: false
    }
  }

  componentWillMount() {
    const { autoDismiss, onRemove } = this.props

    if (autoDismiss) {
      setTimeout(onRemove, autoDismiss * 1000)
    }
  }

  componentDidMount() {
    const self = this
    const { config: { position } } = self.props

    const notification    = self.refs.notification
    const height          = self.refs.notification.clientHeight
    const cssKey          = position == 'topLeft' || position == 'topRight' ? 'marginTop' : 'marginBottom'

    notification.style[cssKey] = `-${height}px`

    setTimeout(() => {
      notification.style.transition = 'all 0.2s linear'
      notification.style.opacity = 1
      notification.style[cssKey] = 0

      self.setState({
        mounted: true
      })
    }, 10)
  }

  remove = () => {
    const { onRemove } = this.props

    this.setState({
      removed: true
    })

    setTimeout(onRemove, 300)
  }


  render() {
    const { mounted, removed } = this.state
    const { config: { position }, content, type } = this.props

    const containerClassName = cx(styles.container, {
      [styles.containerMounted]: mounted,
      [styles.containerRemoved]: removed
    })

    const notificationClassName = cx(styles.notification, {
      [styles.notificationMounted]: mounted,
      [styles.notificationRemoved]: removed,
      [styles.info]:     type == 'info',
      [styles.success]:  type == 'success',
      [styles.warning]:  type == 'warning',
      [styles.error]:    type == 'error'
    })


    return (
      <div className={ containerClassName } data-position={ position }>
        <div ref="notification" className={ notificationClassName } data-position={ position }>
          <div className={ styles.closeButton } onClick={ this.remove }></div>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    )
  }
}
