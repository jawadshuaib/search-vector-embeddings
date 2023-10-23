import React from 'react';
import PropTypes from 'prop-types';

export default function Radio({ children, name, value, checked, onChange }) {
  function handleChange() {
    onChange(value);
  }

  return (
    <label
      className={`${
        checked
          ? `bg-green-300 border-white dark:bg-slate-100`
          : `border-gray-200 dark:border-gray-700`
      } flex items-center pl-4 border-2 rounded cursor-pointer`}
    >
      <input
        onChange={() => handleChange(value)}
        checked={checked}
        id={`bordered-radio-${value}`}
        type="radio"
        value={value}
        name={name}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
      />
      <div
        className={`${
          checked && `dark:text-black`
        } w-full py-4 ml-2 text-sm font-medium text-black dark:text-gray-300`}
      >
        {children}
      </div>
    </label>
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
