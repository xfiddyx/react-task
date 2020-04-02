import React from 'react';

const PersonalityList = props => {
  console.log(props.personality);
  return (
    <h2>
      <label>Select Personality Type: </label>
      <select id='myList'>
        <option value=''> </option>
        <option value={props.personality[0]}>{props.personality[0]}</option>
        <option value={props.personality[1]}>{props.personality[1]}</option>
        <option value={props.personality[2]}>{props.personality[2]}</option>
        <option value={props.personality[3]}>{props.personality[3]}</option>
        <option value={props.personality[4]}>{props.personality[4]}</option>
        <option value={props.personality[5]}>{props.personality[5]}</option>
        <option value={props.personality[6]}>{props.personality[6]}</option>
        <option value={props.personality[7]}>{props.personality[7]}</option>
      </select>
    </h2>
  );
};

export default PersonalityList;
