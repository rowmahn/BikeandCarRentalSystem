import { Component } from "react"
import {Route} from 'react-router-dom'



import Home from './Home'
import Login from "./Login"
import Register from "./Register"
import Bike from "./Bike"
import Car from "./Car"
import AddVehicle from './AddVehicle'
import MyProfile from './MyProfile'


export default class Body extends Component{
    render(){
        return(
            <div>
                <Route path='/' exact component= {Home}/>
                <Route path='/register' exact component= {Register}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/vehicle/bike' exact component={Bike}/>
                <Route path='/vehicle/car' exact component={Car}/>
                <Route path='/vehicle/insert' exact component = {AddVehicle}/>
                <Route path='/customer/myprofile' exact component = {MyProfile}/>


            </div>
        )
    }
}