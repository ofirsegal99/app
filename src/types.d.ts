export type input = {
    type: age | email | text,
    isVarified : boolean,
    label?:string,
}

type age = {
    state:'number',
    value:number,
}

type email = {
    state:'email',
    value:string,
}

type text = {
    state:'text',
    value:string,
}

type checkbox = {
    state:'checkbox',
    value:boolean,
}

export type form = input[];