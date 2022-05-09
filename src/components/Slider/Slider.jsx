import './Slider.css'

export default function Slider({ length, handleChange }) {
    
    return <div className="container-slide flex">
        <input type="range" className="Slider" name='length' value={length.value} min={length.min} max={length.max} step='1' onChange={handleChange} />
    </div>
}