import { capitalize } from '../../utilities/helper';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState } from 'react';
import './Checkbox.css';

export default function Checkbox({
	name,
	value,
	passParams,
	setPassParams,
}) {
	const [isChecked, setIsChecked] = useState(false);

	function toggle() {
		setIsChecked(!isChecked);
	}

	function handleAddParam(e) {
		e.preventDefault();
		toggle();
		setPassParams([...passParams, value]);
		console.log(passParams);
	}

	function handleDeleteParam(e) {
		e.preventDefault();
		toggle();
		setPassParams(passParams.filter((el) => el !== value));
	}

	return (
		<div className='container-check flex'>
			<section className=' flex Checkbox'>
				<h2>Include {capitalize(name)}</h2>
				<span>
					{!isChecked ? (
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
