class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])

    if user && user.password == params[:password]
      session[:user_id] = user.id
      render json: {user: user}
    else
      render json: { errors: 'Invalid email or password' }, status: :bad_request
    end
  end

  def destroy
    session[:user_id] = nil
    # render json: { message: 'Logged out' }
    head :no_content
  end
end