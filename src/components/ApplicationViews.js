import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './store/StoreList'
import EmployeeList from './employee/EmployeeList'
import CandyList from './candy/CandyList'
import StoreManager from "../modules/StoreManager"
import EmployeeManager from "../modules/EmployeeManager"
import CandyManager from "../modules/CandyManager"
import CandyTypeManager from "../modules/CandyTypeManager"


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
    StoreManager.getAll("stores")
        .then(stores => newState.stores = stores)
        EmployeeManager.getAll("employees")
        .then(employees => newState.employees = employees)
        CandyManager.getAll("candies")
        .then(candies => newState.candies = candies)
       CandyTypeManager.getAll("candyTypes")
        .then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => this.setState(newState))
}
//function to delete a candy from db. passed to CandyList in props and attached as onClick EL on rendered button
  discontinueCandy= id => {
    return CandyManager.removeAndList(id)
    .then(candies => this.setState({
        candies: candies
    })
  )
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
            return <CandyList discontinueCandy={this.discontinueCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} /> // Pass cadyTypes state variable to the CandyList variable so it can be used in CandyList
          }} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews