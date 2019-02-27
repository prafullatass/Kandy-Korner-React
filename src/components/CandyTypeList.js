import React, { Component } from 'react'

class CandyTypeList extends Component {
    render() {
        console.log(this.props.candies)
        return (
            <section className="margin_top"> Candy  Type
            <hr/>
                {
                    this.props.candies.map(candy =>
                        Array.of(this.props.candyTypes.find(candyType => candyType.id === candy.typeId))
                            .map(type =>
                                <section key={`candies--${candy.id}`}>
                                    {candy.name} {type.type}
                                </section>
                            )
                    )
                }
            </section>
        )
    }
}

export default CandyTypeList