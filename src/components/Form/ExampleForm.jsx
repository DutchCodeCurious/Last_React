import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, setFieldValue } from "formik";
import * as Yup from "yup";
import { useActiveUser } from "../../context/activeUser";
import { getCategories } from "../../Api/categories";
import CategorieModal from "./CategorieModal";
import FileForm from "./FileForm";
import { MyTextInput, MyCheckbox, MyDateInput, MyFileInput } from "./MyInputs";

export const ExampleForm = ({ event }) => {
  const editEvent = event;
  const { activeUser } = useActiveUser();
  const [categories, setCategories] = useState([]);
  const [reload, setReload] = useState(false);

  const initialValues = editEvent
    ? { ...editEvent }
    : {
        createdBy: activeUser.id,
        title: "",
        description: "",
        image: "",
        location: "",
        startTime: "",
        endTime: "",
        categoryIds: [],
      };

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, [reload]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    const categoryId = parseInt(value, 10);

    if (initialValues.categoryIds.includes(categoryId)) {
      setFieldValue(
        "categoryIds",
        initialValues.categoryIds.filter((id) => id !== categoryId)
      );
    } else {
      setFieldValue("categoryIds", [...initialValues.categoryIds, categoryId]);
    }
  };

  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(200, "Must be 20 characters or less")
            .required("Required"),
          image: Yup.string().required("Required"),
          location: Yup.string().required("Required"),
          startTime: Yup.date().required("Required"),
          endTime: Yup.date().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="title"
            name="title"
            type="text"
            placeholder="Event"
          />

          <MyTextInput
            label="description"
            name="description"
            type="text"
            placeholder="description"
          />

          {!editEvent ? (
            <MyFileInput label="Image" name="image" type="file" />
          ) : (
            <FileForm />
          )}

          <MyTextInput
            label="location"
            name="location"
            type="text "
            placeholder="location"
          />

          <MyDateInput
            label="Start Time"
            name="startTime"
            type="datetime-local"
          />
          <MyDateInput label="End Time" name="endTime" type="datetime-local" />

          {categories.map((category, index) => (
            <MyCheckbox
              name="categoryIds"
              value={category.id}
              label={category.name}
              key={index}
              checked={
                editEvent && initialValues.categoryIds.includes(category.id)
              }
              onChange={handleCheckboxChange}
            />
          ))}
          <CategorieModal setReload={setReload} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
