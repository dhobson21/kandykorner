import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./store.css"


export default class StoreList extends Component {
  render() {
return (
  <section className="stores">
    {
      this.props.stores.map(store =>
            <div key={store.id}>
              <h5>
               <Link className="nav-link" to={`/stores/${store.id}`}> {store.name} </Link>
              </h5>
            </div>
        )
    }

  </section>
)
  }
}