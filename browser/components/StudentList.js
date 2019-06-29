import React from 'react';

class StudentList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.students.map(student => {
          return (
            <tr key={student.id}>
              <td>{student.fullName}</td>
              <td onClick={() => this.props.getStudentTestScores(student.id)}>
                Details
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  }
}

export default StudentList;
