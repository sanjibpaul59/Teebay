class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path
    else
      render json: { errors: 'Invalid email or password' }, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
