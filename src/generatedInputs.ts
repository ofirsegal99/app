import {form} from './types'
export const exampleGeneratedForm:form = [
    {
        type: {
            state:'number',
            value:25
        },
        isVarified: false,
        label:'Age'
    },
    {
        type: {
            state:'email',
            value:'example@email.com'
        },
        isVarified: false,
        label:'Email'
    },
    {
        type: {
        state:'text',
        value: 'Ofir'
        },
        isVarified: false,
        label:'Name'
    }
];