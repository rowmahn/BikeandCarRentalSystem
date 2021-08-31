import { event } from "jquery"
import { Component,state,sendCustomerData } from "react"
import Header from "../Header/Header"
import axios from 'axios';

class Register extends Component{

    state={
        customertype: "",
        name: "",
        address: "",
        citizenshipnumber: "",
        licencenumber: "",
        email: "",
        username: "",
        password:"",
        confirmpassword:"",
        message:"",
        registerCheck:false

    }
    sendCustomerData = (e)=>{
        e.preventDefault();
        const data = {
            customertype: this.state.value,
            name : this.state.name,
            address : this.state.address,
            citizenshipnumber : this.state.citizenshipnumber,
            licencenumber : this.state.licencenumber,
            email : this.state.email,
            username : this.state.username,
            password : this.state.password,
            confirmpassword: this.state.confirmpassword
            
        }
        
        axios.post("http://localhost:90/customer/insert",data)
        .then(response=>{
            console.log(response)
            this.setState({
                registerCheck : true
                
            })
               
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                message: err.response.data.errorMessage
            })
        })
    }
    render(){
        if (this.state.registerCheck === true){
            window.location.href = '/login'
        }

        if(this.state.message){
            var message = this.state.message
        }

        return(
            
            <div>

                <Header></Header>
                
		<div class="container">
        <div class="alert alert-dark" role="alert" style={{color:"red", backgroundColor:"cyan"}}>

{message}
   </div>
            <form class="form-horizontal" role="form">
                <h2>Customer Registration</h2>

				<div class="form-group">
                    <label for="customertype" class="col-sm-3 control-label">Customer Type</label>

				<select class="form-select" aria-label="Default select example" value={this.state.value} onChange={(event)=>{this.setState({value: event.target.value})}}>
					<option selected>Select Customer Type</option>
					<option value="Owner">Owner</option>
					<option value="Renter">Renter</option>
				  </select>
				</div>

                <div class="form-group">
                    <label for="name" class="col-sm-3 control-label">Name</label>
                    <div class="col-sm-9">
                        <input type="text" id="name" placeholder="Name" class="form-control" autofocus value={this.state.name} onChange={(event)=>{this.setState({name: event.target.value})}}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="address" class="col-sm-3 control-label">Address</label>
                    <div class="col-sm-9">
                        <input type="text" id="address" placeholder="Address" class="form-control" autofocus value={this.state.address} onChange={(event)=>{this.setState({address: event.target.value})}}/>
                    </div>
                </div>
				<div class="form-group">
                    <label for="citizenshipnumber" class="col-sm-3 control-label">Citizenship number </label>
                    <div class="col-sm-9">
                        <input type="text" id="citizenshipnumber" placeholder="Citizenship Number" class="form-control" value={this.state.citizenshipnumber} onChange={(event)=>{this.setState({citizenshipnumber: event.target.value})}}/>
                    </div>
                </div>
				<div class="form-group">
                    <label for="licencenumber" class="col-sm-3 control-label">Licence number </label>
                    <div class="col-sm-9">
                        <input type="text" id="licencenumber" placeholder="Licence Number" class="form-control" value={this.state.licencenumber} onChange={(event)=>{this.setState({licencenumber: event.target.value})}}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-3 control-label">Email* </label>
                    <div class="col-sm-9">
                        <input type="email" id="email" placeholder="Email" class="form-control" name= "email" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}}/>
                    </div>
                </div>
				<div class="form-group">
                    <label for="username" class="col-sm-3 control-label">Username* </label>
                    <div class="col-sm-9">
                        <input type="text" id="username" placeholder="Username" class="form-control" name= "Username" value={this.state.username} onChange={(event)=>{this.setState({username: event.target.value})}}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Password*</label>
                    <div class="col-sm-9">
                        <input type="password" id="password" placeholder="Password" class="form-control" name="Password" value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="confirmpassword" class="col-sm-3 control-label">Confirm Password*</label>
                    <div class="col-sm-9">
                        <input type="password" id="confirmpassword" placeholder="Confirm Password" class="form-control" value={this.state.confirmpassword} onChange={(event)=>{this.setState({confirmpassword: event.target.value})}}/>
                    </div>
                </div>
            
                <p></p>
            
                <button type="submit" class="btn btn-primary btn-block" onClick={this.sendCustomerData}>Register</button>
            </form> 
        </div> 




            </div>

        )
    }
}

export default Register