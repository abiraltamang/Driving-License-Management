import React from "react";
import { useField, ErrorMessage } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label htmlFor={props.id || props.name} className="block font-medium mb-1">
        {label}
      </label>
      {props.type === "select" ? (
        <select
          {...field}
          {...props}
          className={`border border-gray-300 bg-white rounded px-3 py-3 w-full ${
            meta.touched && meta.error ? "border-red-500" : ""
          }`}
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...field}
          {...props}
          className={`border border-gray-300 rounded px-3 py-2  w-full ${
            meta.touched && meta.error ? "border-red-500" : ""
          } ${props.type === "date" ? "" : ""}`}
        />
      )}
      <ErrorMessage name={field.name} component="p" className="text-red-500" />
    </div>
  );
};

export default TextInput;
