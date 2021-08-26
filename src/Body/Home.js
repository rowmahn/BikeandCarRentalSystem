import { Component } from "react"

class Home extends Component{
    render(){
        return(
            <div>
			<section id="banner">
				<div class="content">
					<h1>Bike And Car Rental System</h1>
					<p>Nepal's First Online Rental System</p>
					<ul class="actions">
						<li><a href="/register" class="button scrolly">Register Here</a></li>
					</ul>
				</div>
			</section>

		
			<section id="one" class="wrapper">
				<div class="inner flex flex-3">
					<div class="flex-item left">
						<div>
							<h3>Rent Bike</h3>
							<p>Rent available bike for as many as day you want by staying at your place.</p>
						</div>
						<div>
							<h3>Rent Car</h3>
							<p>Rent available car for as many as day you want with easy process at reasonable price.</p>
						</div>
					</div>
					<div class="flex-item image fit round">
						<img src={process.env.PUBLIC_URL + '/Image/bikecar.jpeg'} alt="" />
					</div>
					<div class="flex-item right">
						<div>
							<h3>Keep your own vehicle on Rent</h3>
							<p>Upload your private Bike/Car, give that vehicle on rent and earn money.</p>
						</div>
						<div>
							<h3>Deliver at your place</h3>
							<p>Rent from your house, Get delivered at your home</p>
						</div>
					</div>
				</div>
			</section>

		
			<section id="two" class="wrapper style1 special">
				<div class="inner">
					<h2>Words from CEO</h2>
					<figure>
					    <blockquote>
					        "Our mission is to promote remote rental system. At just few clicks, you can either give your vehicle on rent and earn money
							or easy rent bike/car."
					    </blockquote>
					    <footer>
					        <cite class="author">Roman Dulal</cite>
					        <cite class="company">CEO, Bike and Car Rental Sytem</cite>
					    </footer>
					</figure>
				</div>
			</section>

		
			<section id="three" class="wrapper">
				<div class="inner flex flex-3">
					<div class="flex-item box">
						<div class="image fit">
							<img src={process.env.PUBLIC_URL + '/Image/admin.png'} alt=""/>
						</div>
						<div class="content">
							<h3>Admin</h3>
							<p>Admin has all the authorization of the system. Admin can perform CRUD operation for customer and vehicle.</p>
						</div>
					</div>
					<div class="flex-item box">
						<div class="image fit">
							<img src={process.env.PUBLIC_URL + '/Image/renter.jpeg'} alt="" />
						</div>
						<div class="content">
							<h3>Renter</h3>
							<p>Renter is a customer type who can rent vehicle from the system. It is necessary to log into dashboard and then rent.</p>
						</div>
					</div>
					<div class="flex-item box">
						<div class="image fit">
							<img src={process.env.PUBLIC_URL + '/Image/owner.png'} alt="" />
						</div>
						<div class="content">
							<h3>Owner</h3>
							<p>Owner is a customer type who can post his/her vehicle for rent. He also can rent the given vehicle.</p>
						</div>
					</div>
				</div>
			</section>

	
            </div>
        )
    }
}

export default Home