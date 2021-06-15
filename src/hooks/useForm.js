import React, { useState } from 'react'

export function useForm(initialFValues) {

    const [values, setValues] = useState(initialFValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setValues({
            ...values,
            [name]: value
        })
    }


    return {
        values,
        setValues,
        handleInputChange,

    }
}

export function Form(props) {
    const { children, ...other } = props;

    return (
        <form autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

