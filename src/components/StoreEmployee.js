import React, { Component } from 'react'
import ListStoreEmp from './ListStoreEmp';

class StoreEmployee extends Component {
    render() {
        console.log(this.props.employeeList)
        return (
            this.props.stores.map(store =>
                <section key = {store.id} className="storeEmployee margin_top">
                    <h5>{store.name}</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>phNo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.employeeList
                                    .filter(employee => employee.storeId === store.id)
                                    .map(emp =>
                                        <ListStoreEmp key={emp.id} Employee={emp} />
                                    )
                            }
                        </tbody>
                    </table>
                </section>
            )
        )
    }
}

export default StoreEmployee