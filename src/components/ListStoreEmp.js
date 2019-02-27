import React, { Component } from 'react'

import "./kandyKorner.css"

class ListStoreEmp extends Component {
    render() {
        return (
            <section key={`storeEmp--${this.props.Store.id}`}>
                <h4>{this.props.Store.name}</h4>
                <p><strong>Employees :</strong>{this.props.Employees.join(", ")}</p>
                <hr/>
            </section>
        )
    }
}

export default ListStoreEmp