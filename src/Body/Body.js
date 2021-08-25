import { Component } from "react"
import {Route} from 'react-router-dom'


import Home from './Home'
export default class Body extends Component{
    render(){
        return(
            <div>
                <Route path='/' exact component= {Home}/>
            </div>
        )
    }
}