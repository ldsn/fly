import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { observer, PropTypes } from 'mobx-react';

@observer
class Counter extends Component {
  static propTypes = {
    store: Proptypes.shape({
      count: PropTypes.number,
      increment: PropTypes.func,
      decrement: PropTypes.func
    })
  };
  render() {
    return (
      <div>
        Counter: {this.props.store.count} <br />
        <button onClick={this.handleInc.bind(this)}> + </button>
        <button onClick={this.handleDec.bind(this)}> - </button>
      </div>
    );
  }
  handleInc() {
    this.props.store.increment();
  }
  handleDec() {
    this.props.store.decrement();
  }
}

export default Counter;
