import React, { FC, HtmlHTMLAttributes, InputHTMLAttributes } from 'react'
import './Input.css'
import { input } from '../../types';
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    input:input;
}


const Input = ({input,...props}:InputProps) => {
  return (
    <div data-validate={input.isVarified} className='input'>
        {
         !!input.label &&   <label htmlFor={input.label}>
            {input.label}
        </label>
        }
        <input className='inputChild' type={input.type.state} {...props}/>
    </div>
  )
}

export default Input