import React from 'react';
import PropTypes from 'prop-types';

function Digit({ number, onAction, id }) {
  return (
    <button className="digit" id={id} type="button" onClick={onAction}>
      {number}
    </button>
  );
}
Digit.propTypes = {
  number: PropTypes.number.isRequired,
  onAction: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default Digit;
