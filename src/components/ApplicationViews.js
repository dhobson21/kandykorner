import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './store/StoreList'
import EmployeeList from './employee/EmployeeList'
import CandyList from './candy/CandyList'

class ApplicationViews extends Component {
  storeArray = [
    { id: 1, name: "North Store", address: "123 Fake St"},
    { id: 2, name: "South Store", address: "8 Main St"},
    { id: 3, name: "East Store", address: "34 Church Ave"},
    { id: 4, name: "West Store", address: "26 Broad St"},
  ]

  employeeArray = [
    { id: 1, name: "Dustin Hobson"},
    { id: 2, name: "Scott Silver"},
    { id: 3, name: "Ben Parker"},
    { id: 4, name: "Sam Birky"}
  ]

  candyTypeArray = [
    { id: 1, name: "Chocolate"},
    { id: 2, name: "Lollipop"},
    { id: 3, name: "Gum"},
    { id: 4, name: "Sugar Candy"}
  ]

  candyArray = [
    { id: 1, candyTypeId: 4, name: "Sweet Tart"},
    { id: 2, candyTypeId: 2, name: "Blow Pop"},
    { id: 3, candyTypeId: 1, name: "Crunch Bar"},
    { id: 4, candyTypeId: 3, name: "Chicklets"}
  ]


  state = {
    stores: this.storeArray,
    employees: this.employeeArray,
    candyTypes: this.candyTypeArray,
    candies: this.candyArray
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
            return <CandyList candies={this.state.candies} />
          }} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews