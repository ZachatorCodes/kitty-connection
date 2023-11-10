class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    # login function
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      # adds user id to session after login
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
  end

  def destroy
    # logout function
    session.delete :user_id
    head :no_content
  end
end
