import React from 'react';
import PropTypes from 'prop-types';

export default function Radio({ children, name, value, checked, onChange }) {
  function handleChange() {
    onChange(value);
  }

  return (
    <div
      className={`${
        checked
          ? `bg-green-300 border-white dark:bg-slate-100`
          : `border-gray-200 dark:border-gray-700`
      } flex items-center pl-4 border-2 rounded `}
    >
      <input
        onChange={() => handleChange()}
        checked={checked}
        id="bordered-radio-x"
        type="radio"
        value={value}
        name={name}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="bordered-radio-x"
        className={`${
          checked && `dark:text-black`
        } w-full py-4 ml-2 text-sm font-medium text-black dark:text-gray-300`}
      >
        {children}
      </label>
    </div>
  );
}

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  checked: false,
  value: '',
};
