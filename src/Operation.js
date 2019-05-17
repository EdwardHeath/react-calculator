import React from 'react';
import PropTypes from 'prop-types';

function Operation({ name, id, onAction, className }) {
  return (
    <button
      id={id}
      className={`operation ${className}`}
      type="button"
      onClick={onAction}
    >
      {name}
    </button>
  );
}
Operation.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onAction: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Operation;
