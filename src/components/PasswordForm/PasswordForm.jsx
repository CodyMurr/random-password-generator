import { charObj } from '../../utilities/generator';
import { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { CheckboxProvider } from '../../context/CheckboxContext';
import Modal from 'react-modal';
import Slider from '../Slider/Slider';
import Checkbox from '../Checkbox/Checkbox';
import Settings from '../Settings/Settings';
import './PasswordForm.css';

Modal.setAppElement('#root');

export default function PasswordForm({ getPassword }) {
	const chars = Object.keys(charObj);
	const [length, setLength] = useState({
		min: 5,
		max: 30,
	});
	const [charCt, setCharCt] = useState(5);
	const [passParams, setPassParams] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

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
		cb(false);
	}

	function toggleModal() {
		setIsOpen(!isOpen);
	}
	const opts = chars.map((c) => (
		<CheckboxProvider>
			<Checkbox
				name={c}
				value={charObj[c]}
				key={c}
				clearForm={clearForm}
			/>
		</CheckboxProvider>
	));
	return (
		<form className='PasswordForm flex col' onSubmit={handleSubmit}>
			<FaCog
				className='abso'
				size={30}
				color='#889696'
				onClick={toggleModal}
			/>
			<Modal
				className='modal flex'
				isOpen={isOpen}
				onRequestClose={toggleModal}>
				<Settings
					length={length}
					setLength={setLength}
					toggleModal={toggleModal}
				/>
			</Modal>
			<h1>
				Length: <span>{charCt}</span>
			</h1>
			<span className='flex minMax'>
				<h3 className='min'>{length.min}</h3>
				<Slider
					length={length}
					charCt={charCt}
					handleChange={handleChange}
				/>
				<h3 className='max'>{length.max}</h3>
			</span>
			<p className='reset' onClick={clearForm}>
				RESET
			</p>
			{opts}
			<button
				type='submit'
				disabled={passParams.length ? false : true}>
				Generate
			</button>
		</form>
	);
}
