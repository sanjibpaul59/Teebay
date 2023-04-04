class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      puts @user.errors.full_messages
      render json: @user.errors, status: :bad_request
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  def products
    user_id = params[:user_id]
    if user_id.present?
      @user = User.find(user_id)
      @products = @user.products
      render json: @products.includes(:categories).to_json(include: :categories)
    else
      render json: { error: "User id is required" }, status: :unprocessable_entity
    end
  end

  def sold_products
    user_id = params[:user_id]
    if user_id.present?
      @user = User.find(user_id)
      # Select products from transactions where transaction_type is "buy"
      @products = @user.sold_products.where(transactions: { transaction_type: "buy" })
      render json: @products.includes(:categories).to_json(include: :categories)
    else
      render json: { error: "User id is required" }, status: :unprocessable_entity
    end
  end

  def bought_products
    user_id = params[:user_id]
    if user_id.present?
      @user = User.find(user_id)
      @products = @user.bought_products.where(transactions: { transaction_type: "buy" })
      render json: @products.includes(:categories).to_json(include: :categories)
    else
      render json: { error: "User id is required" }, status: :unprocessable_entity
    end
  end

  def lent_products
    user_id = params[:user_id]
    if user_id.present?
      @user = User.find(user_id)
      @products = @user.lent_products.where(transactions: { transaction_type: "rent" })
      render json: @products.includes(:categories).to_json(include: :categories)
    else
      render json: { error: "User id is required" }, status: :unprocessable_entity
    end
  end

  def borrowed_products
    user_id = params[:user_id]
    if user_id.present?
      @user = User.find(user_id)
      @products = @user.borrowed_products.where(transactions: { transaction_type: "rent" })
      render json: @products.includes(:categories).to_json(include: :categories)
    else
      render json: { error: "User id is required" }, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :address, :email, :phone_number, :password)
    end
end
