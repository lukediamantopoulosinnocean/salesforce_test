import React, { Fragment, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Explanation = ({ content }) => {

	let tl = gsap.timeline();
	const btn = useRef(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		tl.fromTo(btn.current, { scale: 0 }, { scale: 1, duration: .75, ease: 'elastic.out(1, 0.5)' })
	},[]);

	return (
		<Fragment>
			<div className={`explanation flex flex-center ${isActive ? "active" : ""}`}>
				<div>
					<h2>Explanation:</h2>
					<p>{content}</p>
				</div>
			</div>
			<button className="explanation-btn" ref={btn} onClick={() => setIsActive(!isActive)}>
				<span className="flex flex-center">{ isActive ? "X" : "?"}</span>
			</button>
		</Fragment>
	)
}

export default Explanation;