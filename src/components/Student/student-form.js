import React, { useState } from 'react';

const StudentForm = ({ name, surname, age, phone, email, itKnowledge, group, interests, id, onRemoveStudent, onEditStudent, studentsList }) => {
    const [showPrivateInfo, setShowPrivateInfo] = useState(false);
  
    if (!name && !surname) {
      return null;
    }
  
    const personalInfoHandler = () => setShowPrivateInfo(prevState => !prevState);
  
    const formattedPhone = showPrivateInfo || !phone ? phone : phone.replace(/^(\+370|8)(\d{4})(\d+)/, '****');
  
    const handleEditStudent = (id, newItKnowledge) => {
      const studentToEdit = studentsList.find((student) => student.id === id);
      if (studentToEdit) {
        const updatedStudent = { ...studentToEdit, itKnowledge: newItKnowledge };
        onEditStudent(id, updatedStudent);
      } else {
        console.log(`No student found with ID ${id}`);
      }
    };
  

  return (
    <div className='student-item'>
      <h2>{name} {surname}</h2>

      {age && <p><strong>Age: </strong> {age}</p>}
      {phone && <p><strong>Phone: </strong> {formattedPhone}</p>}
      {email && <p><strong>Email: </strong> {showPrivateInfo ? email : '****'}</p>}
      {itKnowledge && <p><strong>IT Knowledge: </strong> {itKnowledge}</p>}
      {group && <p><strong>Group: </strong> {group.toUpperCase()}</p>}

      {interests && interests.length > 0 ? (
        <>
          <h3>Interests:</h3>
          <ul>
            {interests.map((interest, index) => <li key={index}>{interest}</li>)}
          </ul>
        </>
      ) : (
        <h3>No interests...</h3>
      )}

      <button onClick={personalInfoHandler}>{showPrivateInfo ? 'Hide Private Info' : 'Show Private Info'}</button>
      <button onClick={() => onRemoveStudent(id)}>Remove Student</button>
      <button onClick={() => handleEditStudent(id, 10)}>Edit Student</button>

    </div>
  );
};

export default StudentForm;

