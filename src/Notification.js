import React from 'react'
import cx from 'classnames'
import useSheet from './useSheet'


@useSheet({
  container: {
    direction: 'ltr'
  },
  notification: {
    minWidth: 200,
    position: 'relative',
    background: 'white',
    fontSize: '14px',
    boxSizing: 'border-box',
    boxShadow: 'rgba(0,0,0, 0.23) 0 3px 15px',
    zIndex: 10
  },
  closeButton: {
    width: 24,
    height: 24,
    lineHeight: '20px',
    position: 'absolute',
    top: 10,
    right: 10,
    opacity: 0.3,
    fontSize: 30,
    cursor: 'pointer',
    '&:hover': {
      opacity: 1
    }
  },
  content: {
    padding: 20
  }
})
export default class Dialog extends React.Component {
  render() {
    const { sheet: { classes }, ...rest } = this.props
    const { message, type } = rest

    const notificationClassName = cx(classes.notification, {
      [classes.info]: false,
      [classes.success]: false,
      [classes.warning]: false,
      [classes.error]: false
    })


    return (
      <div className={ classes.container }>
        <div className={ notificationClassName }>
          <div className={ classes.content }>
            { message }
          </div>
        </div>
      </div>
    )
  }
}
