import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  let users = [];
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    users = response.data;
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van de users:",
      error
    );
  }
  return users;
}

export async function getUser(id) {
  let user = {};
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    user = response.data;
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van de user:",
      error
    );
  }
  return user;
}

export async function createUser(user) {
  let newUser = {};
  try {
    const response = await axios.post(`${BASE_URL}/users`, user);
    newUser = response.data;
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het aanmaken van de user:",
      error
    );
  }
  return newUser;
}
