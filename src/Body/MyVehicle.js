import { Component,state,React,deleteVehicle } from "react";

import axios from 'axios'
import {  Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyVehicle extends Component{
    state = {
        myvehicles : [],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
        }
        componentDidMount(){
        axios.get("http://localhost:90/vehicle/fetch1",this.state.config)
        .then((response)=>{
        console.log(response)
        this.setState({
        myvehicles : response.data.data
        })
        })
        .catch((err)=>{
        console.log(err.response)
        })
        }

        deleteVehicle=(vid)=>(
            axios.delete('http://localhost:90/vehicle/delete/'+vid,this.state.config)
            
        )
        .then((response)=>{
            this.setState({
                deleteCheck : true,
                message: response.data.message
                
            })
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })

    render(){
        if (this.state.deleteCheck === true){
            window.location.href = '/myvehicle'
        }
        if(this.state.message){
            var message = this.state.message
        }
        return(
            <div className="rootclass">


{
 this.state.myvehicles.map((vehicle)=>{
 return (

    


<Container> 
<div class="alert alert-dark" role="alert" style={{color:"red", backgroundColor:"cyan"}}>

{message}
   </div>
        <Row> 
            <Col xs={6} md={4}> 
                <div class="card-deck">
                    <div class="card">
                        <img src={"http://localhost:90/images/"+vehicle.vehicleimage} class="card-img-top" alt="vehicle image"/>
                        <div class="card-body">
                            <h5 class="card-title">Vehicle Company: {vehicle.vehiclecompany}</h5>
                            <p class="card-text">Vehicle Model:     {vehicle.vehiclemodel}</p>
                            <p class="card-text">Vehicle Number:    {vehicle.vehiclenumber}</p>
                            <p class="card-text">Vehicle Price:     {vehicle.vehicleprice} per day</p>
                            
                            <button  class="btn btn-primary" onClick={this.deleteVehicle.bind(this,vehicle._id)}>Delete</button>
                            <p></p>
                            <p><Link to ={'/myvehicle/update/'+vehicle._id}>Update</Link></p>

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

export default MyVehicle