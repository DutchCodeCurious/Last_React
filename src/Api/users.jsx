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
      "Er is een fout opgetreden bij het ophalen van het event:",
      error
    );
  }
  return user;
}
