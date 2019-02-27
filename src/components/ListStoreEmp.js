import React, { Component } from 'react'

import "./kandyKorner.css"

class ListStoreEmp extends Component {
    render() {
        return (
            <section key={`storeEmp--${this.props.Store.id}`}>
                <h3>{this.props.Store.name}</h3>
                <p><strong>Employees :</strong>{this.props.Employees.join(", ")}</p>
                <hr/>
            </section>
        )
    }
}

export default ListStoreEmp