import React, {Component} from 'react'
import ListStoreEmp from './ListStoreEmp';

class StoreEmployee extends Component {
    render() {
        return(
            <section className = "storeEmployee margin_top">
                {
                    this.props.stores.map(store =>
                        <ListStoreEmp key={store.id} Store = {store} Employees =
                        {this.props.employeeList
                        .filter(employee => employee.storeId === store.id)
                        .map(emp => emp.name)} />
                    )
                }
            </section>
        )
    }
}

export default StoreEmployee