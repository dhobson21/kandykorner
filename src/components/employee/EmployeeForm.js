import React, { Component } from "react";
import "./employee.css";

export default class employeeForm extends Component {
  // Set initial state
  state = {
    employeeName: "",
    Phone: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewAEmployee = evt => {
    evt.preventDefault();

      const employee = {
        name: this.state.employeeName,
        phone: this.state.phone,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        // employeeId: parseInt(this.state.emplo yeeId)
      };

      // Create the animal and redirect user to animal list
      this.props
        .hireEmployee(employee)
        .then(() => this.props.history.push("/employees"));
  };

  render() {
    return (
      <React.Fragment>
        <form className="employeeForm">
          <div className="form-group">
            <label htmlFor="employeeName">Employee name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="employeeName"
              placeholder="Employee name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="phone"
              placeholder="(555)-555-5555"
            />
          </div>

          <button
            type="submit"
            onClick={this.constructNewAEmployee}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}