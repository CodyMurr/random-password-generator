import { capitalize } from "../../utilities/helper";
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState } from "react";


export default function Checkbox({ name, value}) {
    const [isChecked, setIsChecked] = useState(false);

    function handleClick(e) {
        setIsChecked(!isChecked);

    }
    return <div className="container">
        <section className=" flex Checkbox" onClick={handleClick}>
            <h2>Include {capitalize(name)}</h2>
            {isChecked ? <FaToggleOn size={40} /> : <FaToggleOff size={40} /> }
        </section>
    </div>
}
