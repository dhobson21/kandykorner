import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from "react"
import StoreList from './store/StoreList'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from "./employee/EmployeeDetail"
import CandyList from './candy/CandyList'
import StoreManager from "../modules/StoreManager"
import StoreDetail from "./store/StoreDetail"
import EmployeeManager from "../modules/EmployeeManager"
import CandyDetail from "./candy/CandyDetail"
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
    .then(candies => {
      this.props.history.push("/candies")
      this.setState({
        candies: candies
      }
    )
  })
  }

  deleteLocation= id => {
    return StoreManager.removeAndList(id)
    .then(stores => {
      this.props.history.push("/")
      this.setState({
        stores: stores
      })
    })
  }
  fireEmployee= id => {
    return EmployeeManager.removeAndList(id)
    .then(employees => {
      this.props.history.push("/employees")
      this.setState({
        employees: employees
      })
    })
  }

    render () {
      return (
        <React.Fragment>
          <Route exact path = "/" render={(props) => {
            return <StoreList stores={this.state.stores} />
          }} />
          <Route path="/stores/:storeId(\d+)" render={(props) => {
            let store = this.state.stores.find(store => store.id === parseInt(props.match.params.storeId))
              if(!store) {
                store = {id:404, name:"404", address: "Store Not Found"}
              }
            return <StoreDetail deleteLocation={this.deleteLocation} stores={this.state.stores} store={store} />
          }} />
          <Route exact path = "/employees" render={(props) => {
            return <EmployeeList employees={this.state.employees} />
          }} />
          <Route path ="/employees/:employeeId(\d+)" render ={(props) => {
            let employee = this.state.employees.find(employee => employee.id === parseInt(props.match.params.employeeId))
              if(!employee) {
                employee = {id:404, name:"404", phone: "Employe Not Found"}
              }
            return <EmployeeDetail fireEmployee={this.fireEmployee} employee={employee} />
          }} />
          <Route exact path = "/candies" render={(props) => {
            return <CandyList discontinueCandy={this.discontinueCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} /> // Pass cadyTypes state variable to the CandyList variable so it can be used in CandyList
          }} />
          <Route path = "/candies/:candyId(\d+)" render={(props) => {
            let candy = this.state.candies.find(candy =>
              candy.id === parseInt(props.match.params.candyId)
              )
              // If the candy wasn't found, create a default one
              if (!candy) {
                  candy = {id:404, name:"404", candyTypeId: "Candy Not Found"}
              }
            return <CandyDetail discontinueCandy={this.discontinueCandy} candy={candy} candyTypes={this.state.candyTypes}/>
          }} />
        </React.Fragment>
      )
    }
  }

  export default withRouter(ApplicationViews)
