import React, { Component } from 'react'



export default class CandyList extends Component {
  render() {
return (
  <section className="candies">
    {
       this.props.candies.map(candy =>
        <div key={candy.id}>
            {candy.name}--
            {
              //use the candyTypes state variable to match the candyTypeId with the candyType and then display the candyType name
                this.props.candyTypes.find(candyType => candyType.id === candy.candyTypeId)
                .name

            }
        </  div>

    )
}
  </section>
)
  }
}
