import React from 'react';
import PropTypes from 'prop-types';

function Digit({ number, onAction }) {
  return (
    <button className="digit" type="button" onClick={onAction}>
      {number}
    </button>
  );
}
Digit.propTypes = {
  number: PropTypes.number.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default Digit;
