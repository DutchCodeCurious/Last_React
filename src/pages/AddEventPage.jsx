import React from "react";
import { Form } from "../components/Form/Form";
import { getCategoryByName } from "../Api/categories";

export const AddEventPage = () => {
  console.log("Render AddEventPage");
  let test = getCategoryByName("sports");
  //console.log(test);
  return (
    <div>
      <h1>Add Event Page</h1>
      <Form />
    </div>
  );
};
