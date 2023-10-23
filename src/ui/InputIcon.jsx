import React from 'react';
import PropTypes from 'prop-types';

export default function InputIcon({ isLoading }) {
  return (
    <span className="m-1 inline-flex ites-center rounded-md bg-slate-200 px-2 py-2  dark:bg-slate-800 ">
      {isLoading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 35 42"
          stroke="#fff"
        >
          <g fill="none" fillRule="evenodd">
            <script xmlns="" />
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      )}
      {!isLoading && (
        <svg
          className="text-slate-400 dark:text-slate-300"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z"
          />
        </svg>
      )}
    </span>
  );
}

InputIcon.propTypes = {
  isLoading: PropTypes.bool,
};

InputIcon.defaultProps = {
  isLoading: false,
};
