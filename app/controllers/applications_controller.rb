class ApplicationsController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    applications = Application.all
    render json: applications, status: :ok
  end

  def create
    application = Application.create!(application_params)
    render json: application, status: :ok
  end

  private

  def application_params
    params.permit(:user_id, :cat_id, :cat_name, :shelter_name)
  end
end
