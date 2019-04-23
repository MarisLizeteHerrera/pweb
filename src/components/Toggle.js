import React, {Component} from 'react';

export default class Toggle extends Component {
  state = {on: false}

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  toggle = () => {
    this.setState({
      on: true,
    });
    setTimeout(() => {
      this.setState({
        on: false,
      });
    }, 10000);
  }
  
  render() {
    const {children} = this.props
    return children({
      on: this.state.on,
      toggle: this.toggle
    })
  }
}