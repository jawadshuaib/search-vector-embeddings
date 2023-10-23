import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../ui/Paragraph';
import Radio from '../../ui/Radio';

export default function Toggle({ name }) {
  const options = ['vectors', 'sql'];
  const [selection, setSelection] = useState(options.at(0));

  const handleSelection = (val) => {
    setSelection(val);
  };

  return (
    <>
      <Paragraph>Toggle to compare results.</Paragraph>

      <div className="grid gap-1 md:grid-cols-2 mb-3">
        {options.map((option) => (
          <Radio
            key={option}
            name={name}
            value={option}
            checked={selection === option ? true : false}
            onChange={handleSelection}
          >
            Search using {option}
          </Radio>
        ))}
      </div>
    </>
  );
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
};
