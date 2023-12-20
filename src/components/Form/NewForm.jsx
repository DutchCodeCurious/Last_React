import { Formik, Form, useField } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useActiveUser } from "../../context/activeUser";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

const NewForm = () => {
  const { activeUser } = useActiveUser();

  return (
    <>
      <h1>Event</h1>
      <Formik
        initialValues={{}}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(200, "Must be 100 characters or less")
            .required("Required"),
          image: Yup.string().url("Must be a valid url").required("Required"),
          location: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          startTime: Yup.string().required("Required"),
          endTime: Yup.string().required("Required"),
          categoryIds: Yup.array()
            .min(1, "Must be at least one category")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            console.log("hello");
          }, 400);
        }}
      >
        <Form type="submit">
          <MyTextInput
            label="Title"
            name="title"
            type="text"
            placeholder="Title"
          />
          <MyTextInput
            label="Description"
            name="description"
            type="text"
            placeholder="Description"
          />
          {/** 
          <MyTextInput label="Image" name="image" type="file" />
          */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default NewForm;
