import React, { useState, useEffect, Fragment, useRef } from 'react';
import { data } from '../_data';
import { gsap } from "gsap";
import { shuffle, colors, random } from "../_utils";
import { Sign, Explanation } from ".";

// Mix and match the questions
const shuffledData = shuffle(data.questions);

const Quiz = () => {

	const messages = {
		correct: [
			"You're a superstar!",
			"Can you see into the future?!",
			"Correcto Mundo!",
			"What a flying ace you are!",
			"Heck yes!",
			"F*&# Yes!",
			"You hero!",
			"BOOOOOOOM! 💥",
			"Yaaaaas Queeeeen! 👑",
			"👍🏽",
			"🤯 How did you know?!",
			"🎯",
			"You're a wizard! 🧙‍♂️"
		],
		wrong: [
			"Ouch, want to try again?",
			"Did you even study? Try again.",
			"Nope",
			"Double Nope",
			"Let's not talk about that one...",
			"ooops...",
			"Gosh darnit, that's unfortunate.",
			"Have you had your coffee today...?",
			"Go caffeinate and try again.",
			"Odds point to nope",
			"🤦🏽‍♀️",
			"🙅🏽‍♂️",
			"👎🏽",
			"I think you need to read more books...",
			"💩"
		]
	}

	// Determine if the user is done the quiz
	const [ isFinished, setIsFinished ] = useState(false);
	const [ score, setScore ] = useState(0);
	const numberOfQuestions = shuffledData.length;

	// Current questions
	const [ currentIndex, setCurrentIndex ] = useState(1);
	const [ currentQuestion, setCurrentQuestion ] = useState({ ...shuffledData[currentIndex] });
	const [ isAnswering, setIsAnswering ] = useState(true);
	const [ answer, setAnswer ] = useState('correct');

	const isLastQuestion = currentIndex > numberOfQuestions - 1;

	// Refs
	const card = useRef();
	const optionsList = useRef();

	const nextQuestion = () => {
		if ((currentIndex + 1) <= numberOfQuestions) {
			setCurrentIndex(currentIndex + 1);
			setIsAnswering(true);
			resetCheckboxes();
		} else {
			setIsFinished(true);
		}
	}

	const resetCheckboxes = () => {
		const options = [...optionsList.current.children];
		options.forEach(answer => answer.children[0].checked = false);
	}

	const response = {
		correct: () => {
			return new Promise( ( resolve, reject ) => {
				setScore(score + 1);
				setAnswer(random.pick(messages.correct))
				setTimeout( () => resolve(), 750);
			})
		},
		wrong: () => {
			return new Promise( ( resolve, reject ) => {
				setAnswer(random.pick(messages.wrong))
				setTimeout( () => resolve(), 750);
			})
		}
	}

	const handleAnswer = async () => {

		if (!isAnswering) return; // Exit function if the user has already answered

		// These are the users picks
		const options = [...optionsList.current.children];
		let verdict = 'correct'; // Innocent until proven guilty

		// Loop through the data (currentQuestion) to get each option/answer
		currentQuestion.options.map( data => {
			// Then with each option/answer from the data, loop through each option the user was presented
			return options.forEach( answer => {
				// Match each id of the data option with the users answer
				if (data.id === parseInt(answer.dataset.id)) {
					// If the id's match, check to see if the 'isCorrect' DOES NOT match the users answer
					if (!data.isCorrect === answer.children[0].checked) {
						verdict = 'wrong';
						return; 
					}
				}
			});
		});
		setIsAnswering(false);
		await response[verdict]();
	}

	// Change questions
	useEffect(() => {
		setCurrentQuestion({ ...shuffledData[currentIndex - 1] })
	}, [currentIndex]);

	return (
		<Fragment>
		{ isFinished ? (
			<div className="card flex-center text-center">
				<p>Score <span>{score} / { numberOfQuestions }</span></p>
			</div>
		) : (
			<Fragment>
				<section className="card" ref={card}>
					<Sign isAnswering={isAnswering} message={answer}/>
					<div className="card-wrapper">
						<p className="card-number">{currentIndex} / { numberOfQuestions }</p>
						<h2 className="card-question">{ currentQuestion.question }</h2>
						<form ref={optionsList}>
							{ currentQuestion.options.map( option => (
								<label htmlFor={ option.id } key={option.id} data-id={option.id}>
									<input type="checkbox" id={ option.id } name={ option.id } value={ option.text }/>
									{ option.text }
								</label>
							))}
						</form>
						<button className="btn-primary" disabled={ !isAnswering } onClick={ handleAnswer }>Answer Question</button>
						<button className="btn-secondary" disabled={ isAnswering } onClick={ nextQuestion }>{ isLastQuestion ? "See Results" : "Next Question"}</button>
						
						{ !isAnswering && <Explanation content={currentQuestion.explanation}/>}
					</div>
				</section>
			</Fragment>
			)}
		</Fragment>
	)
}

export default Quiz;