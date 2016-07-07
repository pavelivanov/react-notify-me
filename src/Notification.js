import React from 'react'
import cx from 'classnames'
import useSheet from './useSheet'
import colors from './colors'


@useSheet({
  container: {
    direction: 'ltr',
    marginTop: 10,
    marginLeft: 10,
    position: 'relative'
  },
  notification: {
    minWidth: 200,
    maxWidth: 360,
    padding: '8px 25px 10px 15px',
    backgroundColor: '#fff',
    borderLeft: '7px solid #fff',
    fontSize: '14px',
    color: '#000',
    boxSizing: 'border-box',
    boxShadow: 'rgba(0,0,0, 0.25) 0 1px 4px',
    borderRadius: '3px',
    transition: 'marginRight 0.3s linear'
  },
  info: {
    borderColor: `rgba(${colors.info.rgb}, 0.9)`
  },
  success: {
    borderColor: `rgba(${colors.success.rgb}, 0.9)`
  },
  warning: {
    borderColor: `rgba(${colors.warning.rgb}, 0.9)`
  },
  error: {
    borderColor: `rgba(${colors.error.rgb}, 0.9)`
  },
  closeButton: {
    width: 16,
    height: 16,
    lineHeight: '14px',
    position: 'absolute',
    top: 2,
    right: 2,
    opacity: 0.25,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:before': {
      content: '"×"',
      display: 'block',
      width: '100%',
      height: '100%'
    },
    '&:hover': {
      opacity: 1
    }
  },
  content: {

  }
})
export default class Dialog extends React.Component {
  componentWillMount() {

  }


  render() {
    const { sheet: { classes }, ...rest } = this.props
    const { message, type, onRemove } = rest

    const notificationClassName = cx(classes.notification, {
      [classes.info]:     type == 'info',
      [classes.success]:  type == 'success',
      [classes.warning]:  type == 'warning',
      [classes.error]:    type == 'error'
    })
  
  
    return (
      <div className={ classes.container }>
        <div className={ classes.closeButton } onClick={ onRemove }></div>
        <div className={ notificationClassName }>
          { message }
        </div>
      </div>
    )
  }
}
