import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import PageContant from './PageContant';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<PageContant>
					<Navbar />
					<Form />
				</PageContant>
			</LanguageProvider>
		</ThemeProvider>
	);
}
