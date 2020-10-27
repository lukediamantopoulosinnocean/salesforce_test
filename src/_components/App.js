import React, { useState } from 'react';
import { Quiz, Logo, ThemeSwitch } from '../_components';
import '../_style/App.scss';

function App() {
	const [isInitiated, setIsInitiated] = useState(false);

	const handleInit = () => {
		setIsInitiated(true);
	}

	return (
		<div className="app flex flex-column">
			<header className="flex flex-space-between">
				<Logo/>
				<ThemeSwitch/>
			</header>

			<main className="flex flex-center flex-remaining">
				{ isInitiated ? (
					<Quiz />
				) : (
					<section className="text-center">
						<p>Welcome to InnAir's</p>
						<h1>Salesforce Marketing Cloud Email Specialist training exam</h1>
						<p>Questions curated from the brilliant minds here at Innocean to help aid you on your quest for global email domination.</p>
						<div className="stacking-context">
							<button className="btn-submit" onClick={ handleInit }>Let's Go</button>
						</div>
					</section>
				)}
			</main>
		</div>
	);
}

export default App;
