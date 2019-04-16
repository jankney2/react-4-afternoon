import React, { Component } from 'react';
import  axios from 'axios';


export default class Student extends Component {
  constructor() {
    super()
    this.state= {
      studentInfo: {}
    }
  }

componentDidMount() {
  axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(
    res=> this.setState({studentInfo: res.data})
  ).catch((err)=console.log(err, "error:operator"))
}

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h3>
          {this.state.grade}
        </h3>
        <h3>
        {this.state.email}
        </h3> 
        
        </div>
    )
  }
}