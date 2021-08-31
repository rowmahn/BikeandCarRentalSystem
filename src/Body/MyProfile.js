import axios from "axios";
import { Component,state,updateData,changeHandler } from "react";
import { FormControl } from "react-bootstrap";
import { Redirect } from "react-router";

class MyProfile extends Component{
    
    state={
        customertype:"",
        name: "",
        address:"",
        citizenshipnumber: "",
        licencenumber: "",
        email: "",
        username: "",
        password:"",
        profileimage:"",
        config:{
            headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}
        },
        message:""

    }

    componentDidMount(){
        
        axios.get('http://localhost:90/customer/profile',this.state.config)
        .then((response)=>{
            //console.log(response.data.customerData.customertype)
            this.setState({
                customertype: response.data.customerData.customertype,
                name: response.data.customerData.name,
                address : response.data.customerData.address,
                citizenshipnumber : response.data.customerData.citizenshipnumber,
                licencenumber : response.data.customerData.licencenumber,
                email : response.data.customerData.email,
                username : response.data.customerData.username,
                password : response.data.customerData.password,
                profileimage: response.data.customerData.profileimage,
                
                

                
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateData=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:90/customer/update/',this.state,this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                message : response.data.message
                
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(this.state.message){
            var message = this.state.message
        }

        if(!localStorage.getItem('token')){
            return <Redirect to= "/customer/login"/>
        }
        return(
            
            <div class="container">
                <div class="alert alert-dark" role="alert" style={{color:"red", backgroundColor:"cyan"}}>

{message}
   </div>
            <form class="form-horizontal" role="form">
                <h2>My Profile</h2>
                

                
                    <img src={'http://localhost:90/'+this.state.profileimage} alt="profileimage" style={{height:"200px",width:"200px"}}/>
                 

				<div class="form-group">
                    <label for="Customer Type" class="col-sm-3 control-label">Customer Type</label>

				    <p>{this.state.customertype}</p>
				</div>
                <div class="form-group">
                    <label for="citizenshipnumber" class="col-sm-3 control-label">Citizenship Number </label>
                    <div class="col-sm-9">
                    <p>{this.state.citizenshipnumber}</p>
                    </div>
                </div>
				<div class="form-group">
                    <label for="licencenumber" class="col-sm-3 control-label">Licence number </label>
                    <div class="col-sm-9">
                    <p>{this.state.licencenumber} </p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="name" class="col-sm-3 control-label">Name</label>
                    <div class="col-sm-9">
                    <FormControl type="text" name= "name"value={this.state.name} onChange={(event)=>{this.setState({name: event.target.value})}} />
                    </div>
                </div>
                <div class="form-group">
                    <label for="address" class="col-sm-3 control-label">Address</label>
                    <div class="col-sm-9">
                    <FormControl type="text" name= "address" value={this.state.address} onChange={(event)=>{this.setState({address: event.target.value})}} />
                    </div>
                </div>
				
                <div class="form-group">
                    <label for="email" class="col-sm-3 control-label">Email </label>
                    <div class="col-sm-9">
                    <FormControl type="text" name= "email" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}} />
                    </div>
                </div>
				<div class="form-group">
                    <label for="username" class="col-sm-3 control-label">Username</label>
                    <div class="col-sm-9">
                    <FormControl type="text" name= "username" value={this.state.username} onChange={(event)=>{this.setState({username: event.target.value})}} />
                    </div>
                </div>
                
            
            

                <p></p>

                <button type="submit" class="btn btn-primary btn-block" onClick={this.updateData} >Update</button>
            </form>
        </div>


            
            )
    }
        
}


export default MyProfile