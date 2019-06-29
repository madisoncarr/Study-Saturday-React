import React from 'react';

class SingleStudent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Student Name</h1>
        <h2>Average grade: 50%</h2>
        <table>
          <thead>
            <tr>
              <td>Subject</td>
              <td>Grade</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Computer Science</td>
              <td>45%</td>
            </tr>
            <tr>
              <td>Art</td>
              <td>60%</td>
            </tr>
            <tr>
              <td>iure</td>
              <td>45%</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default SingleStudent;
