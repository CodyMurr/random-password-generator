import { capitalize } from "../../utilities/helper";
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState } from "react";
import './Checkbox.css'


export default function Checkbox({ name, value, editParameters}) {
    const [isChecked, setIsChecked] = useState(false);

    function handleClick(e) {
        setIsChecked(!isChecked);
        if (isChecked) editParameters(value);
    }
    return <div className="container-check flex">
        <section className=" flex Checkbox" onClick={handleClick}>
            <h2>Include {capitalize(name)}</h2>
            <span>

            {isChecked ? <FaToggleOn size={40} /> : <FaToggleOff size={40} /> }
            </span>
        </section>
    </div>
}
