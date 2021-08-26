import { Component } from "react";

class Footer extends Component{
    render(){
        return(
                <footer id="footer">
				    <div class="inner">
					    <h2>Get In Touch</h2>
					    <ul class="actions">
						    <li><span class="icon fa-phone"></span> <a href="#">(000) 000-0000</a></li>
						    <li><span class="icon fa-envelope"></span> <a href="#">info@bikecarrental.com.np</a></li>
						    <li><span class="icon fa-map-marker"></span> Jadibuti, Koteshwore, Kathmandu</li>
					    </ul>
				    </div>
				    <div class="copyright">
					    &copy; Bike and Car Rental Sytem 2021
                    </div>
			    </footer>
        	)
    }
}

export default Footer;