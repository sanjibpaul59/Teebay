class SessionsController < ApplicationController
  def new
  end

  def show
    session_data = {
      user_id: session[:user_id]
    }
    render json: session_data
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.password == params[:password]
      session[:user_id] = user.id
      render json: {user: user}
    else
      render json: {errors: "Invalid username or password"}
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
