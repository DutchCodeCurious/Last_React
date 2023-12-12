import React, { useReducer, useEffect, useState } from "react";
import { formReducer, INITIAL_STATE } from "./FormReducer";
import { useActiveUser } from "../../context/activeUser";
import { getCategories, createCategory } from "../../Api/categories";
import { createEvent } from "../../Api/events";

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [categories, setCategories] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [reload, setReload] = useState(false);

  const { activeUser } = useActiveUser();

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
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
        updatedCategories = [...prevState, value];
      }
      if (!checked) {
        updatedCategories = prevState.filter((category) => category !== value);
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
      payload: { createdBy: activeUser.id, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(state.events);
  };

  //console.log(state);
  return (
    <>
      <h1>Form</h1>
      {activeUser ? (
        <>
          <h1>Ingelogd</h1>
          <p>As: {activeUser.name}</p>
        </>
      ) : (
        <>
          <h1>Niet ingelogd</h1>
          <p>Log in om een evenement toe te voegen </p>
        </>
      )}
      <div className="form">
        <form className="event_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titel"
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Image"
            name="image"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            placeholder="Start Time"
            name="startTime"
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            placeholder="End Time"
            name="endTime"
            onChange={handleChange}
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
