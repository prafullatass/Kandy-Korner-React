
import React, { Component } from "react"
import StoreList from "./store/storeList";
import EmployeeList from "./employee/EmployeeList";
import CandyTypeList from "./candy/CandyTypeList";
import StoreEmployee from "./store/StoreEmployee";
import { Route } from 'react-router-dom'
import CandyList from "./candy/CandyList";
import storeManager from "../modules/storeManager";
import employeeManager from "../modules/employeeManager";
import candiesManager from "../modules/candiesManager";
import candyTypesManager from "../modules/candyTypesManager";

class ApplicationView extends Component {
    componentDidMount() {
        const newState = {}

        storeManager.getAll()
            .then(stores => newState.stores = stores)
        employeeManager.getAll()
            .then(employees => newState.employees = employees)
        candyTypesManager.getAll()
            .then(candyTypes => newState.candyTypes = candyTypes)
        candiesManager.getAll()
            .then(candies => newState.candies = candies)

            .then(() => this.setState(newState))
    }
    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    discontinued = (id) => {
        console.log(this)
        candiesManager.delete(id)
            .then(candiesManager.getAll)
            .then(candies => {
                this.setState({ candies: candies })
                this.disableButton(candies)
            })
    }

    disableButton(inputArray) {
        console.log(inputArray)
        if (inputArray.length === 0)
            document.querySelector("#delAll").disabled = true
    }

    deleteAllCandies = () => {
        let promises = []
        this.state.candies.forEach(candy => {
            promises.push(candiesManager.delete(candy.id))
        })
        Promise.all(promises)
            .then(candiesManager.getAll)
            .then(candies => {
                this.setState({ candies: candies })
                console.log(`candies : ${candies}`)
                this.disableButton(candies)
            })
    }

    fireEmployee = (emp) => {
        if (window.confirm(`Fire -- ${emp.name}`)) {
            employeeManager.delete(emp.id)
                .then(() => employeeManager.getAll())
                .then(employees => this.setState({ employees: employees }))
        }
    }

    render() {
        console.log(this.state.employees)

        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/candyType" render={() => {
                    return <CandyTypeList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/employees" render={() => {
                    return <StoreEmployee stores={this.state.stores}
                        employeeList={this.state.employees}
                        fireEmployee={this.fireEmployee} />
                }} />
                <Route path="/candies" render={() => {
                    return <CandyList candies={this.state.candies}
                        candyTypes={this.state.candyTypes}
                        discontinued={this.discontinued}
                        deleteAllCandies={this.deleteAllCandies}
                    />
                }} />
                {/*<StoreList stores={this.state.stores} />
                <EmployeeList employeeList={this.state.employees} />
                <CandyList candyList={this.state.candies} />
            <StoreEmployee stores={this.state.stores} employeeList={this.state.employees} />*/}
            </React.Fragment>
        )
    }
}

export default ApplicationView