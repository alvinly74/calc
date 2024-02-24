import React, { useState } from 'react';
import NumberButton from '../numberButton/numberButton-component'
import OperationButton from '../operationButton/operationButton-component'
import ClearButton from '../clearButton/clearButton-component'
const Field = () => {
  const [currentValue, setCurrentValue] = useState('');

  const updateField = (value) => {
    setCurrentValue(currentValue + value);
  };

  const clearField = () => {
    setCurrentValue('');
  };

  return (
    <div>
      <input type="text" value={currentValue} readOnly />
      <NumberButton number={7} onClick={updateField} />
      <NumberButton number={8} onClick={updateField} />
      <NumberButton number={9} onClick={updateField} />
      <OperationButton operation={"+"} onClick={updateField} />
      <NumberButton number={4} onClick={updateField} />
      <NumberButton number={5} onClick={updateField} />
      <NumberButton number={6} onClick={updateField} />
      <OperationButton operation={"-"} onClick={updateField} />
      <NumberButton number={1} onClick={updateField} />
      <NumberButton number={2} onClick={updateField} />
      <NumberButton number={3} onClick={updateField} />
      <OperationButton operation={"*"} onClick={updateField} />
      <NumberButton number={0} onClick={updateField} />
      <OperationButton operation={"/"} onClick={updateField} />
      <ClearButton onClick={clearField}/> 
      {/* Add more number buttons for other digits */}
    </div>
  );
};

export default Field;