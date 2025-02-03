const Person = ({ person, onclick }) => {
	return (
		<li>
			{person.name} {person.number} <button onClick={onclick}>DELETE</button>
		</li>
	);
};

export default Person;
