import React, {Component} from 'react'

class Style extends Component {

  state = {
    hover: false,
    active: false
  }

  handleMouseEnter = (e) => {

  }

  handleMouseLeave = (e) => {

  }

  handleMouseDown = (e) => {
    this.setState({
      active: true
    })
  }

  handleMouseUp = (e) => {
    this.setState({
      active: false
    })
  }

  render () {
    const children = this.props
    if (children.length !== 1) throw new Error('react-style: children length must be 1.')
    return children
  }
}

export default Style