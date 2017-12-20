class RatingsController < ApplicationController

  # Initial react data loading at page load
  def index
    @nps_obj = {
      ratings_count: Rating.count,
      detractors_percentage: Rating.detractors_percentage,
      nps: Rating.nps,
      promoters_percentage: Rating.promoters_percentage
    }
  end

  # Not used anymore due to Api::RatingsController#create
  def create
    @rating = Rating.new params.fetch(:rating, {}).permit(:score)
    @rating.save!
    redirect_to root_url
  rescue ActiveRecord::RecordInvalid
    flash[:error] = 'Could not save score'
    render :index
  end

end

