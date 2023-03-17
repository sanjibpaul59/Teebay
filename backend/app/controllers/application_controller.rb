class ApplicationController < ActionController::API
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def current_user_json
    render json: current_user
  end
end
