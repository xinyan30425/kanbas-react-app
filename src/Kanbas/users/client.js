import axios from "axios";

  const request = axios.create({
    withCredentials: true,
  });
  
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";
  const USERS_API = `${API_BASE}/api/users`;

//   export const USERS_API = process.env.REACT_APP_API_URL;

  export const createUser = async (user) => {
    const response = await request.post(`${USERS_API}`, user);
    return response.data;
  };
  
  export const signin = async (credentials) => {
    const response = await request.post(`${USERS_API}/signin`, credentials);
    return response.data;
  };
  
  export const signout = async () => {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
  };
  

  export const signup = async (credentials) => {
    const response = await request.post(
      `${USERS_API}/signup`, credentials);
    return response.data;
  };
  
  export const account = async () => {
    const response = await request.post(`${USERS_API}/account`);
    return response.data;
  };
  
  export const findAllUsers = async () => {
    const response = await request.get(`${USERS_API}`);
    return response.data;
  };
  
  
  export const findUserById = async (id) => {
    const url = `${USERS_API}/${id}`;
    console.log("Requesting user data from:", url); 
    const response = await request.get(url);
    return response.data;
  };
  
  
export const updateUser = async (id, user) => {
    const url = `${USERS_API}/${id}`;
    console.log("Updating user at:", url, "with data:", user); // Log URL and data
    const response = await request.put(url, user);
    return response.data;
  };
  

export const deleteUser = async (user) => {
    const response = await request.delete(
      `${USERS_API}/${user._id}`);
    return response.data;
  };
  



