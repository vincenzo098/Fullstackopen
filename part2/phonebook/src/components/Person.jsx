const Person = ({persons, newSearch}) => (
    persons
        .filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
        .map(person => <p key={person.id}>{person.name} {person.number}</p>)
)

export default Person