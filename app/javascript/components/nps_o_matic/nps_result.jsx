import React from 'react';
import PropTypes from 'prop-types';
import NpsGuageTicks from 'nps-gauge-ticks.svg';

export default class NpsModule extends React.Component {
  /**
   * Calculate the background color of the pointer
   */
  backgroundColor() {
    const leftColor = [212, 51, 91];
    const centerColor = [248, 189, 0];
    const rightColor = [45, 213, 138];
    let rbg = [0, 0, 0];
    const absoluteNumber = this.props.number > 0 ? this.props.number : this.props.number * -1;
    const weight1 = absoluteNumber / 100;
    const weight2 = 1 - weight1;

    if (this.props.number > 0) {
      rbg = [
        Math.round(centerColor[0] * weight2 + rightColor[0] * weight1),
        Math.round(centerColor[1] * weight2 + rightColor[1] * weight1),
        Math.round(centerColor[2] * weight2 + rightColor[2] * weight1)
      ];
    } else {
      rbg = [
        Math.round(leftColor[0] * weight1 + centerColor[0] * weight2),
        Math.round(leftColor[1] * weight1 + centerColor[1] * weight2),
        Math.round(leftColor[2] * weight1 + centerColor[2] * weight2)
      ];
    }

    return rbg;
  }

  /**
   * Calculate the angle of rotation of the pointer.
   */
  angle() {
    const positiveAngleRange = 136;
    const maxNps = 100;
    return parseInt(positiveAngleRange * (this.props.number / maxNps));
  }

  /**
   * Style for the pointer changing the background color and the rotation angle.
   */
  cssEval() {
    const newColor = this.backgroundColor();
    return {
      backgroundColor: `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`,
      transform: `translate(-50%, -50%) rotate(${this.angle()}deg)`
    };
  }

  render() {
    return (
      <div className='nps-result'>
        <img className='nps-result-scale' src={NpsGuageTicks} alt='Nps gauge ticks' />
        <div className='nps-result-pointer' style={this.cssEval()} />
        <div className='nps-result-number'>
          {this.props.number}
        </div>
        <div className='nps-result-unit pull-center'>
          NPS
        </div>
      </div>
    );
  }
}

NpsModule.propTypes = {
  number: PropTypes.number.isRequired
};
