const Header = (prop) => {
	return (
		<>
			<h1>{prop.course}</h1>
		</>
	);
};

const Content = (prop) => {
	return (
		<>
			<p>
				{prop.part} {prop.excercise}
			</p>
		</>
	);
};

const Total = (prop) => {
	return (
		<>
			<p>Number of excercises {prop.total}</p>
		</>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				part={part1}
				excercise={exercises1}
			/>
			<Content
				part={part2}
				excercise={exercises2}
			/>
			<Content
				part={part3}
				excercise={exercises3}
			/>
			<Total total={exercises1 + exercises2 + exercises3} />
		</div>
	);
};

export default App;
