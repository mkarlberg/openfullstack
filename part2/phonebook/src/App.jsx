import './index.css'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, []);

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    var person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (person) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(person.id, { ...person, number: newNumber })
          .then(response => {
            setPersons(persons.map(p => p.id == person.id ? response : p))
            setNewName('')
            setNewNumber('')
          })
          .catch(_ => {
            setNotification({ message: `Information of ${person.name} has already been removed from server`, status: 'error' })
            setTimeout(() => setNotification(null), 5000)
            setPersons(persons.filter(p => p.id !== person.id))
          })
      }
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: Math.max(...persons.map(person => person.id)) + 1 + ''
      }

      personService
        .create(personObject)
        .then(response => {
          setNotification({ message: `Added ${personObject.name}`, status: 'success' })
          setTimeout(() => setNotification(null), 5000)
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
    }
  }
  const handleFilterChange = (event) => setFilter(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handlePersonDelete = (person) => deletePerson(person)

  const deletePerson = (person) => {
    if (confirm(`Delete ${person.name} ?`)) {
      personService
        .deleteById(person.id)
        .then(() => setPersons(persons.filter(p => p.id !== person.id)))
    }
  }

  const personsToShow = filter.length !== 0
    ? persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />

      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons persons={personsToShow} handlePersonDelete={handlePersonDelete} />
    </div>
  )
}

export default App