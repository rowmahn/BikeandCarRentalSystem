import { Component } from "react"
import {Route} from 'react-router-dom'
import Bike from "./Bike"


import Home from './Home'
import Login from "./Login"
import Register from "./Register"
export default class Body extends Component{
    render(){
        return(
            <div>
                <Route path='/' exact component= {Home}/>
                <Route path='/register' exact component= {Register}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/vehicle/bike' exact component={Bike}/>
            </div>
        )
    }
}