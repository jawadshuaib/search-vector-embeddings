import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../ui/Paragraph';
import Radio from '../../ui/Radio';
import { useDispatch } from 'react-redux';
import { setMethod } from './searchSlice';
import { defaults } from '../../utils/settings';

export default function Toggle({ name }) {
  const methods = defaults.methods;
  const [selection, setSelection] = useState(methods.at(0));
  const dispatch = useDispatch();

  const handleSelection = (method) => {
    setSelection(method);
    dispatch(setMethod(method));
  };

  return (
    <>
      <Paragraph>Toggle to compare results.</Paragraph>

      <div className="grid gap-1 md:grid-cols-2 mb-3">
        {methods.map((method) => (
          <Radio
            key={method}
            name={name}
            value={method}
            checked={selection === method ? true : false}
            onChange={handleSelection}
          >
            Search using {method}
          </Radio>
        ))}
      </div>
    </>
  );
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
};
