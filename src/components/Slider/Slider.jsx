import './Slider.css';
import { useContext } from 'react';
import PasswordContext from '../../context/PasswordContext';

export default function Slider() {
	const { charCt, lengthValues, adjustLength } =
		useContext(PasswordContext);

	function handleSlider(e) {
		e.preventDefault();
		adjustLength(e.target.value);
	}
	return (
		<div className='container-slide flex'>
			<input
				type='range'
				className='Slider'
				name='charCt'
				value={charCt}
				min={lengthValues.min}
				max={lengthValues.max}
				step='1'
				onChange={handleSlider}
			/>
		</div>
	);
}
