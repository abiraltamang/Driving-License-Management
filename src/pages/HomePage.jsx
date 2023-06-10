import React from "react";
import { Link } from "react-router-dom";
import ProfileDetailCard from "../components/cards/PersonalDetailCard";
import WrittenExam from "../components/cards/WrittenExam";
import CitizenshipDetail from "../components/cards/CitizenshipDetail";
import LicenseDetail from "../components/cards/LicenseDetail";
import AddCategory from "../components/cards/AddCategory";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-[90%] h-[80vh] ">
      <p className="text-2xl text-left font-medium py-3">Application Portal</p>
      <div className="grid grid-cols-4 gap-3">
        <Link to="/personaldetail">
          <ProfileDetailCard />
        </Link>
        <Link to={"/addcitizenship"}>
          <CitizenshipDetail />
        </Link>
        <Link to={"/writtenexam"}>
          <WrittenExam />
        </Link>
        <Link to={"/addlicense"}>
          <LicenseDetail />
        </Link>
        <Link to="/addcategory">
          <AddCategory />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
