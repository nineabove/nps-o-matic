class Api::RatingsController < ApplicationController

  def create
    @rating = Rating.new(ratings_params)
    render status: 500 unless @rating.save
  end

  def index
    @nps_obj = {
      ratings_count: Rating.count,
      detractors_percentage: Rating.detractors_percentage,
      nps: Rating.nps,
      promoters_percentage: Rating.promoters_percentage
    }
    render json: @nps_obj
  end

  private

  def ratings_params
    params.require(:rating).permit(:score)
  end
end
