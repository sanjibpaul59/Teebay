class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])

    if user && user.password == params[:password]
      session[:user_id] = user.id
      render json: {user: user}
    else
      render json: { errors: 'Invalid email or password' }, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { message: 'Logged out' }
  end
end