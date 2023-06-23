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
const districtOptions = [
  { value: "1", label: "Taplejung" },
  { value: "2", label: "Panchthar" },
  { value: "3", label: "Ilam" },
  { value: "4", label: "Jhapa" },
  { value: "5", label: "Morang" },
  { value: "6", label: "Sunsari" },
  { value: "7", label: "Dhankuta" },
  { value: "8", label: "Terhathum" },
  { value: "9", label: "Sankhuwasabha" },
  { value: "10", label: "Bhojpur" },
  { value: "11", label: "Okhaldhunga" },
  { value: "12", label: "Khotang" },
  { value: "13", label: "Solukhumbu" },
  { value: "14", label: "Udayapur" },
  { value: "15", label: "Saptari" },
  { value: "16", label: "Siraha" },
  { value: "17", label: "Dhanusha" },
  { value: "18", label: "Mahottari" },
  { value: "19", label: "Sarlahi" },
  { value: "20", label: "Sindhuli" },
  { value: "21", label: "Ramechhap" },
  { value: "22", label: "Dolakha" },
  { value: "23", label: "Sindhupalchok" },
  { value: "24", label: "Kavrepalanchok" },
  { value: "25", label: "Lalitpur" },
  { value: "26", label: "Bhaktapur" },
  { value: "27", label: "Kathmandu" },
  { value: "28", label: "Nuwakot" },
  { value: "29", label: "Rasuwa" },
  { value: "30", label: "Dhading" },
  { value: "31", label: "Makwanpur" },
  { value: "32", label: "Rautahat" },
  { value: "33", label: "Bara" },
  { value: "34", label: "Parsa" },
  { value: "35", label: "Chitwan" },
  { value: "36", label: "Gorkha" },
  { value: "37", label: "Lamjung" },
  { value: "38", label: "Tanahun" },
  { value: "39", label: "Syangja" },
  { value: "40", label: "Kaski" },
  { value: "41", label: "Manang" },
  { value: "42", label: "Mustang" },
  { value: "43", label: "Parbat" },
  { value: "44", label: "Baglung" },
  { value: "45", label: "Gulmi" },
  { value: "46", label: "Palpa" },
  { value: "47", label: "Nawalpur" },
  { value: "48", label: "Rupandehi" },
  { value: "49", label: "Kapilvastu" },
  { value: "50", label: "Arghakhanchi" },
  { value: "51", label: "Pyuthan" },
  { value: "52", label: "Rolpa" },
  { value: "53", label: "Rukum (East)" },
  { value: "54", label: "Salyan" },
  { value: "55", label: "Dang" },
  { value: "56", label: "Banke" },
  { value: "57", label: "Bardiya" },
  { value: "58", label: "Surkhet" },
  { value: "59", label: "Dailekh" },
  { value: "60", label: "Jajarkot" },
  { value: "61", label: "Dolpa" },
  { value: "62", label: "Humla" },
  { value: "63", label: "Kalikot" },
  { value: "64", label: "Mugu" },
  { value: "65", label: "Jumla" },
  { value: "66", label: "Sankhuwasabha" },
  { value: "67", label: "Bajhang" },
  { value: "68", label: "Bajura" },
  { value: "69", label: "Achham" },
  { value: "70", label: "Doti" },
  { value: "71", label: "Kailali" },
  { value: "72", label: "Kanchanpur" },
  { value: "73", label: "Dadeldhura" },
  { value: "74", label: "Baitadi" },
  { value: "75", label: "Darchula" },
  { value: "76", label: "Kanchanpur" },
  { value: "77", label: "Dadeldhura" },
];

const provinceOptions = [
  { value: "1", label: "Province 1" },
  { value: "2", label: "Province 2" },
  { value: "3", label: "Province 3" },
  { value: "4", label: "Province 4" },
  { value: "5", label: "Province 5" },
  { value: "6", label: "Province 6" },
  { value: "7", label: "Province 7" },
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
    dateOfBirth: Yup.date().required("Required"),
    gender: Yup.string().required("Required"),
    bloodGroup: Yup.string().required("Required"),
    guardianName: Yup.string().required("Required"),
    tprovince: Yup.string().required("Required"),
    tdistrict: Yup.string().required("Required"),
    tmunicipality: Yup.string().required("Required"),
    twardNo: Yup.string().required("Required"),
    tcity: Yup.string().required("Required"),
    pprovince: Yup.string().required("Required"),
    pdistrict: Yup.string().required("Required"),
    pmunicipality: Yup.string().required("Required"),
    pwardNo: Yup.string().required("Required"),
    pcity: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="w-full bg-slate-100 px-3 lg:px-8 mb-4 py-3 rounded-lg">
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
              id="guardian"
              name="guardian"
              label="guardian"
              options={[
                { value: "father", label: "Father" },
                { value: "mother", label: "Mother" },
              ]}
            />
          </div>
          <h2 className="text-2xl font-medium mb-4 mt-3">Permanent Address</h2>
          <div className="grid grid-cols-2 gap-x-5">
            <TextInput
              type="select"
              id="province"
              name="pprovince"
              label="Province"
              options={provinceOptions}
            />
            <TextInput
              type="select"
              id="district"
              name="pdistrict"
              label="District"
              options={districtOptions}
            />
            <TextInput
              type="text"
              id="municipality"
              name="pmunicipality"
              label="(Rural) Municipality"
            />
            <TextInput type="text" id="wardNo" name="pwardNo" label="Ward No." />
            <TextInput type="text" id="city" name="pcity" label="City" />
            <TextInput type="text" id="tole" name="tole" label="Tole" />
          </div>
          <h2 className="text-2xl font-medium mb-4 mt-3">Temporary Address</h2>
          <div className="grid grid-cols-2 gap-x-5">
            <TextInput
              type="select"
              id="province"
              name="tprovince"
              label="Province"
              options={provinceOptions}
            />
            <TextInput
              type="select"
              id="district"
              name="tdistrict"
              label="District"
              options={districtOptions}
            />
            <TextInput
              type="text"
              id="municipality"
              name="tmunicipality"
              label="(Rural) Municipality"
            />
            <TextInput type="text" id="wardNo" name="twardNo" label="Ward No." />
            <TextInput type="text" id="city" name="tcity" label="City" />
            <TextInput type="text" id="tole" name="tole" label="Tole" />
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
