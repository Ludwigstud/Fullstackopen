const Course = ({ info }) => {
	return (
		<li>
			{info.name}: {info.exercises}
		</li>
	);
};

export default Course