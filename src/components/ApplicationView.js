
import React, { Component } from "react"
import StoreList from "./storeList";
import EmployeeList from "./EmployeeList";
import CandyList from "./CandyList";
import StoreEmployee from "./StoreEmployee";
import { Route } from 'react-router-dom'
import CandyTypeList from "./CandyTypeList";

class ApplicationView extends Component {
    componentDidMount() {
        const newState = {}
        console.log("componentDidMount -- appView")
        fetch("http://localhost:5002/stores")
            .then(r => r.json())
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:5002/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/candyTypes")
                .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => fetch("http://localhost:5002/candies")
                .then(r => r.json()))
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
        fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch("http://localhost:5002/candies"))
            .then(r => r.json())
            .then(candies => this.setState({ candies: candies }))
    }

    deleteAllCandies = () => {
        this.state.candies.forEach(candy => {
            return fetch(`http://localhost:5002/candies/${candy.id}`, {
                method: "DELETE"
            })
        })
            .then(() => fetch("http://localhost:5002/candies"))
            .then(r => r.json())
            .then(candies => this.setState({ candies: candies }))
    }

    render() {
        console.log("render -- appview")
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/candy" render={() => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/employees" render={() => {
                    return <StoreEmployee stores={this.state.stores} employeeList={this.state.employees} />
                }} />
                <Route path="/candies" render={() => {
                    return <CandyTypeList candies={this.state.candies}
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