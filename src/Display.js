import React from 'react';
import PropTypes from 'prop-types';

function Display({ value, id, operation }) {
  const displayValue = value + (id === 'history' ? operation : '');
  return (
    <input
      type="text"
      className="display"
      value={displayValue}
      id={id}
      disabled
    />
  );
}

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
