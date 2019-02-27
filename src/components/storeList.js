import React, { Component } from 'react'

import "./kandyKorner.css"
class StoreList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="margin_top">
                    <h2> Stores List </h2>
                    {
                        this.props.stores.map(store =>
                            <section key={`store--${store.id}`}>{store.name}
                                <p>{store.address}</p>
                            </section>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default StoreList