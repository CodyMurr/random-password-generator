import { useState } from 'react';
import './Settings.css';

export default function Settings({ length, setLength, toggleModal }) {
	const [formData, setFormData] = useState({
		min: length.min,
		max: length.max,
	});
	function handleChange(e) {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		setLength(formData);
		setTimeout(() => {
			toggleModal();
		}, 500);
	}
	return (
		<form className='Settings flex col' onSubmit={handleSubmit}>
			<label className='flex col'>
				Min. Length:
				<input
					type='number'
					name='min'
					value={formData.min}
					onChange={handleChange}
				/>
			</label>
			<label className='flex col'>
				Max. Length:
				<input
					type='number'
					name='max'
					value={formData.max}
					onChange={handleChange}
				/>
			</label>
			<section className='btns flex col'>
				<button type='submit'>Save</button>
				<p className='cancel flex' onClick={toggleModal}>
					cancel
				</p>
			</section>
		</form>
	);
}
