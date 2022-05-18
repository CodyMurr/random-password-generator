import { createContext, useState } from 'react';
import { generate } from '../utilities/generator';
import { copyPW } from '../utilities/helper';

const PasswordContext = createContext();

export function PasswordProvider({ children }) {
	const [lengthValues, setLengthValues] = useState({
		min: 5,
		max: 30,
	});
	const [charCt, setCharCt] = useState(5);
	const [passParams, setPassParams] = useState([]);
	const [result, setResult] = useState(null);
	const [formData, setFormData] = useState({});
	const [isChecked, setIsChecked] = useState({
		lowercase: false,
		uppercase: false,
		numbers: false,
		symbols: false,
	});
	const [clipboard, setClipboard] = useState({
		text: '',
		result: '',
	});
	const [copied, setCopied] = useState(false);

	function clearForm(obj, cb) {
		const keys = Object.keys(obj);
		setCharCt(lengthValues.min);
		setPassParams([]);
		let idx = 0;
		while (idx < keys.length) {
			cb({
				[obj[keys[idx]]]: false,
			});
			idx++;
		}
		setResult(null);
		setCopied(false);
	}

	function addParams(param, cb) {
		setPassParams([...passParams, param]);
		cb();
	}

	function deleteParams(param, cb) {
		setPassParams(passParams.filter((el) => el !== param));
		cb();
	}

	function adjustLength(num) {
		setCharCt(num);
	}

	function getPassword(arr, len) {
		const pw = generate(arr, len);
		setResult(pw);
	}

	function handleChange(e) {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function submitForm(cb) {
		setLengthValues(formData);
		setTimeout(() => {
			cb();
		}, 500);
	}

	function copy() {
		if (result) {
			copyPW(result, setClipboard);
		} else {
			return;
		}
		setCopied(true);
	}

	return (
		<PasswordContext.Provider
			value={{
				lengthValues,
				charCt,
				passParams,
				result,
				formData,
				isChecked,
				clipboard,
				copied,
				setCopied,
				setIsChecked,
				clearForm,
				addParams,
				deleteParams,
				adjustLength,
				getPassword,
				handleChange,
				submitForm,
				copy,
			}}>
			{children}
		</PasswordContext.Provider>
	);
}

export default PasswordContext;
