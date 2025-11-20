import Person from "./Person"

const Persons = ({ persons, handlePersonDelete }) => {
    return (
        <div>
            {persons.map(person => <Person key={person.id} person={person} handlePersonDelete={handlePersonDelete} />)}
        </div>
    )
}

export default Persons