import React from 'react';

const operationButton = ({ operation, onClick }) => {
  return (
    <button onClick={() => onClick(operation)}>Enter</button>
  );
};

export default operationButton;