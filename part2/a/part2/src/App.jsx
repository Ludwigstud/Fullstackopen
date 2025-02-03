import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import Filter from "./components/Filter";
import axios from "axios";
import service from "./services/service";

const App = () => {
	useEffect(() => {
		service.getAll().then((info) => {
			setPersons(info.data);
		});
	}, []);

	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const addNote = (event) => {
		event.preventDefault();
		const existingPerson = persons.find((person) => person.name === newName);
		if (existingPerson) {
			const updatedPerson = { ...existingPerson, number: newNumber };
			service
				.update(existingPerson.id, updatedPerson)
				.then((response) => {
					setPersons(
						persons.map((person) => (person.id !== existingPerson.id ? person : response.data))
					);
					setNewName("");
					setNewNumber("");
				})
				.catch((error) => {
					alert(`The person '${existingPerson.name}' was already removed from the server`);
					setPersons(persons.filter((person) => person.id !== existingPerson.id));
				});
		} else {
			const newPerson = { name: newName, number: newNumber };
			service.create(newPerson).then((response) => {
				setPersons(persons.concat(response.data));
				setNewName("");
				setNewNumber("");
			});
		}
	};
	const deletePerson = (id) => {
		const person = persons.find((p) => p.id === id);
		if (window.confirm(`Delete ${person.name}?`)) {
			service
				.remove(id)
				.then(() => {
					setPersons(persons.filter((p) => p.id !== id));
				})
				.catch((error) => {
					alert(`The person '${person.name}' was already removed from the server`);
					setPersons(persons.filter((p) => p.id !== id));
				});
		}
	};

	const searchFilter = persons.filter((person) =>
		person.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				searchTerm={searchTerm}
				handleSearchChange={handleSearchChange}
			/>
			<PersonForm
				onSubmit={addNote}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<ul>
				{searchFilter.map((person) => (
					<Person
						key={person.id}
						person={person}
						onclick={() => deletePerson(person.id)}
					/>
				))}
			</ul>
		</div>
	);
};

export default App;
