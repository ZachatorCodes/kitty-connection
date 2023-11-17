class CatsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    cats = Cat.all
    render json: cats, status: :ok
  end

  def update
    cat = Cat.find(params[:id])
    cat.update!(update_cat_params)
    render json: cat, status: :ok
  end

  def destroy
    cat = Cat.find(params[:id])
    cat.destroy
    head :no_content
  end

  private

  def update_cat_params
    params.permit(:name, :age, :sex)
  end
end
