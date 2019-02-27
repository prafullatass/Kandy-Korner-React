import React, { Component } from 'react'

class StoreList extends Component {
    render() {
        return (
            <React.Fragment>
                <h2> Stores List </h2>
                {
                    this.props.stores.map(store =>
                        <section key={`store--${store.id}`}>{store.name}
                            <p>{store.address}</p>
                        </section>
                    )
                }
            </React.Fragment>
        )
    }
}

export default StoreList