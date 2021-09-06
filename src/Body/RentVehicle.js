import { Component,state,singlevehicle,changeHandler,rentVehicle } from "react";
import Header from "../Header/Header";
import {  Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

class RentVehicle extends Component{
    state = {
        
        
        vehicleimage:"",
        vehiclecompany:"",
        vehiclemodel:"",
        vehiclenumber:"",
        vehicleprice:"",
        id: this.props.match.params.id,

        rentindate:"",
        rentoutdate:"",
        deliverylocation:""
       
        }
        changeHandler = (e)=>
        this.setState({
            [e.target.name]: e.target.value
        })
        rentVehicle=(e)=>{
            var rentin = this.state.rentindate
            var rentout = this.state.rentoutdate
            var df = Math.abs(rentin-rentout)

            window.location.href = "/bill"
            
            console.log(df/(1000*60*60*24))
        
            localStorage.setItem('rentindate', this.state.rentindate)
            localStorage.setItem('rentoutdate', this.state.rentoutdate)
            localStorage.setItem('deliverylocation', this.state.deliverylocation)
            localStorage.setItem('rate', this.state.vehicleprice)

        }


        componentDidMount(){
            axios.get("http://localhost:90/vehicle/single/"+this.state.id)
            .then((response)=>{
                console.log(this.state.vehiclecompany)
            this.setState({
           
            vehicleimage: response.data.data.vehicleimage,
            vehiclecompany : response.data.data.vehiclecompany,
            vehiclemodel : response.data.data.vehiclemodel,
            vehiclenumber: response.data.data.vehiclenumber,
            vehicleprice: response.data.data.vehicleprice
            })
            
            })
            .catch((err)=>{
            console.log(err)
            })
            }


    render(){
        return(
            <div>

                <Header></Header>

                <div class="container">
                    
                <h2>Rent Vehicle</h2>

                <Col xs={6} md={4}> 
                <div class="card-deck">
                    <div class="card">
                        <img src={"http://localhost:90/images/"+this.state.vehicleimage} class="card-img-top" alt="vehicleimage"/>
                        <div class="card-body">
                            <h5 class="card-title">Vehicle Company: {this.state.vehiclecompany}</h5>
                            <p class="card-text">Vehicle Model:     {this.state.vehiclemodel}</p>
                            <p class="card-text">Vehicle Number:    {this.state.vehiclenumber}</p>
                            <p class="card-text">Vehicle Price:     {this.state.vehicleprice} per day</p>
                          

                        
                        </div>
                    </div>
                </div>
            </Col>

            <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="rentindate" class="col-sm-3 control-label">Rent In Date</label>
                <div class="col-sm-9">
                 <input type="date" id="rentindate" name="rentindate"  class="form-control"onChange={this.changeHandler} value={this.state.value} />
                </div>
            </div>
            <p></p>
            <div class="form-group">
                <label for="rentoutdate" class="col-sm-3 control-label">Rent Out Date</label>
                <div class="col-sm-9">
                    <input type="date" id="rentoutdate" name="rentoutdate"  class="form-control" onChange={this.changeHandler} value={this.state.value} />
                </div>
            </div>
            <p></p>
            <div class="form-group">
                <label for="deliverylocation" class="col-sm-3 control-label" autofocus>Delivery Location</label>
                <div class="col-sm-9">
                    <input type="text" id="deliverylocation" name="deliverylocation"  class="form-control" onChange={this.changeHandler} value={this.state.value} />
                </div>
            </div>
            <p></p>
            
    
           <Link to="/bill"><button type="submit" class="btn btn-primary btn-block"  onClick={this.rentVehicle} >Rent</button></Link> 
            
            
        </form>


        </div> 

        


                
            </div>
        )
    }
}
export default RentVehicle