import React from "react";
import Footer from "../../components/footer/Footer";
import "./Contact.css";

function Contact(){
   return(
      <>
      <div id="contact">
         <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.215572224239!2d151.20573807543846!3d-33.88410151985103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae21890a8bf5%3A0xbaf1bbbf6f3839f1!2sCentral%20Station%2C%20Elizabeth%20St%2C%20Stand%20E!5e0!3m2!1sen!2sau!4v1709433065227!5m2!1sen!2sau" 
         width="60%" 
         height="500" 
         style={{border:"0"}}
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"></iframe>
         <center><h1>Contact Us</h1></center>
         <p>
         Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
		   felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia.
			Etiam a mi quis arcu varius condimentum
         </p>
         <form action="#" method="post" class="form">
				<div id="inputs">
					<div>
						   <input 
                     name="name" 
                     type="text" 
                     className="form-control" 
                     id="name" 
                     placeholder="Full Name"/>
					</div>
					<div>
						<input 
                  type="email" 
                  name="email" 
                  className="form-control" 
                  id="mail" 
                  placeholder="Email"/>
					</div>

					<div>
                  <input 
                  type="tel" 
                  className="form-control"
                  id="phone" 
                  name="phone" 
                  placeholder="Phone Number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
					</div>
				</div>
				<div id="message">
					<textarea name="message" rows="6" className="formcontrol" id="comment" placeholder="Your message here..."></textarea>
				</div>
         </form>
         <button type="submit" className ="btn">Send</button><br/>
      </div>



      <Footer/>
      </>
   )
}

export default Contact;