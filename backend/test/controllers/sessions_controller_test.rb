require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should create session" do
    post login_url, params: { email: 'alexander1@mail.com', password: 'PassWhat??' }
    assert_response :bad_request
    assert_equal 'Invalid email or password', JSON.parse(response.body)['errors']
  end

  test "should destroy session" do
    delete logout_path
    assert_response :no_content
  end
end
