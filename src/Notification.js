import React from 'react'
import cx from 'classnames'
import useSheet from './useSheet'
import colors from './colors'


@useSheet({
  container: {
    direction: 'ltr',
    marginTop: 0,
    marginLeft: 10,
    position: 'relative',
    borderRadius: '3px',
    transition: 'margin-top 0.15s linear 0.15s'
  },
  containerMounted: {
    marginTop: 10
  },
  containerRemoved: {
    overflow: 'hidden',
    marginTop: 0
  },
  notification: {
    minWidth: 200,
    maxWidth: 360,
    marginTop: '-100px',
    padding: '8px 25px 10px 15px',
    backgroundColor: '#fff',
    position: 'relative',
    opacity: 0,
    fontSize: '14px',
    color: '#000',
    boxSizing: 'border-box',
    boxShadow: 'rgba(0,0,0, 0.25) 0 1px 4px',
    borderRadius: '3px',
    transition: 'all 0.3s linear'
  },
  notificationMounted: {
    marginTop: 0,
    opacity: 1
  },
  notificationRemoved: {
    marginTop: '-100px',
    opacity: 0.3
  },
  info: {
    borderColor: `7px solid rgba(${colors.info.rgb}, 0.9)`
  },
  success: {
    borderColor: `7px solid rgba(${colors.success.rgb}, 0.9)`
  },
  warning: {
    borderColor: `7px solid rgba(${colors.warning.rgb}, 0.9)`
  },
  error: {
    borderColor: `7px solid rgba(${colors.error.rgb}, 0.9)`
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
  }
})
export default class Dialog extends React.Component {
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

    setTimeout(() => {
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
    const { sheet: { classes }, ...rest } = this.props
    const { content, type } = rest

    const containerClassName = cx(classes.container, {
      [classes.containerMounted]: mounted,
      [classes.containerRemoved]: removed
    })

    const notificationClassName = cx(classes.notification, {
      [classes.notificationMounted]: mounted,
      [classes.notificationRemoved]: removed,
      [classes.info]:     type == 'info',
      [classes.success]:  type == 'success',
      [classes.warning]:  type == 'warning',
      [classes.error]:    type == 'error'
    })
  
  
    return (
      <div className={ containerClassName }>
        <div className={ notificationClassName }>
          <div className={ classes.closeButton } onClick={ this.remove }></div>
          { content }
        </div>
      </div>
    )
  }
}
