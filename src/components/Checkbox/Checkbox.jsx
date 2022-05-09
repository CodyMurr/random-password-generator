import { capitalize } from "../../utilities/helper";
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState } from "react";
import './Checkbox.css'


export default function Checkbox({ name, value, handleAddParam, handleDeleteParam, powered, setPowered }) {
    const [isChecked, setIsChecked] = useState(false);

    function handleClick(e) {
        setIsChecked(!isChecked);
        setPowered(!powered)
    }
    return <div className="container-check flex">
        <section className=" flex Checkbox" onClick={handleClick}>
            <h2 style={{textDecoration: powered ? 'none' : 'line-through'}}>Include {capitalize(name)}</h2>
            <span>

            {!isChecked ? <FaToggleOff size={70} style={{color: '#7D2636'}} onClick={() => handleAddParam(value)} /> : <FaToggleOn size={70} style={{color: '#7D2636'}} onClick={() => handleDeleteParam(value)} /> }
            </span>
        </section>
    </div>
}
