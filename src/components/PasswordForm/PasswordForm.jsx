import { charObj } from "../../utilities/generator";
import { useState } from "react";
import './PasswordForm.css'
import Slider from "../Slider/Slider";
import Checkbox from "../Checkbox/Checkbox";

export default function PasswordForm() {
    const chars = Object.keys(charObj);
    const [length, setLength] = useState({
        min: 5,
        max: 30,
        value: 5
    });
    const [passParams, setPassParams] = useState([]);
    
    function editParameters(param) {
        if (!passParams.includes(param)) {
            setPassParams([
                ...passParams,
                param
            ]);
        } else {
            setPassParams([
                ...passParams.filter(p => p !== param)
            ]);
        }
    } 

    function handleChange(e) {
        e.preventDefault();
        setLength({
            ...length,
            value: e.target.value
        });
    }
    const opts = chars.map((c) => <Checkbox name={c} value={charObj[c]} key={c} editParameters={editParameters} />)
return (
    <form className="PasswordForm flex col">
        <h2>Length: {length.value}</h2>
        <span className="flex minMax">
            {length.min} 
            <Slider length={length} handleChange={handleChange} />
            {length.max} 
        </span>
        {opts}
        <button type="submit">Generate</button>
    </form>
    );
}