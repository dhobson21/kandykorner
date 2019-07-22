import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class EmployeeList extends Component {
  render() {
return (
  <React.Fragment>
  <div className="employeeButton">
    <button type="button"
            className="btn btn-success"
            onClick={() => {
                this.props.history.push("/employees/new")}
            }>
        Hire Employee
    </button>
  </div>
    <section className="employees">
      {
        this.props.employees.map(employee =>
              <div key={employee.id}>
                <h5>
                <Link className="nav-link" to={`/employees/${employee.id}`}> {employee.name}</Link>
                </h5>
                </div>
          )
      }
    </section>
  </React.Fragment>
)
  }
}