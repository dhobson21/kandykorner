import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './store/StoreList'
import EmployeeList from './employee/EmployeeList'
import CandyList from './candy/CandyList'

class ApplicationViews extends Component {

//original state is an empty array, filled with API data after its fetched and then state is reset with setState
  state = {
    stores: [],
    employees: [],
    candyTypes: [],
    candies: [],
  }

  componentDidMount() {
    const newState = {}
//fetching arrays that now exist in api
    fetch("http://localhost:5002/stores")
        .then(r => r.json())
        .then(stores => newState.stores = stores)
        .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/candies")
        .then(r => r.json()))
        .then(candies => newState.candies = candies)
        .then(() => fetch("http://localhost:5002/candyTypes")
        .then(r => r.json()))
        .then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => this.setState(newState))
}

    render () {
      return (
        <React.Fragment>
          <Route exact path = "/" render={(props) => {
            return <StoreList stores={this.state.stores} />
          }} />
          <Route exact path = "/employees" render={(props) => {
            return <EmployeeList employees={this.state.employees} />
          }} />
          <Route exact path = "/candies" render={(props) => {
            return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} /> // Pass cadyTypes state variable to the CandyList variable so it can be used in CandyList
          }} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews