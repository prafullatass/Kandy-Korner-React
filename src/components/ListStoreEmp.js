import React, { Component } from 'react'

class ListStoreEmp extends Component {
    render() {
        return (
            <section key={`storeEmp--${this.props.Store.id}`}>
                <h1>{this.props.Store.name}</h1>
                <p><strong>Employees :</strong>{this.props.Employees.join(", ")}</p>
                <hr/>
            </section>
        )
    }
}

export default ListStoreEmp