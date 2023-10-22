import React from 'react';
import PropTypes from 'prop-types';
import InputIcon from './InputIcon';

export default function Input({ type, placeholder, customClass, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20 dark:bg-gray-600">
      <input
        type={type}
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
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  customClass: '',
};