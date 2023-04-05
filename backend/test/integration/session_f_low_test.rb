# test/controllers/session_flow_test.rb

require 'test_helper'

class SessionFlowTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "can log in and log out" do
    # Log in
    post login_path, params: { email: @user.email, password: 'PassWhat??' }
    assert_response :success

    # Verify session is created
    assert session[:user_id]

    # Log out
    delete logout_path
    assert_response :no_content

    # Verify session is destroyed
    assert_nil session[:user_id]
  end

  test "can't log in with invalid credentials" do
    # Log in with invalid credentials
    post login_path, params: { email: @user.email, password: 'wrong_password' }
    assert_response :bad_request

    # Verify session is not created
    assert_nil session[:user_id]
  end
end
