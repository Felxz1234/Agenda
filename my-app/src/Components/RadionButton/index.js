import React from 'react'
import Radio from '@mui/material/Radio';
import './style.css'

function RadioButton({selectedValue,handleChange}){

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <div className='RadioOptions'>
      <Radio
        checked={selectedValue === 'all'}
        onChange={e=>handleChange(e.target)}
        value="all"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <span>Todos</span>
      <Radio
        size='small'
        checked={selectedValue === 'true'}
        onChange={e=>handleChange(e.target)}
        value="true"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
      <span>prioridades</span>
      <Radio
        checked={selectedValue === 'false'}
        onChange={e=>handleChange(e.target)}
        value="false"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
      />
      <span>Normal</span>
    </div>
  );
}


export default RadioButton
