import { Component,state,addVehicleData, inputRoman,vehicleimagehandler} from "react";
import Header from "../Header/Header"
import axios from 'axios';

class AddVehicle extends Component{

    

    state={
        vehicletype: "",
        vehiclecompany: "",
        vehiclemodel: "",
        vehiclenumber: "",
        vehicleprice: "",
        vehicleownercontact: "",
        vehicleimage:"",
        vehicleownerid:localStorage.getItem('customerid'),
        message:""
        

    }


    inputRoman = (e)=>
    this.setState({
        [e.target.name]: e.target.value
    })

    vehicleimagehandler=(e)=>{
        this.setState({
            vehicleimage:e.target.files[0]

        })
    }

    addVehicleData = (e)=>{
        e.preventDefault();
        const data = new FormData()

        data.append('vehicleimage',this.state.vehicleimage)
        data.append('vehicletype',this.state.vehicletype)
        data.append('vehiclecompany',this.state.vehiclecompany)
        data.append('vehiclemodel',this.state.vehiclemodel)
        data.append('vehiclenumber',this.state.vehiclenumber)
        data.append('vehicleprice',this.state.vehicleprice)
        data.append('vehicleownerid',this.state.vehicleownerid)
        data.append('vehicleownercontact',this.state.vehicleownercontact)

        
        axios.post("http://localhost:90/vehicle/add",data)
        .then((response)=>{
            //console.log(response)
            this.setState({
                message: response.data.message
            })
        })
        .catch(err=>{
            console.log(err)
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
                <h2>Add Vehicle</h2>
            

				<div class="form-group">
                    <label for="vehicletype" class="col-sm-3 control-label">Vehicle Type</label>

				    <select class="form-select" name='vehicletype' aria-label="Default select example" onChange={this.inputRoman} value={this.state.value}>
					    <option selected>Select Vehicle Type</option>
					    <option value="Bike">Bike</option>
					    <option value="Car">Car</option>
				    </select>
				</div>

                <div class="form-group">
                    <label for="vehiclecompany" class="col-sm-3 control-label">Vehicle Company</label>
                    <div class="col-sm-9">
                        <input type="text" id="vehiclecompany" name="vehiclecompany" placeholder="Vehicle Company" class="form-control" autofocus value={this.state.vechilecompany} onChange={this.inputRoman}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="vehiclemodel" class="col-sm-3 control-label">Vehicle Model</label>
                    <div class="col-sm-9">
                        <input type="text" id="vehiclemodel" name="vehiclemodel" placeholder="Vehicle Model" class="form-control" autofocus value={this.state.vehiclemodel} onChange={this.inputRoman}/>
                    </div>
                </div>
				<div class="form-group">
                    <label for="vehiclenumber" class="col-sm-3 control-label">Vehicle Number </label>
                    <div class="col-sm-9">
                        <input type="text" id="vehiclenumber" name="vehiclenumber" placeholder="Vehicle Number" class="form-control" value={this.state.vehiclenumber} onChange={this.inputRoman}/>
                    </div>
                </div>
				<div class="form-group">
                    <label for="vehicleprice" class="col-sm-3 control-label">Vehicle Price </label>
                    <div class="col-sm-9">
                        <input type="text" id="vehicleprice" name="vehicleprice" placeholder="Vehicle Price" class="form-control" value={this.state.vehicleprice} onChange={this.inputRoman}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="ownercontact" class="col-sm-3 control-label">Owner Contact </label>
                    <div class="col-sm-9">
                        <input type="text" id="ownercontact" name="vehicleownercontact" placeholder="Owner Contact" class="form-control" value={this.state.vehicleownercontact} onChange={this.inputRoman}/>
                    </div>
                </div>

                <div class="form-group">
                    <label for="vehicleimage" class="col-sm-3 control-label">Vehicle Image </label>
                    <div class="col-sm-9">
                        <input type="file" id="vehicleimage" name="vehicleimage" class="form-control" name= "vehicleimage" accept="image/*" value={this.vehicleimagehandler} onChange={this.vehicleimagehandler}/>
                    </div>
                </div>
				
                <p></p>
            
                <button type="submit" class="btn btn-primary btn-block" onClick={this.addVehicleData}>Add Vehicle</button>
            </form> 
        </div> 
        




            </div>

            

        )
    }
}
export default AddVehicle