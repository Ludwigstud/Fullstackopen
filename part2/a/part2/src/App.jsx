const Course = ({ info}) => {
	return <li>{info.name}: {info.exercises}</li>;
};

const App = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2,
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3,
			},
		],
	};

	const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);


	return(
<>
<h1>{course.name}</h1>

<ul>
{course.parts.map((part) => (
	<Course key={part.id} info={part} />
	
))}
</ul>
<p>Total number of excerises: {totalExercises}</p>


</>


	)
};

export default App;
