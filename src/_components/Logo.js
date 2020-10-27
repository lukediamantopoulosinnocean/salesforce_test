import React, { useRef, useEffect } from 'react';
import gsap, { timeline } from "gsap";

const Logo = () => {

	const A = useRef(null);
	const I = useRef(null);
	const R = useRef(null);

	const saucer = useRef(null);

	useEffect( () => {
		gsap.set(saucer.current, { transformOrigin: '50% 50%'})
		gsap.to([I.current, R.current ,A.current], { duration: 1.5, y: -15, stagger: { each: .25, repeat: -1, yoyo: true}, delay: -1.5, ease: 'sine.inOut' }, 0)
		gsap.to(saucer.current, { duration: 1.5, repeat: -1, yoyo: true, rotation: '7deg', y: 10, ease: 'sine.inOut' }, 0)
	}, []);

	const handleClick = () => {
		let tl = gsap.timeline()
			.add('accend')
			.to(A.current, { scale: 0, x: 85, y: -70 }, 'accend')
			.to(I.current, { scale: 0, x: 5, y: -50 }, '<.1')
			.to(R.current, { scale: 0, x: -35, y: -60 }, '<.1')
			.add('pause', '+=1')
			.fromTo([A.current,I.current, R.current], { scale: 0, x: 0, y: 0 }, { scale: 1, ease: 'expo.out', immediateRender: false }, 'pause')
	}

	return (
		<svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456 241.46" onClick={ handleClick }>
			<defs>
				<linearGradient id="linear-gradient" x1="363.14" y1="11.53" x2="363.14" y2="270.91" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#fff"/>
					<stop offset="0.34"/>
				</linearGradient>
	
				<linearGradient id="linear-gradient-2" x1="341.86" y1="214.15" x2="358.7" y2="67.09" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#fff" stopOpacity="0.08"/>
					<stop offset="0.33" stopColor="#fff" stopOpacity="0.15"/>
					<stop offset="0.66" stopColor="#fff" stopOpacity="0.3"/>
					<stop offset="0.89" stopColor="#fff" stopOpacity="0.64"/>
					<stop offset="1" stopColor="#fff" stopOpacity=".8"/>
				</linearGradient>
			</defs>
				<g className="logo-svg">
					<polygon className="cls-3" points="445 224.53 236 227.53 325.69 28.38 363.48 42.66 445 224.53"/>
					<path d="M22.23,149.3v92.16H0V149.3Z"/>
					<path d="M42.3,149.3H62.78L83,180.17q5.42,8.34,10.46,17a120.17,120.17,0,0,1,7.83,15.72h.29q-.74-8.77-.88-17.62t-.14-17.63V149.3H121v92.16H100.52L79.16,210q-5.26-7.75-9.65-15.8a110,110,0,0,1-7.47-17h-.29q.73,9.22.88,17.7t.15,17.26v29.26H42.3Z"/>
					<path d="M141.06,149.3h20.48l20.18,30.87q5.42,8.34,10.46,17A118.92,118.92,0,0,1,200,212.93h.29q-.74-8.77-.88-17.62t-.14-17.63V149.3h20.48v92.16H199.28L177.92,210q-5.26-7.75-9.65-15.8a110,110,0,0,1-7.46-17h-.3q.74,9.22.88,17.7t.15,17.26v29.26H141.06Z"/>
					<path ref={A}  d="M261.55,132.74l23.62-1.88,40.41,89.23L302.1,222l-7.83-19.19-30.92,2.46-4.7,20.18-23.18,1.85Zm5.34,56.07,21-1.67-4.38-10.81q-2.19-5.25-4.49-11.23t-4-11l-.3,0q-1.05,5.22-2.47,11.35t-2.71,12Z"/>
					<path ref={I} d="M362.63,108.9l-5.57,92-22.2-1.35,5.57-92Z"/>
					<path ref={R} d="M394.89,118.57,430.47,127a39.72,39.72,0,0,1,13.07,5.42,28.37,28.37,0,0,1,8.39,8.38,25.84,25.84,0,0,1,3.79,10.36,30.86,30.86,0,0,1-.6,11.44,26.85,26.85,0,0,1-9.88,15.7,26.3,26.3,0,0,1-6.77,3.81,38.82,38.82,0,0,1-6.29,1.81l12.94,41.25-24.91-5.9-8.3-36.09-9-2.12-7.64,32.32-21.64-5.13Zm11.93,46.11,6.55,1.55q7.39,1.76,12.66-.16t6.85-8.6a11.52,11.52,0,0,0-1.61-9.7q-2.94-4.16-9.91-5.8l-8.68-2.06Z"/>
					<g className="saucer" ref={saucer}>
						<path d="M422,41.06c-1,6.83-37.71,6.95-81.92.27s-79.21-17.64-78.18-24.47c.9-5.94,28.76-6.8,65.09-2.53a16.53,16.53,0,0,0-.18,2.45,16.79,16.79,0,0,0,33.38,2.56C396.32,26,422.87,35.1,422,41.06Z"/>
						<path d="M360.35,16.78a17.93,17.93,0,0,1-.19,2.56c-5.27-1-10.74-1.9-16.37-2.75S332.4,15,327,14.33a16.79,16.79,0,0,1,33.39,2.45Z"/>
					</g>
				</g>
		</svg>
	)
}

export default Logo;