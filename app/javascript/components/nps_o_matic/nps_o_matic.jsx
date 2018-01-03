import React from 'react';
import $ from 'jquery';
import RateModule from './rate_module';
import AppreciateModule from './appreciate_module';
import csrfToken from '../../utils/csrf_token';

export default class NpsOMatic extends React.Component {
  constructor(data) {
    super();
    this.state = data;
  }

  render() {
    return (
      <div className='row row-widened'>
        <RateModule callbackFromNpsOMatic={this.callbackAtNpsOMatic} />
        <AppreciateModule ratings_count={this.state.ratings_count}
          detractors_percentage={this.state.detractors_percentage}
          nps={this.state.nps}
          promoters_percentage={this.state.promoters_percentage} />
      </div>
    );
  }

  /**
   * Makes two calls to Rails server
   * Create a rating with a score.
   * Get combined data of ratings to display.
   * I am avoiding to use bind() on callbackAtNpsOMatic() for performance.
   * https://daveceddia.com/avoid-bind-when-passing-props/
   */
  // eslint-disable-next-line
  callbackAtNpsOMatic = (ratingOrder) => {
    const self = this;
    return new Promise((resolve) => resolve(
      $.ajax({
        type: 'POST',
        url: '/api/ratings',
        headers: {
          'X-CSRF-Token': csrfToken()
        },
        data: {
          rating: {
            score: ratingOrder
          }
        }
      })
    ))
      .then(() => $.ajax({
        type: 'GET',
        url: '/api/ratings'
      }))
      .then((data) => {
        self.setState(data);
      })
      .catch(() => {
        alert('Failed to rate');
      });
  }
}
