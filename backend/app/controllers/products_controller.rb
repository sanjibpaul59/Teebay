class ProductsController < ApplicationController
  before_action :set_product, only: %i[ show update destroy ]

  # GET /products
  def index
    @products = Product.includes(:categories).all
    render json: @products.to_json(include: :categories)
  end

  # GET /products/1
  def show
    @product = Product.includes(:categories).find(params[:id])
    @product.increment(:view_count)
    @product.save
    render json: @product.to_json(include: :categories)
  end

 # Get /unsold_products
  def unsold_products
    @products = Product.includes(:categories).unsold_and_available
    render json: @products.to_json(include: :categories)
  end

  # POST /products
  def create
    @product = Product.new(product_params)
    category_ids = params[:category_ids]
    
    if @product.save
      @product.categories = Category.where(id: category_ids)
      render json: @product.to_json(include: :categories), status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /products/1
  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render json: @product.to_json(include: :categories), status: :ok
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    head :no_content
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:title, :description, :selling_price, :user_id, :rent_amount, :rent_type, category_ids: [])
    end


end
