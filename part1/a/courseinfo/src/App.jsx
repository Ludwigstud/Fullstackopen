const Header = (props) => {
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
	const parts = [
		{
			name: "Fundamentals of React",
			excecises: 10,
		},
		{
			name: "Using props to pass data",
			excercises: 7,
		},
		{
			name: "State of a component",
			excercises: 14,
		},
	];

	return (
		<div>
			<Header course={course} />
			<Content
				part1={parts[0].name}
				part2={parts[1].name}
				part3={parts[2].name}
				exercises1={parts[0].excecises}
				exercises2={parts[1].excercises}
				exercises3={parts[2].excercises}
			/>
			<Total
				exercises1={parts[0].excecises}
				exercises2={parts[1].excercises}
				exercises3={parts[2].excercises}
			/>
		</div>
	);
};

export default App;
