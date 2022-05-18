import { useContext } from 'react';
import PasswordContext from '../../context/PasswordContext';
import './Settings.css';

export default function Settings({ toggleModal }) {
	const { formData, handleChange, submitForm } =
		useContext(PasswordContext);

	function handleSubmit(e) {
		e.preventDefault();
		submitForm(toggleModal);
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
