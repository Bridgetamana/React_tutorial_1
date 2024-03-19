import React from 'react'

const NameList = () => {
    const persons = [
        {
            id: 1,
            name: 'Alice',
            age: 30,
            skill: 'React',
        }, 
        {
            id: 2,
            name: 'Mary',
            age: 37,
            skill: 'Angular',
        },
        {
            id: 3,
            name: 'John',
            age: 22,
            skill: 'Javascript',
        },
        {
            id: 4,
            name: 'Smith',
            age: 25,
            skill: 'Vue',
        }
    ]
    // const personList = persons.map(person => <person key={person.id} person={person} />)
    
    return (
    <div className="text-center py-12">
        {
            persons.map(person => (
                <h2 key={person.id}>I am {person.name}, I am {person.age} years old and I know {person.skill}</h2>
            ))
        }
    </div>
  )
}

export default NameList