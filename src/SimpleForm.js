// src/SimpleForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SimpleForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form Data:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4">
      <div>
        <label>Name: </label>
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>
      <div>
        <label>Email: </label>
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
