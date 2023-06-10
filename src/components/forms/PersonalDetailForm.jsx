import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';

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
          <TextInput type="text" id="firstName" name="firstName" label="First Name" />
          <TextInput type="text" id="lastName" name="lastName" label="Last Name" />
          <TextInput type="email" id="email" name="email" label="Email Address" />
          <TextInput as="textarea" id="address" name="address" label="Address" />
          <TextInput type="text" id="phone" name="phone" label="Phone Number" />
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
