import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";

const bloodGroupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

const nearbyPlacesOptions = [
  { value: "Park", label: "Park" },
  { value: "Restaurant", label: "Restaurant" },
  { value: "Shopping Mall", label: "Shopping Mall" },
  { value: "Hospital", label: "Hospital" },
];

const PersonalDetailForm = () => {
  const initialValues = {
    firstName: "",
    guardianName: "",
    middleName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    address: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="w-full bg-slate-100 px-8 mb-4 py-3 rounded-lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2 className="text-2xl font-medium mb-4">Applicant Name</h2>
          <div className="grid grid-cols-2 gap-x-5">
            <TextInput
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
            />
            <TextInput
              type="text"
              id="middleName"
              name="middleName"
              label="Middle Name"
            />
            <TextInput
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
            />
          </div>
          <h2 className="text-2xl font-medium mb-4 mt-3">Personal Details</h2>

          <div className="grid grid-cols-2 gap-x-5">
            <TextInput
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date of Birth"
            />
            <TextInput
              type="select"
              id="gender"
              name="gender"
              label="Gender"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
            />
            <TextInput
              type="select"
              id="bloodGroup"
              name="bloodGroup"
              label="Blood Group"
              options={bloodGroupOptions}
            />
            <TextInput
              type="select"
              id="nearbyPlaces"
              name="nearbyPlaces"
              label="Nearby Places"
              options={nearbyPlacesOptions}
            />
          </div>
          <h2 className="text-2xl font-medium mb-4 mt-3">
            Guardian Information
          </h2>
          <div className="grid grid-cols-2 gap-x-5">
            <TextInput
              type="text"
              id="guardianName"
              name="guardianName"
              label="Name"
            />
            <TextInput
              type="select"
              id="gender"
              name="gender"
              label="Gender"
              options={[
                { value: "father", label: "Father" },
                { value: "mother", label: "Mother" },
              ]}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalDetailForm;
