import './App.css';
import { generate } from './utilities/generator';
import { copyPW } from './utilities/helper';
import { useState } from 'react';
import { FaCopy, FaUndo } from 'react-icons/fa';
import PasswordForm from './components/PasswordForm/PasswordForm';

export default function App() {
	const [result, setResult] = useState(null);
	const [clipboard, setClipboard] = useState({
		text: '',
		result: '',
	});

	function getPassword(arr, len) {
		const pw = generate(arr, len);
		setResult(pw);
	}

	function copy() {
		if (result) {
			copyPW(result, setClipboard);
		} else {
			return;
		}

		console.log(clipboard);
	}
	return (
		<div className='App flex col'>
			<section className='output flex col'>
				<h1>{result ? result : 'Generate Password Below'}</h1>
				<section className='flex col icons'>
					{/* implement clipboard functionality */}
					<FaCopy
						className='copy-ico'
						size={50}
						color='#C33C54'
						onClick={copy}
					/>
					<p className={clipboard.result === 'Copied!' && 'copied'}>
						{clipboard.result}
					</p>
					{/* &nbsp; */}
					{/* <FaUndo size={50} color='#C33C54' />
					&nbsp; */}
				</section>
			</section>
			<section className='form-container flex'>
				<PasswordForm getPassword={getPassword} />
			</section>
		</div>
	);
}
