import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; 
import { IoSearchOutline } from "react-icons/io5";
import s from "./SearchBar.module.css";

const validationSchema = Yup.object({
  query: Yup.string()
    .required("Search query is required") 
    .min(3, "Search query must be at least 3 characters"),
});

interface SearchBarProps {
  setQuery: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values: { query: string }) => {
    console.log(values);
    setQuery(values.query);
  };

  return (
    <header className={s.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} 
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div className={s.inputWrapper}>
              <Field
                name="query"
                className={s.input}
                type="search"
                placeholder="Search images and photos"
              />
            //   {errors.query && touched.query ? (
            //     <div className={s.error}>{errors.query}</div>  validation error
            //   ) : null}
              <button className={s.btn}type="submit">
                <IoSearchOutline />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;