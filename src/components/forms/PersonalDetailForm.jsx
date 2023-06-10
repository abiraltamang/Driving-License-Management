import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PersonalDetailForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium mb-1">
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage name="firstName" component="p" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium mb-1">
              Last Name
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage name="lastName" component="p" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium mb-1">
              Address
            </label>
            <Field
              as="textarea"
              id="address"
              name="address"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage name="address" component="p" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone Number
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage name="phone" component="p" className="text-red-500" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalDetailForm;
