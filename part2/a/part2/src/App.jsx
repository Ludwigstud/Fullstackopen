import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import Filter from "./components/Filter";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
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
        const nameExists = persons.some((person) => person.name === newName);
        if (nameExists || newName === "") {
            alert(newName + " already exists in the phonebook!");
        } else {
            const newPerson = { name: newName, number: newNumber };
            setPersons(persons.concat(newPerson));
            setNewName("");
            setNewNumber("");
        }
    };

    const searchFilter = persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
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
                    <Person key={person.id} person={person} />
                ))}
            </ul>
        </div>
    );
};

export default App;