class UserMailer < ApplicationMailer
  def welcome_email
    @user = params[:user]
    @login_url = 'https://kitty-connection.onrender.com/login'
    mail(to: @user.email, subject: "Welcome to Kitty Connection!")
  end
end
