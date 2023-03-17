# require 'test_helper'

# class SessionsControllerTest < ActionDispatch::IntegrationTest
#   test "should get new session page" do
#     get login_path
#     assert_response :success
#   end

#   test "should create session" do
#     post login_url, params: { email: 'alexander1@mail.com', password: 'PassWhat??' }
#     assert_redirected_to login_path
#     assert_equal 'Logged in successfully!', flash[:success]
#   end

#   test "should destroy session" do
#     delete logout_path
#     assert_redirected_to login_path
#     assert_equal 'Logged out successfully!', flash[:success]
#   end
# end

# test/controllers/sessions_controller_test.rb

require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should create session" do
    post login_url, params: { email: 'alexander1@mail.com', password: 'PassWhat??' }
    assert_response :unprocessable_entity
    assert_equal 'Invalid email or password', JSON.parse(response.body)['errors']
  end

  test "should destroy session" do
    delete logout_path
    assert_redirected_to login_path
  end
end
