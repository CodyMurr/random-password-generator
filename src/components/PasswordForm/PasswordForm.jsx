import { charObj } from "../../utilities/generator";
import { useState } from "react";
import {FaCog} from 'react-icons/fa'
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
    const [powered, setPowered] = useState(false)
    
    function handleAddParam(param) {
        setPassParams([...passParams, param])
        console.log(passParams)
    }
    function handleDeleteParam(param) {
        setPassParams([...passParams.filter(p => p !== param)])
        console.log(passParams)
    }

    function handleSubmit(e) {
        e.preventDefault();
        getPassword(passParams, charCt);
    }

    function handleChange(e) {
        e.preventDefault();
        setCharCt(e.target.value);
    }

    function clearForm(cb) {
        setCharCt(length.min);
        setPassParams([]);
    }
    const opts = chars.map((c) => <Checkbox name={c} value={charObj[c]} key={c} handleAddParam={handleAddParam} handleDeleteParam={handleDeleteParam} clearForm={clearForm} powered={powered} setPowered={setPowered} />)
return (
    <form className="PasswordForm flex col" onSubmit={handleSubmit}>
        <FaCog className="abso" size={30} color='#889696' />
        <h1>Length: {charCt}</h1>
        <span className="flex minMax">
            <h3 className="min">{length.min}</h3>
            <Slider length={length} charCt={charCt} handleChange={handleChange} />
            <h3 className="max">{length.max}</h3>
        </span>
        <p className="flex reset" onClick={() => clearForm()}>RESET</p>
        {opts}
        <button type="submit" disabled={passParams.length ? false : true}>Generate</button>
    </form>
    );
}