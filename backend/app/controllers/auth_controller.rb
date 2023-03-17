class AuthController < ApplicationController

 def create  
   user = User.find_by(email: params[:email])
   if user && user.password == params[:password]
    session[:user_id] = user.id
    render json: {user: user}
   else
     render json: {errors: "Invalid email or password"}
   end
 end

 def destroy
   session[:user_id] = nil
   redirect_to root_path
 end
end

   
