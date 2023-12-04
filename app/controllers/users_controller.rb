class UsersController < ApplicationController
  skip_before_action :authorize, only: :create
  wrap_parameters format: []

  def create
    # creates a new user
    user = User.create!(user_params)
    UserMailer.with(user: user).welcome_email.deliver_later
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    # makes sure user is logged in
    render json: @current_user
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :username, :password, :password_confirmation, :bio)
  end
end
