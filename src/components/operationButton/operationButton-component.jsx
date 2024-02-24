import React from 'react';

const operationButton = ({ operation, onClick }) => {
  return (
    <button onClick={() => onClick(operation)}>{operation}</button>
  );
};

export default operationButton;