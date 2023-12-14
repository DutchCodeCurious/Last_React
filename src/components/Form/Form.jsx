import React, { useReducer, useEffect, useState } from "react";
import { formReducer, INITIAL_STATE } from "./FormReducer";
import { useActiveUser } from "../../context/activeUser";
import { getCategories, createCategory } from "../../Api/categories";
//import { createEvent, updateEvent } from "../../Api/events";
//import { useNavigate } from "react-router-dom";
//import { showSuccessToast, showErrorToast } from "../toastNotifications";

export const Form = ({ event, onSubmit }) => {
  const eventToEdit = event;
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [categories, setCategories] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [reload, setReload] = useState(false);
  // const navigate = useNavigate();
  const { activeUser } = useActiveUser();

  useEffect(() => {
    if (eventToEdit) {
      dispatch({
        type: "UPDATE_EVENTS",
        payload: eventToEdit,
      });
    }
  }, [eventToEdit]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
    dispatch({
      type: "UPDATE_EVENTS",
      payload: {
        createdBy: activeUser.id,
      },
    });
  }, [reload]);

  const handleCreateCategory = (e) => {
    e.preventDefault();
    setNewCategory(e.target.value);
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    createCategory({ name: newCategory }).then(() => setReload(!reload));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setCheckedCategories((prevState) => {
      let updatedCategories;

      if (checked) {
        console.log("checked");
        updatedCategories = [...prevState, parseInt(value)];
      }
      if (!checked) {
        updatedCategories = prevState.filter(
          (category) => category !== parseInt(value)
        );
      }

      dispatch({
        type: "UPDATE_EVENTS",
        payload: {
          categoryIds: updatedCategories,
        },
      });
      return updatedCategories;
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_EVENTS",
      payload: {
        ...state.events,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state.events);
  };

  return (
    <>
      <h1>Form</h1>
      <div className="form">
        <form className="event_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titel"
            name="title"
            value={state.events.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={state.events.description}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={state.events.image}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={handleChange}
            value={state.events.location}
          />
          <input
            type="datetime-local"
            placeholder="Start Time"
            name="startTime"
            onChange={handleChange}
            value={state.events.startTime}
          />
          <input
            type="datetime-local"
            placeholder="End Time"
            name="endTime"
            onChange={handleChange}
            value={state.events.endTime}
          />
          <div className="category-input">
            <h2>Categories</h2>
            {categories.map((category, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    name="categoryIds"
                    value={category.id}
                    onChange={handleCheckboxChange}
                    {...(eventToEdit &&
                      state.events.categoryIds.includes(category.id) && {
                        checked: true,
                      })}
                  />
                  {category.name}
                </label>
              </div>
            ))}
            <div className="category-input">
              <input
                type="text"
                name="name"
                placeholder="sports"
                value={newCategory}
                onChange={handleCreateCategory}
              ></input>
              <button onClick={handleAddButton}>add</button>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
