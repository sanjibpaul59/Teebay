require "test_helper"

class TransactionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @transaction = transactions(:one)
  end

  test "should get index" do
    get transactions_url, as: :json
    assert_response :success
  end

  test "should create transaction" do
    assert_difference("Transaction.count") do
      post transactions_url, params: { transaction: { buyer_id: @transaction.buyer_id, price: @transaction.price, product_id: @transaction.product_id, rent_end_date: @transaction.rent_end_date, rent_start_date: @transaction.rent_start_date, seller_id: @transaction.seller_id, selling_date: @transaction.selling_date, transaction_type: @transaction.transaction_type } }, as: :json
    end

    assert_response :created
  end

  test "should show transaction" do
    get transaction_url(@transaction), as: :json
    assert_response :success
  end

  test "should update transaction" do
    patch transaction_url(@transaction), params: { transaction: { buyer_id: @transaction.buyer_id, price: @transaction.price, product_id: @transaction.product_id, rent_end_date: @transaction.rent_end_date, rent_start_date: @transaction.rent_start_date, seller_id: @transaction.seller_id, selling_date: @transaction.selling_date, transaction_type: @transaction.transaction_type } }, as: :json
    assert_response :success
  end

  test "should destroy transaction" do
    assert_difference("Transaction.count", -1) do
      delete transaction_url(@transaction), as: :json
    end

    assert_response :no_content
  end
end
