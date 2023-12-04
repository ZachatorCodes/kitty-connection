class UserMailer < ApplicationMailer
  def welcome_email
    @user = params[:user]
    @login_url = 'https://kitty-connection.onrender.com/login'
    mail(to: 'zschwartz2020@gmail.com', subject: "Welcome to Kitty Connection!")
  end
end
