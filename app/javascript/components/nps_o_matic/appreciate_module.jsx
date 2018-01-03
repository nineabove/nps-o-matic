import React from 'react';
import EmphasisModule from './emphasis_module';
import NpsResult from './nps_result';

export default class AppreciateModule extends React.Component {
  constructor(data) {
    super();
    this.state = data;
  }

  /**
   * Propagate change in state to the children, when the parent's state changes.
   */
  componentWillReceiveProps(data) {
    this.setState(data);
  }

  render() {
    return (

      <div className='col appreciate'>
        <div className='module'>
          <div className='module-header'>
            <div className='module-header-main'>Appreciate!</div>
          </div>
          <div className='module-body-paper'>
            <div className='row'>
              <div className='col-appreciate'>
                <div className='appreciate-left-row top'>
                  <EmphasisModule number={this.state.ratings_count} moduleType='ratings' />
                </div>
                <div className='appreciate-left-row bottom'>
                  <div className='col'>
                    <EmphasisModule number={this.state.promoters_percentage} moduleType='promoters' />
                  </div>
                  <div className='col'>
                    <div className='emph-module'>
                      <div className='emph-module-number pull-center'>
                        -
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <EmphasisModule number={this.state.detractors_percentage} moduleType='detractors' />
                  </div>
                  <div className='col'>
                    <div className='emph-module'>
                      <div className='emph-module-number pull-center'>
                        =
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-appreciate'>

                <NpsResult number={this.state.nps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
