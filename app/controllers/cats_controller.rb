class CatsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    cats = Cat.all
    render json: cats, status: :ok
  end
end
