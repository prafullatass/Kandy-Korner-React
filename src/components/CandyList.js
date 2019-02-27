import React, { Component } from 'react'

class CandyList extends Component {
    render () {
        return (
            <React.Fragment>
                <h2> Candies</h2>
                {
                    this.props.candyList.map(candy =>
                        <section key = {`candy--${candy.id}`}>{candy.name}</section>)
                }
            </React.Fragment>
        )
    }
}

export default CandyList