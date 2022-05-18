import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PasswordProvider } from './context/PasswordContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PasswordProvider>
			<App />
		</PasswordProvider>
	</React.StrictMode>,
);
