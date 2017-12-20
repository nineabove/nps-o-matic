import React from 'react';
import PropTypes from 'prop-types';

export default class EmphasisModule extends React.Component {
  /**
   * Based on the type of the module, decorate it appropriately by attaching
   * a class to the DOM.
   */
  render() {
    let emphasisClass = 'emph-module';
    let percentSign = '';
    let emphasisUnit = '';

    if (this.props.moduleType === 'ratings') {
      emphasisUnit = 'Ratings';
      emphasisClass += ' ratings';
    } else if (this.props.moduleType === 'promoters') {
      percentSign = '%';
      emphasisClass += ' promoters';
      emphasisUnit = 'Promoters';
    } else if (this.props.moduleType === 'detractors') {
      percentSign = '%';
      emphasisClass += ' detractors';
      emphasisUnit = 'Detractors';
    }

    return (
      <div className={emphasisClass}>
        <div className='emph-module-number'>
          {this.props.number}
          {percentSign}
        </div>
        <div className='emph-module-suffix'>
          {emphasisUnit}
        </div>
      </div>
    );
  }
}

EmphasisModule.propTypes = {
  moduleType: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};
