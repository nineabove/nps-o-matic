import React from 'react';
import PropTypes from 'prop-types';
import NpsRate from './nps_rate';

export default class RateModule extends React.Component {
  render() {
    return (
      <div className='col col-widened rate'>
        <div className='module'>
          <div className='module-header'>
            <div className='module-header-main'>Rate!</div>
          </div>

          <div className='module-body-paper'>
            <p>
              How likely would you be to recommend Acme Systems to a friend or colleague?
            </p>

            <NpsRate callbackFromRateModule={this.props.callbackFromNpsOMatic} />
          </div>
        </div>
      </div>
    );
  }
}

RateModule.propTypes = {
  callbackFromNpsOMatic: PropTypes.func.isRequired
};
