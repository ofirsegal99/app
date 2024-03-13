import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import "./Form.css"
import Input from '../input/Input.tsx'
import { exampleGeneratedForm } from '../../generatedInputs.ts'
import { input, form } from '../../types'


const Form:FC = () => {
    const [form,setForm] = useState<form>(validation(exampleGeneratedForm));
    let allVarified = exampleGeneratedForm.every(item => item.isVarified);

    function inputChange(e,input:input){
        input.type.value = e.target.value;
        let newForm = [...form];
        validation(newForm)
        setForm(newForm);
    }
    function validation(currentForm: form):form {
        let validatedForm: form = currentForm.map((curr) => {
            switch (curr.type.state) {
                case 'email':
                    // standard regex for email
                    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    curr.isVarified = emailRegex.test(curr.type.value);
                    break;
                case 'number':
                    // let's say the age needs to be more than 17
                    curr.isVarified = curr.type.value > 17;
                    break;
                case 'text':
                    // let's say the text needs to be more than 3 letters
                    curr.isVarified = curr.type.value.length > 3;
                    break;
            }
            return curr;
        });
        return validatedForm;
    }
    useEffect(() => {
        validation(form)
    },[])

    function handleSubmit(){
        if(allVarified){
            alert('submited! successfully, everyhing is valid')
        }
    }
  return (
    <form onSubmit={handleSubmit} className='form'>
        {exampleGeneratedForm.map((input:input,index) => {
            return(
                        <Input value={input.type.value} onChange={(e:ChangeEvent<HTMLInputElement>) => {inputChange(e,input)}} key={index} input={input}/>
            )
        })}
        <input disabled={!allVarified} type='submit'/>
    </form>
  )
}

export default Form