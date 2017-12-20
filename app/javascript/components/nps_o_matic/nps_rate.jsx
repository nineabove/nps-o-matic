import React from 'react';
import PropTypes from 'prop-types';
import NpsRateBox from './nps_rate_box';

export default class NpsRate extends React.Component {
  prepareNpsRateBox() {
    const npsComponents = [];

    for (let i = 0; i <= 10; i += 1) {
      npsComponents.push(<NpsRateBox key={i} order={i} callbackFromNpsRate={this.props.callbackFromRateModule} />);
    }

    return npsComponents;
  }

  render() {
    return (
      <div className='nps-rate'>

        <div className='nps-rate-zero-ten'>
          {this.prepareNpsRateBox()}
        </div>

        <div className='nps-rate-likelies'>
          <div className='nps-rate-likelies-col'>
            Very Unlikely
          </div>
          <div className='nps-rate-likelies-col pull-right'>
            Very Likely
          </div>
        </div>
      </div>
    );
  }
}

NpsRate.propTypes = {
  callbackFromRateModule: PropTypes.func.isRequired
};
