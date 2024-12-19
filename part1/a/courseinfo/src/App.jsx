const Header = (props) => {
	console.log(props);
	return (
		<div>
			<p>{props.course}</p>
		</div>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Content = (props) => {
	console.log(props);
	return (
		<div>
			<Part
				part={props.part1}
				exercises={props.exercises1}
			/>
			<Part
				part={props.part2}
				exercises={props.exercises2}
			/>
			<Part
				part={props.part3}
				exercises={props.exercises3}
			/>
		</div>
	);
};

const Total = (props) => {
	return (
		<div>
			<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
		</div>
	);
};

const App = () => {
	const course = "Half Stack application development";

	const part1 = {
		name: "Fundamentals of React",
		excecises: 10,
	};

	const part2 = {
		name: "Using props to pass data",
		excercises: 7,
	};

	const part3 = {
		name: "State of a component",
		excercises: 14,
	};

	return (
		<div>
			<Header course={course} />
			<Content
				part1={part1.name}
				part2={part2.name}
				part3={part3.name}
				exercises1={part1.excecises}
				exercises2={part2.excercises}
				exercises3={part3.excercises}
			/>
			<Total
				exercises1={part1.excecises}
				exercises2={part2.excercises}
				exercises3={part3.excercises}
			/>
		</div>
	);
};

export default App;
