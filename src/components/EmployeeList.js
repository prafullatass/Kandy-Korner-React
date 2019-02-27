import React, { Component } from 'react'

class EmployeeList extends Component {
    render () {
        return(
            <React.Fragment>
                <h2>Employee List</h2>
                {
                    this.props.employeeList.map(employee =>
                    <section key={`emp--${employee.id}`}>{employee.name}</section>)
                }
            </React.Fragment>
        )
    }
}

export default EmployeeList