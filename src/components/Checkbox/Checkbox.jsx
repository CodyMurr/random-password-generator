import { capitalize } from '../../utilities/helper';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState } from 'react';
import './Checkbox.css';

export default function Checkbox({
	name,
	value,
	paramObj,
	handleAddParam,
	handleDeleteParam,
}) {
	function handleClick(e) {
		handleAddParam(name);
	}

	return (
		<div className='container-check flex'>
			<section className=' flex Checkbox' onClick={handleClick}>
				<h2>Include {capitalize(name)}</h2>
				<span>
					{!paramObj[name].isChecked ? (
						<FaToggleOff
							size={70}
							style={{ color: '#7D2636' }}
							onClick={() => handleAddParam(name)}
						/>
					) : (
						<FaToggleOn
							size={70}
							style={{ color: '#7D2636' }}
							onClick={() => handleDeleteParam(name)}
						/>
					)}
				</span>
			</section>
		</div>
	);
}
