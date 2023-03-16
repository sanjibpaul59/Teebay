class ApplicationController < ActionController::API
 # before_action :authenticated_user!
 # def current_user
 #   @current_user ||= User.find_by(id: session[:user_id])
 # end
 # def authenticated_user!
 #   render json: {errors: "Please log in"}, status: :unauthorized unless current_user
 # end
end
