import { useState } from "react";

const Button = (props) => {
	return <button onClick={props.onClick}>{props.text}</button>;
};

const Feedback = (props) => {
	return (
		<>
			<h1>Give feedback</h1>
			<Button
				text="good"
				onClick={props.setGood}
			/>
			<Button
				text="neutral"
				onClick={props.setNeutral}
			/>
			<Button
				text="bad"
				onClick={props.setBad}
			/>
		</>
	);
};

const Statistics = (props) => {
	if (props.all === 0) {
		return (
			<>
				<h1>Statistics</h1>
				<p>No feedback given</p>
			</>
		);
	}
	return (
		<>
			<h1>Statistics</h1>
			<p>Good: {props.good}</p>
			<p>Neutral: {props.neutral}</p>
			<p>Bad: {props.bad}</p>
			<p>All: {props.all}</p>
			<p>Average: {props.average}</p>
			<p>Positive: {props.positive} %</p>
		</>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<Feedback
				setGood={() => setGood(good + 1)}
				setNeutral={() => setNeutral(neutral + 1)}
				setBad={() => setBad(bad + 1)}
			/>
			<h1>Statistics</h1>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={good + neutral + bad}
				average={(good - bad) / (good + neutral + bad)}
				positive={(good / (good + neutral + bad)) * 100}
			/>
		</div>
	);
};

export default App;
