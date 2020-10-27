import React, { useRef, useState, useEffect } from 'react';

const DARK_THEME_CLASS = 'theme-dark';

const ThemeSwitch = () => {

	const [theme, setTheme] = useState(localStorage.getItem('theme'));

	useEffect(() => {
		if (theme === 'dark') {
			document.body.classList.add(DARK_THEME_CLASS);
			localStorage.setItem('theme', 'dark');
		} else {
			document.body.classList.remove(DARK_THEME_CLASS);
			localStorage.setItem('theme', 'light');
		}
	}, [theme]);

	const handleClick = e => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	}

	return (
		<div className="theme-switch" onClick={handleClick}>
			<span className="theme-switch-ball"></span>
		</div>
	)
}

export default ThemeSwitch;