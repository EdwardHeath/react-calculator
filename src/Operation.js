import React from 'react';
import PropTypes from 'prop-types';

function Operation({ name, id, onAction }) {
  return (
    <button id={id} className="operation" type="button" onClick={onAction}>
      {name}
    </button>
  );
}
Operation.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onAction: PropTypes.func.isRequired,
};

export default Operation;
