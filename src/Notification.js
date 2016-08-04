import React from 'react'
import cx from 'classnames'
import style from './style.css'


export default class Notification extends React.Component {
  constructor() {
    super()

    this.state = {
      mounted: false,
      removed: false
    }
  }

  componentDidMount() {
    const { config, autoDismiss } = this.props

    setTimeout(() => {
      this.setState({
        mounted: true
      }, () => {
        if (config.autoDismiss || autoDismiss) {
          setTimeout(this.remove, config.autoDismiss || autoDismiss)
        }
      })
    }, 0)
  }

  remove = () => {
    const { onRemove } = this.props

    this.setState({
      removed: true
    }, () => {
      setTimeout(onRemove, 300)
    })
  }


  render() {
    const { mounted, removed } = this.state
    const { config: { position }, content, type, contentType = 'text' } = this.props

    const containerClassName = cx(style.container, {
      [style.containerMounted]: mounted,
      [style.containerRemoved]: removed
    })

    const notificationClassName = cx(style.notification, {
      [style.notificationMounted]: mounted,
      [style.notificationRemoved]: removed,
      [style.info]:     type == 'info',
      [style.success]:  type == 'success',
      [style.warning]:  type == 'warning',
      [style.error]:    type == 'error'
    })

    const cssKey = position == 'topLeft' || position == 'topRight' ? 'marginTop' : 'marginBottom'

    const notificationStyle = {
      [cssKey]: '-100%'
    }


    return (
      <div
        className={ containerClassName }
        data-position={ position }
      >
        <div
          className={ notificationClassName }
          style={notificationStyle}
          data-position={ position }
        >
          <div className={ style.closeButton } onClick={ this.remove }></div>
          <div className={ style.content }>
            {
              (contentType == 'text' || contentType == 'component') && <div>{ content }</div>
            }
            {
              contentType == 'html' && <div dangerouslySetInnerHTML={{ __html: content }}></div>
            }
          </div>
        </div>
      </div>
    )
  }
}
