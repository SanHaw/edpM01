import React from 'react'

type CheckboxProps = {
    id: string;
  };

const Checkbox = ({ id }: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper">
        <input type="checkbox" id={id}/>
        <label htmlFor={id} className="check-box" />
    </div>
  )
}

export default Checkbox