import React from 'react';
import { useField, ErrorMessage } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label htmlFor={props.id || props.name} className="block font-medium mb-1">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`border border-gray-300 rounded px-3 py-2 w-full ${
          meta.touched && meta.error ? 'border-red-500' : ''
        }`}
      />
      <ErrorMessage name={field.name} component="p" className="text-red-500" />
    </div>
  );
};

export default TextInput;
