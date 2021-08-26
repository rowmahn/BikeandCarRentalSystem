import { Component,logout } from "react";
import Navbar from "./Navbar";

class Header extends Component{

    logout = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        window.location.href="/"
      }

    render(){

        if (localStorage.getItem('token')){
           var header= <a href="/login" onClick={this.logout} class="button alt">Log Out</a>
        }
        else{
            var header= <a href="/login" class="button alt">Log In</a>
        }

        return(
            <div>
                <header id="header">
					
						
                    <Navbar>
                        
                    </Navbar>
                       
					
					<nav class="right">
						{header}
                        
					</nav>
                    
				</header>


		
				

            </div>
        )
    }
}

export default Header