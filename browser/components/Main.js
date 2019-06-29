import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      singleStudentScores: [],
    };
    this.getStudentTestScores = this.getStudentTestScores.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  async getStudentTestScores(event) {
    const { data: allStudentTestInfo } = await axios.get(
      `/test/student/${event}`
    );
    this.setState({ singleStudentScores: allStudentTestInfo });
  }

  render() {
    console.log(
      'single student scores from click event value 1',
      this.state.singleStudentScores
    );
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
            <StudentList
              students={this.state.students}
              getStudentTestScores={this.getStudentTestScores}
            />
          </tbody>
        </table>
        {this.state.singleStudentScores.length !== 0 ? (
          <SingleStudent singleStudentScores={this.state.singleStudentScores} />
        ) : (
          <span />
        )}
      </div>
    );
  }
}
