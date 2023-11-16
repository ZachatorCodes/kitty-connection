class CatsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    cats = Cat.all
    render json: cats, status: :ok
  end

  def destroy
    cat = Cat.find(params[:id])
    cat.destroy
    head :no_content
  end
end
