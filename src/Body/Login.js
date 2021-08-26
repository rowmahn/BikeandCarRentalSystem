import { Component, state,customerLogin } from "react";
import axios from 'axios'
import {Redirect} from 'react-router-dom';

class Login extends Component{
    state={
        username: "",
        password: "",
        loginCheck: false,
        message:""
    }

    customerLogin = (e)=>{
        e.preventDefault();
        const data ={
            username: this.state.username,
            password: this.state.password
        }
        axios.post("http://localhost:90/customer/login",data)
        .then(response=>{
            console.log(response)
            this.setState({
                loginCheck : true
                
            })
            localStorage.setItem('token', response.data.customerToken)
            localStorage.setItem('customerid',response.data.customerId)
            localStorage.setItem('customertype',response.data.customertype)
            localStorage.setItem('customername',response.data.customername)
               
        })
        .catch(err=>{
            console.log(err)

            this.setState({
                message: err.response.data.errorMessage
            })
        })
    }

    render()
    {

        //redirect

        if (this.state.loginCheck === true){
            window.location.href = '/'
        }

        if(this.state.message){
            var message = this.state.message
        }
        
        return(
            <div>


<div class="container">
    <div class="alert alert-dark" role="alert" style={{color:"red", backgroundColor:"cyan"}}>

 {message}
    </div>
            <form class="form-horizontal" role="form">
                <h2> Login Portal</h2>

				
				<div class="form-group">
                    <label for="username" class="col-sm-3 control-label">Username </label>
                    <div class="col-sm-9">
                        <input type="text" id="username" placeholder="Username" class="form-control" name= "Username" value={this.state.username} onChange={(event)=>{this.setState({username: event.target.value})}} required/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Password</label>
                    <div class="col-sm-9">
                        <input type="password" id="password" placeholder="Password" class="form-control" value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}}/>
                    </div>
                </div>

                <p></p>
            
                <button type="submit" class="btn btn-primary btn-block" onClick={this.customerLogin}>Login</button>

                <p></p>

                <div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="insert" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
            </form>
        </div>


            </div>
        )
    }

}
export default Login