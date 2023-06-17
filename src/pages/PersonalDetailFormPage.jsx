import React from "react";
import PersonalDetailForm from "../components/forms/PersonalDetailForm";

const PersonalDetailFormPage = () => {
  return (
    <div className="w-[80%] mx-auto my-4">
      <h2 className="text-2xl font-medium py-4">Profile</h2>
      <PersonalDetailForm />
    </div>
  );
};

export default PersonalDetailFormPage;
