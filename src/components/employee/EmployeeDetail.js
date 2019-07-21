import React, { Component } from 'react'
import body from "./employee.png"
import "./employee.css"

export default class Employee extends Component {
  state={
    saveDisabled: false
  }

  render () {
    return (
      <section className="employee">
        <div key={this.props.employee.id} className="card">
          <div className="card-body">
          <img src={ body } className="icon--person" alt="Person" />
            <h4 className="card-title">
              {this.props.employee.name}
            </h4>
            <h5>{this.props.employee.phone}</h5>
            <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.fireEmployee(this.props.employee.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Fire Employee</button>
          </div>
        </div>
      </section>
    )
  }
}