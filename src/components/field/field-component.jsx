import React, { useState } from 'react';
import NumberButton from '../numberButton/numberButton-component'
import OperationButton from '../operationButton/operationButton-component'
import ClearButton from '../clearButton/clearButton-component'
import SubmitButton from '../submitButton/submitButton-component'
const Field = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [calculatedValue, setCalculatedValue] = useState(''); // Add this line


  const updateField = (value) => {
    setCurrentValue(currentValue + value);
  };

  const clearField = () => {
    setCurrentValue('');
  };

  const submit = async() => {
    // perform pemdas on input
    // setCalculatedValue(4);
    console.log(currentValue)
    const data = {currentValue}
    try {
      const response = await fetch('https://zvcz2xe5bwzfzdozd2mxazfcfu0mcxad.lambda-url.us-east-1.on.aws/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const result = response.json();
      // Update your UI with the received result (e.g., display it in a field)
      setCalculatedValue(currentValue)
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, like displaying an error message to the user
    }

    
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
      <SubmitButton onClick={submit}/>
      <input type="text" value={calculatedValue} readOnly />

    </div>
  );
};

export default Field;