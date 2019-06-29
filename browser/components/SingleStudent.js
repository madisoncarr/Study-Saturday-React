import React from 'react';

class SingleStudent extends React.Component {
  constructor() {
    super();
    this.averageGrade = this.averageGrade.bind(this);
  }
  averageGrade() {
    let average = 0;
    this.props.singleStudentScores.forEach(currentGrade => {
      average += currentGrade.grade;
    });
    return average / this.props.singleStudentScores.length;
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.singleStudentScores[0].student.fullName}</h1>
        <h2>Average grade: {this.averageGrade()}%</h2>
        <table>
          <thead>
            <tr>
              <td>Subject</td>
              <td>Grade</td>
            </tr>
          </thead>
          <tbody>
            {this.props.singleStudentScores.map(currentScore => {
              return (
                <tr key={currentScore.id}>
                  <td>{currentScore.subject}</td>
                  <td>{currentScore.grade}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default SingleStudent;
