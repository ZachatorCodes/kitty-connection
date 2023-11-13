class ApplicationsController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    applications = Application.all
    render json: applications, status: :ok
  end
end
