import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Container from '../pages/container/Container';
import StudentForm from './student-form';

const StudentsPage = () => {
    const formGroups = ['feu 1', 'feu 2', 'feu 3', 'feu 4', 'feu 5'];
    const formInterests = ['JavaScript', 'PHP', 'Node.js', 'Python', 'C'];

    const formDefaults = {
        name: '',
        surname: '',
        age: '',
        phone: '',
        email: '',
        itKnowledge: '10',
        group: '',
        interests: [],
    };

    
    const [formData, setFormData] = useState(formDefaults);

    const [studentsList, setStudentsList] = useState([
        {
            id: uuid(),
            name: 'Vardas 10',
            surname: 'Pavardė 1',
            age: 25,
            phone: '+3704564879',
            email: 'vardas1@gmail.com',
            itKnowledge: 7,
            group: 'feu 3',
            interests: ['JavaScript', 'PHP'],
        },
        {
            id: uuid(),
            name: 'Vardas 2',
            surname: 'Pavardė 2',
            age: 32,
            phone: '+37045645455',
            email: 'vardas3@gmail.com',
            itKnowledge: 10,
            group: 'feu 1',
            interests: ['JavaScript'],
        },
        {
            id: uuid(),
            name: 'Vardas 3',
            surname: 'Pavardė 3',
            age: 20,
            phone: '+3704564879',
            email: 'vardas3@gmail.com',
            itKnowledge: 2,
            group: 'feu 4',
            interests: ['PHP'],
        },
        {
            id: uuid(),
            name: 'Vardas 5',
            surname: 'Pavardė 5',
            age: 40,
            phone: '+3704564879',
            email: 'vardas5@gmail.com',
            itKnowledge: 4,
            group: 'feu 3',
            interests: [],
        },
        {
            id: uuid(),
            name: 'Vardas 5',
            surname: 'Pavardė 5',
            age: 25,
            phone: '+3704564879',
            email: 'vardas5@gmail.com',
            itKnowledge: 7,
            group: 'feu 3',
            interests: ['JavaScript', 'PHP'],
        },
    ]);
    const formInputHandler = event => {
        setFormData(prevState => {
            const updatedData = { ...prevState };
            updatedData[event.target.name] = event.target.value;
            return updatedData;
        });
    };

    const createStudentHandler = (event) => {
        event.preventDefault();
        if (formData.id) {
            setStudentsList(prevState => {
                const updatedData = [...prevState];
                const editStudentIndex = updatedData.findIndex(student => student.id === formData.id);
                updatedData.splice(editStudentIndex, 1, formData);
                return updatedData;
            });
        } else {
            setStudentsList(prevState => [{ ...formData, id: uuid() }, ...prevState]);
        }
        setFormData(formDefaults);
    };


    const removeStudentHandler = (id) => {
        setStudentsList(prevState => prevState.filter(student => student.id !== id));
    };


    const editStudentHandler = (id) => {
        const editStudentData = studentsList.find(student => student.id === id);
        setFormData(editStudentData);
    };
    const [itKnowledgeValue, setItKnowledgeValue] = useState();

    const handleItKnowledgeChange = (event) => {
        const newItKnowledgeValue = parseInt(event.target.value);
        setItKnowledgeValue(newItKnowledgeValue);
        setFormData({ ...formData, itKnowledge: newItKnowledgeValue });
    };

    return (
        <Container>
            <form id="student-form" noValidate onSubmit={createStudentHandler}>
                <div className="form-control">
                    <label htmlFor="student-name">Name:</label>
                    <input type="text" name="name" id="student-name" value={formData.name} onChange={formInputHandler} required />
                </div>
                <div className="form-control">
                    <label htmlFor="student-surname">Surname:</label>
                    <input type="text" name="surname" id="student-surname" value={formData.surname} onChange={formInputHandler} required />
                </div>
                <div className="form-control">
                    <label htmlFor="student-age">Age:</label>
                    <input type="number" name="age" id="student-age" value={formData.age} min="0" max="120" onChange={formInputHandler} required />
                </div>

                <div className="form-control">
                    <label htmlFor="student-phone">Phone:</label>
                    <input type="tel" name="phone" id="student-phone" value={formData.phone} onChange={formInputHandler} required />
                </div>

                <div className="form-control">
                    <label htmlFor="student-email">Email:</label>
                    <input type="email" name="email" id="student-email" value={formData.email} onChange={formInputHandler} required />
                </div>

                <div className="form-control">
                    <label htmlFor="student-it-knowledge">IT knowledge:</label>
                    <input type="range" name="it-knowledge" id="student-it-knowledge" min="1" max="10" value={itKnowledgeValue} onChange={handleItKnowledgeChange} required />
                </div>
                <div>
                    <output id="it-knowledge-output">{itKnowledgeValue}</output>
                </div>

                <fieldset>
                    <div className="form-control">
                        <label htmlFor="group">Group:</label>
                        {formGroups.map((group) => (
                            <div className="group-control" key={group}>
                                <input type="radio" name="group" id={`group-${group}`} value={group} checked={formData.group === group} onChange={(event) => setFormData({ ...formData, group: event.target.value })} />
                                <label htmlFor={`group-${group}`}>{group}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-control">
                        <label htmlFor="interests">Interests:</label>
                        {formInterests.map((interest) => (
                            <div key={interest}>
                                <input type="checkbox" name="interests" id={`interest-${interest}`} value={interest} checked={formData.interests?.includes(interest) ?? false} onChange={(event) => {
                                    const isChecked = event.target.checked;
                                    const interest = event.target.value;
                                    setFormData((prevFormData) => {
                                        const interests = prevFormData.interests;
                                        if (isChecked) {
                                            return { ...prevFormData, interests: [...interests, interest] };
                                        } else {
                                            return { ...prevFormData, interests: interests.filter((i) => i !== interest) };
                                        }
                                    });
                                }} />

                                <label htmlFor={`interest-${interest}`}>{interest}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
                <input type="submit" id="form-submit" value={formData.id ? 'Edit Student' : 'Create Student'} />
            </form>
            {studentsList && studentsList.length > 0 && studentsList.map(student =>
                <StudentForm
                    onRemoveStudent={removeStudentHandler}
                    onEditStudent={editStudentHandler}
                    key={student.id}
                    {...student}
                    studentsList={studentsList}
                />
            )}
        </Container>
    )
}
export default StudentsPage

