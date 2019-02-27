import React, { Component } from 'react'

import "./kandyKorner.css"
class CandyList extends Component {
    render() {
        return (
            <section className="margin_top">
                {
                    this.props.candyTypes.map(candyType =>
                        <article key = {`type--${candyType.id}`}>
                            <h3>{candyType.type}</h3>
                            {
                                this.props.candies.filter(candy => candy.typeId === candyType.id)
                                    .map(candy =>
                                        <section key={`candy--${candy.id}`}>{candy.name}</section>)
                            }
                            <hr/>
                        </article>
                    )
                }
            </section>
        )
    }
}

export default CandyList