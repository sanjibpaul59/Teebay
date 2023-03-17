import axios from "axios";
export const getAuthUser = async () => {
  const response = await axios.get("http://localhost:3000/current_user");
  return response.data;
}