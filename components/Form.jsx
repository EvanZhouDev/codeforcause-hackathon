"use client"

import React from 'react';
import { Formik } from 'formik';

const Form = ({ initialValues, validate, onSubmit, children }) => (
    <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
        }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
                {React.Children.map(children, (child) => {
                    {/* if (child.type === Form.TextInput) { */ }
                    console.log(child.props.formid)
                    return (
                        <div>
                            {React.cloneElement(child, { handleChange, handleBlur, value: values[child.props.formid] })}

                            {errors[child.props.formid] && touched[child.props.formid] && errors[child.props.formid]}
                        </div>
                    )
                })}
                <button class="btn btn-primary" disabled={isSubmitting} type="submit">
                    Submit
                </button>
            </form>
        )}
    </Formik>
);


Form.PasswordInput = function PasswordInput({ title = "Password", placeholder = "Enter password...", formid, handleChange, value }) {
    return (
        <div>
            <label class="label">
                <span class="text-base label-text">{title}</span>
            </label>
            <input type="password" value={value} onChange={handleChange} placeholder={placeholder} name={formid}
                class="w-full input input-bordered border-primary form-input" />
            {/* {errors.email && touched.email && errors.email} */}
        </div>
    )
}

Form.TextInput = function TextInput({ title = "Text", placeholder = "Enter text...", formid, handleChange, handleBlur, value }) {
    return (
        <div>
            <label class="label">
                <span class="text-base label-text">{title}</span>
            </label>
            <input type="text" value={value} onChange={handleChange} onblur={handleBlur} name={formid} placeholder={placeholder}
                class="w-full input input-bordered border-primary form-input" />
        </div>
    )
}


export default Form;