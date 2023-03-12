class ProductCategoriesController < ApplicationController
  before_action :set_product_category, only: %i[ show update destroy ]

  # GET /product_categories
  def index
    @product_categories = ProductCategory.all

    render json: @product_categories
  end

  # GET /product_categories/1
  def show
    render json: @product_category
  end

  # POST /product_categories
  def create
    @product_category = ProductCategory.new(product_category_params)

    if @product_category.save
      render json: @product_category, status: :created, location: @product_category
    else
      render json: @product_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /product_categories/1
  def update
    if @product_category.update(product_category_params)
      render json: @product_category
    else
      render json: @product_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /product_categories/1
  def destroy
    @product_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product_category
      @product_category = ProductCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_category_params
      params.require(:product_category).permit(:product_id, :category_id)
    end
end
