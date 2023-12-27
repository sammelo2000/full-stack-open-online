import { useState } from "react"
import ContactList from "./components/ContactList"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleNameChange = (e) => {
    console.log('handleNewName',e.target)
    setNewName(e.target.value)
    
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
        name: newName
      }
  
      console.log('new name',newName)
      console.log('New contact',newContact)
  
      const newContacts = persons.concat(newContact)
      console.log('New Contacts list',newContacts)
      setPersons(newContacts)
      setNewName('')
  
      console.log('Contact Added')
      console.log(newContacts)
    }else{
      alert(`${newName} already exist as a contact`)
    }
   
    

  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddContact}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map(person =>
            <ContactList key={person.name} name={person.name} />
            )
        }
      </ul>
    
    </div>
  )
}
export default App