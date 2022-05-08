import { charObj } from "../../utilities/generator";
import { useState } from "react";

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
    const opts = chars.map((c) => <Checkbox name={c} value={charObj[c]} key={c} passParams={passParams} />)
return (
    <form className="PasswordForm flex col">
        <Slider />
        {opts}
    </form>
    );
}