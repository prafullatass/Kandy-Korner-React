
import React, { Component } from "react"
import StoreList from "./storeList";
import EmployeeList from "./EmployeeList";
import CandyList from "./CandyList";
import StoreEmployee from "./StoreEmployee";
import { Route } from 'react-router-dom'
import CandyTypeList from "./CandyTypeList";

class ApplicationView extends Component {
    storeArray = [
        {
            id: 1,
            name: "Candy Shop",
            address: "Cool spring Galleria"
        },
        {
            id: 2,
            name: "Suger Rush",
            address: "Cool spring Blvd"
        },
        {
            id: 3,
            name: "Candy Shop",
            address: "500 Interstate"
        }
    ]

    employeeArray = [
        {
            id: 1,
            name: "Sandy",
            storeId: 1
        },
        {
            id: 2,
            name: "Key",
            storeId: 2
        },
        {
            id: 3,
            name: "Tom",
            storeId: 1
        },
        {
            id: 4,
            name: "Angela",
            storeId: 3
        }
    ]

    candyTypeArray = [
        {
            id: 1,
            type: "chocolate"
        },
        {
            id: 2,
            type: "M&M"
        },
        {
            id: 3,
            type: "Mint"
        },
        {
            id: 4,
            type: "lemon"
        }
    ]

    candyArray = [
        {
            id: 1,
            typeId: 1,
            name: "M&M"
        },
        {
            id: 2,
            typeId: 2,
            name: "Mint M&M"
        },
        {
            id: 3,
            typeId: 1,
            name: "KitKat"
        }
    ]
    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render= {() =>{
                    return <StoreList stores ={this.state.stores} />
                } } />
                <Route path="/candy" render={()=>{
                    return <CandyList candies={this.state.candies} candyTypes = {this.state.candyTypes} />
                }} />
                <Route path="/employees" render={ () => {
                    return <StoreEmployee stores={this.state.stores} employeeList={this.state.employees} />
                }} />
                <Route path="/candies" render={()=>{
                    return <CandyTypeList candies={this.state.candies} candyTypes = {this.state.candyTypes} />
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