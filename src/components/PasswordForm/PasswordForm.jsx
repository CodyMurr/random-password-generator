import { charObj } from "../../utilities/generator";
import { useState } from "react";
import './PasswordForm.css'
import Slider from "../Slider/Slider";
import Checkbox from "../Checkbox/Checkbox";

export default function PasswordForm({getPassword}) {
    const chars = Object.keys(charObj);
    const [length, setLength] = useState({
        min: 5,
        max: 30,
    });
    const [charCt, setCharCt] = useState(5);
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

    function handleSubmit(e) {
        e.preventDefault();
        getPassword(passParams, charCt);
    }

    function handleChange(e) {
        e.preventDefault();
        setCharCt(e.target.value);
    }
    const opts = chars.map((c) => <Checkbox name={c} value={charObj[c]} key={c} editParameters={editParameters} />)
return (
    <form className="PasswordForm flex col" onSubmit={handleSubmit}>
        <h1>Length: {charCt}</h1>
        <span className="flex minMax">
            <h3 className="min">{length.min}</h3>
            <Slider length={length} charCt={charCt} handleChange={handleChange} />
            <h3 className="max">{length.max}</h3>
        </span>
        {opts}
        <button type="submit">Generate</button>
    </form>
    );
}