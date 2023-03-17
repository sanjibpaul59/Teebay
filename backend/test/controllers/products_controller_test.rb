require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get products_url, as: :json
    assert_response :success
  end

  # test "should create product" do
  #   assert_difference("Product.count") do
  #     post products_url, params: { product: { rent_amount: @product.rent_amount, description: @product.description, rent_type: @product.rent_type, user_id: @product.user_id, selling_price: @product.selling_price, title: @product.title } }, as: :json
  #   end

  #   assert_response :created
  # end
test "should create product" do
  assert_difference("Product.count") do
    @product = Product.new(
      rent_amount: 100,
      description: "Test product",
      rent_type: "hourly",
      user_id: users(:one).id,
      selling_price: 500,
      title: "Test product title"
    )
    post products_url, params: { product: { rent_amount: @product.rent_amount, description: @product.description, rent_type: @product.rent_type, user_id: @product.user_id, selling_price: @product.selling_price, title: @product.title } }, as: :json
  end

  assert_response :created
end



  test "should show product" do
    get product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: { product: { rent_amount: @product.rent_amount, description: @product.description, rent_type: @product.rent_type, user_id: @product.user_id, selling_price: @product.selling_price, title: @product.title } }, as: :json
    assert_response :success
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete product_url(@product), as: :json
    end

    assert_response :no_content
  end

  test "should destroy product and associated product categories" do
    product = products(:one)
    assert_difference('ProductCategory.count', -1) do
      delete product_url(product)
    end
    assert_response :no_content
    assert_empty response.body
  end

  test "should destroy product and associated transactions" do
    product = products(:one)
    assert_difference('Transaction.count', -1) do
      delete product_url(product)
    end
    assert_response :no_content
    assert_empty response.body
  end



end
