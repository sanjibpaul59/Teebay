require "test_helper"

class UsersFlowTest < ActionDispatch::IntegrationTest
  test "create user" do
    assert_difference 'User.count' do
      post '/users', params: { user: { first_name: 'John', last_name: 'Doe', email: 'johndoe@gmail.com', password: 'password', address: 'adress of john doe', phone_number: '01869547238' } }
    end
    assert_response :created
  end

  test "show user" do
    get user_path(User.last)
    assert_response :success
  end

  test "update user" do
    patch user_path(User.last), params: { user: { address: 'first world country' } }
    assert_response :success
  end

  test "delete user" do
    assert_difference 'User.count', -1 do
      delete user_path(User.last)
    end
    assert_response :no_content
  end

  test "list users" do
    get users_path
    assert_response :success
  end

end
