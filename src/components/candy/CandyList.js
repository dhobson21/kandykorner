import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class CandyList extends Component {

  render() {
return (
  <section className="candies">
    {
       this.props.candies.map(candy =>
        <div key={candy.id}>
            <h5>
            <Link className="nav-link" to={`/candies/${candy.id}`}> {candy.name}</Link>
             --
            {
              //use the candyTypes state variable to match the candyTypeId with the candyType and then display the candyType name
                this.props.candyTypes.find(candyType => candyType.id === candy.candyTypeId).name
            }
            </h5>

            <button
            //event listener on button that calls discontinueCandy and deletes the candy from the db based on the candy.id
            onClick={() => this.props.discontinueCandy(candy.id)}
            className="card-link">Delete</button>
        </div>

    )
}
  </section>
)
  }
}
