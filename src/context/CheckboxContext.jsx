import { createContext, useState } from 'react';

const CheckboxContext = createContext();

export function CheckboxProvider({ children }) {
	const [isChecked, setIsChecked] = useState({
		lowercase: false,
		uppercase: false,
		numbers: false,
		symbols: false,
	});
	return (
		<CheckboxContext.Provider value={{ isChecked, setIsChecked }}>
			{children}
		</CheckboxContext.Provider>
	);
}

export default CheckboxContext;
