import { Component } from "react";
import Header from "../Header/Header";

var rentindate = localStorage.getItem('rentindate');
var rentoutdate = localStorage.getItem('rentoutdate')

var rentin = Date.parse(rentindate)
var rentout = Date.parse(rentoutdate)

var diff = Math.abs(rentin - rentout)
var rentaldays = diff/(1000*60*60*24)
const deliverylocation = localStorage.getItem('deliverylocation')
const rate = localStorage.getItem('rate')
var total = rentaldays*rate
const renter = localStorage.getItem('customername')
const customertype = localStorage.getItem('customertype')
class Bill extends Component{
    
    render(){
      
        return(
          
            <div>
                <Header></Header>
                <div class="container">
                    <h2>Bill</h2>

                    <table class="table-resp">
 
  
  <tbody>
    <tr>
      <td>Date</td>
      <td>{new Date().toLocaleString() + ''}</td>
    </tr>
    <tr>
      <td>Renter Name</td>
      <td>{renter}</td>
    </tr>
    <tr>
      <td>Customer Type</td>
      <td>{customertype}</td>
    </tr>
    <tr>
      <td>Rent In Date</td>
      <td>{rentindate}</td>
    </tr>
    <tr>
      <td>Rent Out Date</td>
      <td>{rentoutdate}</td>
    </tr>
    <tr>
      <td>Delivery Location</td>
      <td>{deliverylocation}</td>
    </tr>
    <tr>
      <td>Rate per day</td>
      <td>Rs {rate}</td>
    </tr>
    <tr>
      <td>Number of rental days</td>
      <td>{rentaldays} day/s</td>
    </tr>
    <tr>
      <td>Total Price</td>
      <td>Rs {total}</td>
    </tr>
    
  </tbody>
</table>
                    
                </div>


                <a href="/confirmationpage"><button>Confirm</button></a>
                <p></p>
            </div>
        )
    }
}
export default Bill