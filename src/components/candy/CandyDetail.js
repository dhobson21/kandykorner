import React, { Component } from 'react'
import piece from "./candy.jpg"
import "./candy.css"

export default class Candy extends Component {
  state ={
    saveDisabled: false
  }


  render () {
    return (
      <section className="candy">
                <div key={this.props.candy.id } className="card">
                    <div className="card-body">
                            <img src={ piece } className="icon--candy" alt="Piece of Candy" />
                        <h4 className="card-title">
                            {this.props.candy.name }

                        </h4>
                        <h5>
                          {
                            //use the candyTypes state variable to match the candyTypeId with the candyType and then display the candyType name
                            this.props.candyTypes.find(candyType => candyType.id === this.props.candy.candyTypeId).name

            }

                        </h5>

                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.discontinueCandy(this.props.candy.id)
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