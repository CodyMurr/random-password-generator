import './App.css';
import { copyPW } from './utilities/helper';
import { useState, useContext } from 'react';
import { FaCopy /* FaUndo */ } from 'react-icons/fa';
import PasswordForm from './components/PasswordForm/PasswordForm';
import PasswordContext from './context/PasswordContext';

export default function App() {
	const { result, getPassword } = useContext(PasswordContext);

	const [clipboard, setClipboard] = useState({
		text: '',
		result: '',
	});

	function copy() {
		if (result) {
			copyPW(result, setClipboard);
		} else {
			return;
		}
	}

	return (
		<div className='App flex col'>
			<section className='output flex col'>
				<h1>{result ? result : 'Generate Password Below'}</h1>
				<section className='flex col icons'>
					<FaCopy
						className='copy-ico'
						size={50}
						color='#C33C54'
						onClick={copy}
					/>
					<p
						className={
							clipboard.result === 'Copied!' ? 'copied' : null
						}>
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
