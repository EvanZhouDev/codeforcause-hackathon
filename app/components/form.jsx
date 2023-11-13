'use client'

import Icon from "./icon.jsx"
import { useState } from "react"

function Form({ children }) {
    return (
        <form class="space-y-4 ml-10">
            {children}
        </form>
    )
}

Form.PasswordInput = function PasswordInput({ title = "Password", placeholder = "Enter password..." }) {
    return (
        <div>
            <label class="label">
                <span class="text-base label-text">{title}</span>
            </label>
            <input type="password" placeholder={placeholder}
                class="w-full input input-bordered border-primary" />
        </div>
    )
}

Form.TextInput = function TextInput({ title = "Text", placeholder = "Enter text..." }) {
    return (
        <div>
            <label class="label">
                <span class="text-base label-text">{title}</span>
            </label>
            <input type="text" placeholder={placeholder}
                class="w-full input input-bordered border-primary" />
        </div>
    )
}

Form.Dropdown = function Dropdown({ title = "Dropdown", elements = ["Alice", "Bob"] }) {
    let [selected, setSelected] = useState(0);

    return (
        <div className="dropdown w-full">
            <label class="label">
                <span class="text-base label-text">{title}</span>
            </label>
            <label tabindex="0" class="btn w-full flex justify-start bg-secondary border-primary hover:bg-secondary hover:border-secondary">
                <Icon.Outlined name="chevronDown" />
                {elements[selected]}
            </label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow rounded-box w-full mt-1 bg-neutral">
                {elements.map((element, index) => {
                    return (
                        <li>
                            <a className={`w-full hover:bg-secondary ${index === selected && "menu-selection-active"}`}
                                onClick={() => setSelected(index)}>
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
    return (
        <button class="btn btn-primary w-full">
            {title}
        </button>
    )
}

export default Form;