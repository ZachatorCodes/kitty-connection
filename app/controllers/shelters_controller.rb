class SheltersController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    shelters = Shelter.all
    render json: shelters, status: :ok
  end
end
