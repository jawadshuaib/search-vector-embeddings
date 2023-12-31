import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputIcon from './InputIcon';

export default function Input({
  value,
  type,
  placeholder,
  customClass,
  onChange,
  isLoading,
}) {
  const [inputValue, setInputValue] = useState(value);

  // This input value is provided by the props
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Update the parent component when input value changes
  // This happens when the user types in the text field
  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20 dark:bg-gray-600">
      <input
        type={type}
        value={inputValue}
        className={`${customClass} block w-full flex-1 font-medium text-lg py-2 px-3 text-slate-800 focus:outline-none dark:text-slate-100 dark:bg-gray-600`}
        placeholder={`${placeholder}`}
        onChange={(e) => handleChange(e)}
      />
      <InputIcon isLoading={isLoading} />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  customClass: PropTypes.string,
  value: PropTypes.string,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  customClass: '',
  value: '',
  isLoading: false,
};
