import React, { Component } from 'react'

import "./kandyKorner.css"

class ListStoreEmp extends Component {
    render() {
        //console.log(this.props.Employees)
        return (
                <tr>
                    <td>{this.props.Employee.name}</td>
                    <td>{this.props.Employee.Email}</td>
                    <td>{this.props.Employee.phNo}</td>
                </tr>

        )
    }
}

export default ListStoreEmp