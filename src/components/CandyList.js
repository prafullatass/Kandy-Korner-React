import React, { Component } from 'react'

import "./kandyKorner.css"
class CandyList extends Component {
    render () {
        return (
            <section className="margin_top">
                <h2> Candies</h2>
                {
                    this.props.candyList.map(candy =>
                        <section key = {`candy--${candy.id}`}>{candy.name}</section>)
                }
            </section>
        )
    }
}

export default CandyList