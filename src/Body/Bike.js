
import { Component,state,React,rentBike } from "react";

import axios from 'axios'
import {  Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Bike extends Component{
    state = {
        bikes : []
        }
        componentDidMount(){
        axios.get("http://localhost:90/vehicle/fetchByType/Bike")
        .then((response)=>{
        console.log(response)
        this.setState({
        bikes : response.data.data
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
 this.state.bikes.map((bike)=>{
 return (
    

<Container> 
    <Row>
    
            <Col xs={6} md={4} > 
                <div class="card-deck">
                    <div class="card">
                        <img src={"http://localhost:90/images/"+bike.vehicleimage} class="card-img-top" alt="vehicleimage"/>
                        <div class="card-body">
                            <h5 class="card-title">Vehicle Company: {bike.vehiclecompany}</h5>
                            <p class="card-text">Vehicle Model:     {bike.vehiclemodel}</p>
                            <p class="card-text">Vehicle Number:    {bike.vehiclenumber}</p>
                            <p class="card-text">Vehicle Price:     {bike.vehicleprice} per day</p>
                          <Link to= {'/vehicle/rent/'+bike._id}><button class="btn btn-primary" id="rent" >Rent</button></Link>  

                        
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
this.state.bikes.map((bike)=>{
return (


<Container> 
    <Row> 
        <Col xs={6} md={4} onClick={() => alert("Please Log in to Rent")}> 
            <div class="card-deck">
                <div class="card">
                    <img src={"http://localhost:90/images/"+bike.vehicleimage} class="card-img-top" alt="vehicleimage"/>
                    <div class="card-body">
                        <h5 class="card-title">Vehicle Company: {bike.vehiclecompany}</h5>
                        <p class="card-text">Vehicle Model:     {bike.vehiclemodel}</p>
                        <p class="card-text">Vehicle Number:    {bike.vehiclenumber}</p>
                        <p class="card-text">Vehicle Price:     {bike.vehicleprice} per day</p>
                    
                        <button class="btn btn-primary" id="rent" disabled>Rent</button>
                    
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

export default Bike