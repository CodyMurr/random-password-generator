import { capitalize } from '../../utilities/helper';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useContext } from 'react';
import PasswordContext from '../../context/PasswordContext';
import './Checkbox.css';

export default function Checkbox({ name, value }) {
	const { isChecked, setIsChecked, addParams, deleteParams } =
		useContext(PasswordContext);

	function toggle() {
		setIsChecked({
			...isChecked,
			[name]: !isChecked[name],
		});
	}

	function handleAddParam(e) {
		e.preventDefault();
		addParams(value, toggle);
	}

	function handleDeleteParam(e) {
		e.preventDefault();
		deleteParams(value, toggle);
	}

	return (
		<div className='container-check flex'>
			<section className=' flex Checkbox'>
				<h2>Include {capitalize(name)}</h2>
				<span>
					{!isChecked[name] ? (
						<FaToggleOff
							size={70}
							style={{ color: '#7D2636' }}
							onClick={handleAddParam}
						/>
					) : (
						<FaToggleOn
							size={70}
							style={{ color: '#7D2636' }}
							onClick={handleDeleteParam}
						/>
					)}
				</span>
			</section>
		</div>
	);
}
