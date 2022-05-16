import './App.css';
import { generate } from './utilities/generator';
import { useState } from 'react';
import { FaCopy, FaUndo } from 'react-icons/fa';
import PasswordForm from './components/PasswordForm/PasswordForm';

export default function App() {
	const [result, setResult] = useState(null);

	function getPassword(arr, len) {
		const pw = generate(arr, len);
		setResult(pw);
	}
	return (
		<div className='App flex col'>
			<section className='output flex col'>
				<h1>{result ? result : 'Generate Password Below'}</h1>
				<section className='flex icons'>
					{/* implement clipboard functionality */}
					<FaCopy size={50} color='#C33C54' />
					&nbsp;
					<FaUndo size={50} color='#C33C54' />
					&nbsp;
				</section>
			</section>
			<section className='form-container flex'>
				<PasswordForm getPassword={getPassword} />
			</section>
		</div>
	);
}
