import { useState } from "react"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [fillteredName,setFillteredName] = useState('')
  const [fillteredResult,setFillteredResult] = useState([])
  

  const handleFilterContact = (e) => {
      console.log('handleFilter',e.target)
      console.log('Target Value:', e.target.value)
      const findName = e.target.value
      setFillteredName(e.target.value)
      const fillteredNames = persons.filter(person =>
         person.name.toLocaleLowerCase() === findName.toLocaleLowerCase() )
    console.log('Filltered Result ', fillteredNames)
    setFillteredResult(fillteredNames)
  } 


  const handleNameChange = (e) => {
    console.log('handleNewName',e.target)
    setNewName(e.target.value)
    
  }

  const handleNumberChange = (e) => {
    console.log('handleNumberChang',e.target)
    setNewNumber(e.target.value)
  }

  const checkExsitingName = (name) => {
    for(let contact of persons) {
      if(contact.name === name) {
        return false
      }
    }
    return true
  }
 
  const  handleAddContact = (e) => {

    e.preventDefault()
    if(checkExsitingName(newName)) {
      console.log('addContact target and value',e.target,)
      const newContact = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
  
      console.log('new name',newName)
      console.log('New contact',newContact)
  
      const newContacts = persons.concat(newContact)
      console.log('New Contacts list',newContacts)
      setPersons(newContacts)
      setNewName('')
      setNewNumber('')
  
      console.log('Contact Added')
      console.log(newContacts)
    }else{
      alert(`${newName} already exist as a contact`)
    }
   
    

  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
      fillteredName={fillteredName} 
      handleFilterContact={handleFilterContact}/>
       
      <h2>add a new contact</h2>
        <PersonForm
        handleAddContact={handleAddContact}
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        fillteredName={fillteredName}
        fillteredResult={fillteredResult}
      />
      
    
    </div>
  )
}
export default App