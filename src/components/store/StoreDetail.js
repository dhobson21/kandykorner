import React, { Component } from 'react'
import building from "./store.png"
import "./store.css"

export default class Store extends Component {
  state={
    saveDisabled: false
  }

  render () {
    return (
      <section className="store">
        <div key={this.props.store.id} className="card">
          <div className="card-body">
              <img src={building} className="icon--store" alt="a store" />
            <h4 className="card-title">
              {this.props.store.name}
            </h4>
            <h5>{this.props.store.address}</h5>
            <button onClick={
                      () => {
                          this.setState(
                              { saveDisabled: true },
                              () => this.props.deleteLocation(this.props.store.id)
                          )
                      }
                  }
                  disabled={ this.state.saveDisabled }
                  className="card-link">Delete</button>
          </div>
        </div>
      </section>
    )
  }
}