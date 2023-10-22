import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputIcon from './InputIcon';

export default function Input({
  value,
  type,
  placeholder,
  customClass,
  onChange,
}) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  function handleChange(e) {
    setInputValue(e.target.value);
    onChange(e.target.value);
  }
  return (
    <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20 dark:bg-gray-600">
      <input
        type={type}
        value={inputValue}
        className={`${customClass} block w-full flex-1 py-2 px-3 text-slate-100 focus:outline-none dark:bg-gray-600`}
        placeholder={`${placeholder}`}
        onChange={(e) => handleChange(e)}
      />
      <InputIcon />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  customClass: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  customClass: '',
  value: '',
};
