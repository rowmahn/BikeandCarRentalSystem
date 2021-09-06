import React,{ Component,state,changeHandle,updateData} from "react";
import Header from "../Header/Header"
import axios from 'axios';

class UpdateVehicle extends Component{

    state={
        vehicletype: "",
        vehiclecompany: "",
        vehiclemodel: "",
        vehiclenumber: "",
        vehicleprice: "",
        vehicleownercontact: "",
        
        id: this.props.match.params.id

    }

    changeHandle=(e)=>{
        this.setState({
            [e.target.name]: e.target.value      
         });
    }

    componentDidMount(){
        axios.get('http://localhost:90/vehicle/single/'+this.state.id)
        .then((response)=>{
           // console.log(response.data.data.vehicleownercontact)
            this.setState({
                vehicletype: response.data.data.vehicletype,
                vehiclecompany: response.data.data.vehiclecompany,
                vehiclemodel: response.data.data.vehiclemodel,
                vehiclenumber: response.data.data.vehiclenumber,
                vehicleprice: response.data.data.vehicleprice,
                vehicleownercontact: response.data.data.vehicleownercontact,
               
            })

        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    updateData=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:90/vehicle/update/'+this.state.id,this.state)
        .then((response)=>{
            console.log(this.state.vehicleprice)

            this.setState({
                message: response.data.message
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
        return(
            
            <div>

                <Header></Header>
                
		<div class="container">
        <div class="alert alert-dark" role="alert" style={{color:"red", backgroundColor:"cyan"}}>

{message}
   </div>
            <form class="form-horizontal" role="form">
                <h2>Update Vehicle</h2>

				<div class="form-group">
                    <label for="vehicletype" class="col-sm-3 control-label">Vehicle Type</label>

				    <div class="col-sm-9">
                        <p>{this.state.vehicletype}</p>
                    </div>
				</div>

                <div class="form-group">
                    <label for="vehiclecompany" class="col-sm-3 control-label">Vehicle Company</label>
                    <div class="col-sm-9">
                        <input type="text" id="vehiclecompany" name="vehiclecompany" class="form-control" autofocus value={this.state.vehiclecompany} onChange={(event)=>{this.setState({vehiclecompany: event.target.value})}}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="vehiclemodel" class="col-sm-3 control-label">Vehicle Model</label>
                    <div class="col-sm-9">
                        <input type="text" id="vehiclemodel" name="vehiclemodel" placeholder="Vehicle Model" class="form-control" autofocus value={this.state.vehiclemodel} onChange={(event)=>{this.setState({vehiclemodel: event.target.value})}}/>
                    </div>
                </div>
				<div class="form-group">
                    <label for="vehiclenumber" class="col-sm-3 control-label">Vehicle Number </label>
                    <div class="col-sm-9">
                        <input type="text" id="vehiclenumber" name="vehiclenumber" placeholder="Vehicle Number" class="form-control" value={this.state.vehiclenumber} onChange={(event)=>{this.setState({vehiclenumber: event.target.value})}}/>
                    </div>
                </div>
				<div class="form-group">
                    <label for="vehicleprice" class="col-sm-3 control-label">Vehicle Price </label>
                    <div class="col-sm-9">
                        <input type="text" id="vehicleprice" name="vehicleprice" placeholder="Vehicle Price" class="form-control" value={this.state.vehicleprice} onChange={(event)=>{this.setState({vehicleprice: event.target.value})}}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="ownercontact" class="col-sm-3 control-label">Owner Contact </label>
                    <div class="col-sm-9">
                        <input type="text" id="ownercontact" name="vehicleownercontact" placeholder="Owner Contact" class="form-control" value={this.state.vehicleownercontact} onChange={(event)=>{this.setState({vehicleownercontact: event.target.value})}}/>
                    </div>
                </div>

                {/* <div class="form-group">
                    <label for="vehicleimage" class="col-sm-3 control-label">Vehicle Image </label>
                    <div class="col-sm-9">
                        <input type="file" id="vehicleimage" name="vehicleimage" class="form-control" name= "vehicleimage" accept="image/*" value={this.state.vehicleimage} />
                    </div>
                </div> */}
				
                <p></p>
            
                <button type="submit" class="btn btn-primary btn-block" onClick={this.updateData}>Update Vehicle</button>
            </form> 
        </div> 




            </div>

        )
    }


}

export default UpdateVehicle;