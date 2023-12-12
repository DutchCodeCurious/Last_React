import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getCategories() {
  let categories = [];
  try {
    const response = await axios
      .get(`${BASE_URL}/categories`)
      .then((response) => {
        categories = response.data;
      });
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van de categories:",
      error
    );
  }
  return categories;
}

export async function getCategory(id) {
  let category = {};
  try {
    const response = await axios.get(`${BASE_URL}/categories/${id}`);
    category = response.data;
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van de category:",
      error
    );
  }
  return category;
}

export async function getCategoryByName(name) {
  let category = "";
  try {
    const response = await axios.get(`${BASE_URL}/categories?name=${name}`);
    category = response.data;
    if (category.length == 0) {
      return false;
    }
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van de category:",
      error
    );
  }
  return category;
}

export async function createCategory(category) {
  let newCategory = {};
  try {
    const response = await axios.post(`${BASE_URL}/categories`, category);
    newCategory = response.data;
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het aanmaken van de category:",
      error
    );
  }
  return newCategory;
}
