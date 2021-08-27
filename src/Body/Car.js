import { Component,state,React,deleteCar } from "react";

import axios from 'axios'
import {  Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
class Car extends Component{
    state = {
        cars : []
        }
        componentDidMount(){
        axios.get("http://localhost:90/vehicle/fetchByType/Car")
        .then((response)=>{
        console.log(response)
        this.setState({
        cars : response.data.data
        })
        })
        .catch((err)=>{
        console.log(err.response)
        })
        }


    render(){
        if (localStorage.getItem('token')) {
        return( 
            <div className="rootclass">




{
 this.state.cars.map((car)=>{
 return (


<Container> 

        <Row> 
            <Col > 
                <div class="card-deck">
                    <div class="card">
                        <img src={"http://localhost:90/images/"+car.vehicleimage} class="card-img-top" alt="vehicleimage"/>
                        <div class="card-body">
                            <h5 class="card-title">Vehicle Company: {car.vehiclecompany}</h5>
                            <p class="card-text">Vehicle Model:     {car.vehiclemodel}</p>
                            <p class="card-text">Vehicle Number:    {car.vehiclenumber}</p>
                            <p class="card-text">Vehicle Price:     {car.vehicleprice}</p>
                            <Link to= {'/vehicle/rent/'+car._id}>  <button href="vehicle/rent" class="btn btn-primary">Rent</button></Link>
                            
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container> 
 )
 })
 }
            
            </div>
        )
        }
        else{
            return( 
                <div className="rootclass">
    
    
    
    
    {
     this.state.cars.map((car)=>{
     return (
    
    
    <Container> 
    
            <Row> 
                <Col > 
                    <div class="card-deck" onClick={() => alert("Please Log in to Rent")}>
                        <div class="card">
                            <img src={"http://localhost:90/images/"+car.vehicleimage} class="card-img-top" alt="vehicleimage"/>
                            <div class="card-body">
                                <h5 class="card-title">Vehicle Company: {car.vehiclecompany}</h5>
                                <p class="card-text">Vehicle Model:     {car.vehiclemodel}</p>
                                <p class="card-text">Vehicle Number:    {car.vehiclenumber}</p>
                                <p class="card-text">Vehicle Price:     {car.vehicleprice}</p>
                                <button href="vehicle/rent" class="btn btn-primary" disabled>Rent</button>
                                
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> 
     )
     })
     }
                
                </div>
            )
        }
        
    }
}

export default Car