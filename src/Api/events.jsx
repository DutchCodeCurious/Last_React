import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getEvents() {
  let events = [];
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    events = response.data;
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van de events:",
      error
    );
  }
  return events;
}

export async function getEvent(id) {
  let event = {};
  try {
    const response = await axios.get(`${BASE_URL}/events/${id}`);
    event = response.data;
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van het event:",
      error
    );
  }
  return event;
}

export async function getEventByUser(userId) {
  let events = [];
  try {
    const response = await axios.get(`${BASE_URL}/events?createdBy=${userId}`);
    events = response.data;
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van de events:",
      error
    );
  }
  return events;
}

export async function createEvent(event) {
  try {
    const response = await axios.post(`${BASE_URL}/events`, event);
    console.log("Post is made");
    console.log(response);
    return { success: true, data: response.data.id };
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het aanmaken van het event:",
      error
    );
    return { success: false, error: error.message };
  }
}

export async function updateEvent(event) {
  try {
    const response = await axios.put(`${BASE_URL}/events/${event.id}`, event);
    console.log("Put is made");
    console.log(response);
    return { success: true, data: response.data.id };
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het updaten van het event:",
      error
    );
    return { success: false, error: error.message };
  }
}

export async function deleteEvent(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/events/${id}`);
    console.log("Delete is made");
    console.log(response);
    return { success: true };
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het deleten van het event:",
      error
    );
    return { success: false, error: error.message };
  }
}
