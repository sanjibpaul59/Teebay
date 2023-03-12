require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get products_url, as: :json
    assert_response :success
  end

  test "should create product" do
    assert_difference("Product.count") do
      post products_url, params: { product: { daily_rent_amount: @product.daily_rent_amount, description: @product.description, hourly_rent_amount: @product.hourly_rent_amount, user_id: @product.user_id, selling_price: @product.selling_price, title: @product.title } }, as: :json
    end

    assert_response :created
  end

  test "should show product" do
    get product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: { product: { daily_rent_amount: @product.daily_rent_amount, description: @product.description, hourly_rent_amount: @product.hourly_rent_amount, user_id: @product.user_id, selling_price: @product.selling_price, title: @product.title } }, as: :json
    assert_response :success
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete product_url(@product), as: :json
    end

    assert_response :no_content
  end
end
