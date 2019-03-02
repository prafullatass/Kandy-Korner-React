import React, { Component } from 'react'

import "./candy.css"

class CandyList extends Component {
    render() {
        console.log(this.props.candies)
        return (
            <React.Fragment>
            <section className="margin_top flex-container">
                <hr />
                {
                    this.props.candies.map(candy =>
                        Array.of(this.props.candyTypes
                            .find(candyType => candyType.id === candy.typeId))
                            .map(type =>
                                <div key = {candy.id} className="card card-width">
                                    <div className="card-body">
                                        <h5 className="card-title">{candy.name}</h5>
                                        <p className="card-text">{type.type}</p>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => { this.props.discontinued(`${candy.id}`) }} >
                                            Discontinued
                                            </button>
                                    </div>

                                </div>
                            )
                    )
                }
            </section>
                <button id="delAll"
                    onClick={() => { this.props.deleteAllCandies() }}>
                    DELETE ALL</button>
            </React.Fragment>
        )
    }
}

export default CandyList