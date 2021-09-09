import { Component,state } from "react";

import { Redirect } from "react-router-dom"

class ConfirmationPage extends Component{

    state = {
        redirect: false
      }
    
      componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
      }
    
      componentWillUnmount() {
        clearTimeout(this.id)
      }
    
      render() {
          
        return this.state.redirect
          ? <Redirect to="/" />
          : <div>
              <h2>Congratulation!!! Your vehicle has been successfully rented!!!</h2>

              <p></p>

              <p>This page redirects in 5 sec</p>
          </div>
          
      }

}
export default ConfirmationPage