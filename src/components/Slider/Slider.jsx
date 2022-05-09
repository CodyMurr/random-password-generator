import './Slider.css'

export default function Slider({ length, handleChange, charCt }) {
    
    return <div className="container-slide flex">
        <input type="range" className="Slider" name='length' value={charCt} min={length.min} max={length.max} step='1' onChange={handleChange} />
    </div>
}