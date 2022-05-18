import { charObj } from '../../utilities/generator';
import { useState, useContext } from 'react';
import { FaCog } from 'react-icons/fa';
import PasswordContext from '../../context/PasswordContext';
import Modal from 'react-modal';
import Slider from '../Slider/Slider';
import Checkbox from '../Checkbox/Checkbox';
import Settings from '../Settings/Settings';
import './PasswordForm.css';

Modal.setAppElement('#root');

export default function PasswordForm({ getPassword }) {
	const {
		lengthValues,
		charCt,
		passParams,
		setIsChecked,
		clearForm,
	} = useContext(PasswordContext);

	const chars = Object.keys(charObj);

	const [isOpen, setIsOpen] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		getPassword(passParams, charCt);
	}

	function toggleModal() {
		setIsOpen(!isOpen);
	}

	function reset() {
		clearForm(charObj, setIsChecked);
	}
	const opts = chars.map((c) => (
		<Checkbox name={c} value={charObj[c]} key={c} />
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
				<Settings toggleModal={toggleModal} />
			</Modal>
			<h1>
				Length: <span>{charCt}</span>
			</h1>
			<span className='flex minMax'>
				<h3 className='min'>{lengthValues.min}</h3>
				<Slider />
				<h3 className='max'>{lengthValues.max}</h3>
			</span>
			<p className='reset' onClick={reset}>
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
