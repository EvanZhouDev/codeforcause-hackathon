'use client'

import Icon from "./icon.jsx"
import { useState, useRef } from "react"

function Form({ children }) {
    return (
        <form class="space-y-4 ml-10">
            {children}
        </form>
    )
}

Form.PasswordInput = function PasswordInput({ title = "Password", placeholder = "Enter password...", id }) {
    return (
        <div>
            <label class="label">
                <span class="text-base label-text">{title}</span>
            </label>
            <input type="password" id={id} placeholder={placeholder}
                class="w-full input input-bordered border-primary form-input" />
        </div>
    )
}

Form.TextInput = function TextInput({ title = "Text", placeholder = "Enter text...", id }) {
    return (
        <div>
            <label class="label">
                <span class="text-base label-text">{title}</span>
            </label>
            <input type="text" id={id} placeholder={placeholder}
                class="w-full input input-bordered border-primary form-input" />
        </div>
    )
}

Form.Dropdown = function Dropdown({ title = "Dropdown", elements = ["Alice", "Bob"], id }) {
    let [selected, setSelected] = useState(0);

    return (
        <div className="dropdown w-full">
            <label class="label">
                <span class="text-base label-text">{title}</span>
            </label>
            <label tabindex="0" class="btn w-full flex justify-start bg-secondary border-primary hover:bg-secondary hover:border-secondary form-input" id={id}>
                <Icon.Outlined name="chevronDown" />
                {elements[selected]}
            </label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow rounded-box w-full mt-1 bg-neutral">
                {elements.map((element, index) => {
                    return (
                        <li key={index} className="py-0.5">
                            <a className={`w-full hover:bg-secondary ${index === selected && "menu-selection-active"}`}
                                onClick={() => {
                                    setSelected(index);
                                    document.activeElement.blur();
                                }}>
                                {element}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

Form.Submit = function Submit({ title = "Submit" }) {
    const buttonRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formInputs = buttonRef.current.closest('form').querySelectorAll('.form-input');
        const formInputsDict = Array.from(formInputs).reduce((dict, formInput) => {
            dict[formInput.id] = formInput.value || formInput.textContent;
            return dict;
        }, {});

        console.log(formInputsDict);
    };

    return (
        <button class="btn btn-primary w-full" onClick={handleSubmit} ref={buttonRef}>
            {title}
        </button>
    );
};

export default Form;
