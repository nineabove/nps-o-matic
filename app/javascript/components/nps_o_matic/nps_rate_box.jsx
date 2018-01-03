import React from 'react';
import PropTypes from 'prop-types';

const numToEng = ['zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export default class NpsRateBox extends React.Component {
  handleClick() {
    return this.props.callbackFromNpsRate(this.props.order);
  }

  render() {
    const classyName = `nps-rate-zero-ten-square pull-center ${numToEng[this.props.order]}`;
    return (
      <div className={classyName} onClick={() => this.handleClick(this.props.order)}>
        {this.props.order}
      </div>
    );
  }
}

NpsRateBox.propTypes = {
  callbackFromNpsRate: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};
