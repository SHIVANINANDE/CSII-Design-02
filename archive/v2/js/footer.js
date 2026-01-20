class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div style="position: relative; margin-top: 10px; height: 140px;">
								<div class="wave2"></div>
							</div> 
						<footer>							
		 <div class="footer-area">			
		<div class="container">
		  <div class="row">
		 <div class="col-md-3 col-xs-12">
		   <div class="footer-content">
		  <h3>Canadian Systems International Inc</h3>
		  <p>C-56, A/2, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh-201309</p>
		  <p>Mob. : +91-9643323943</p>
		  <p>Tel. : (+91 120) 480 5300</p>
		   </div>
		 </div> <!-- col  md 4 closed -->

		 <div class="col-md-3 col-xs-12">
		   <div class="footer-content">
		  <h6>Products</h6>
		  <ul>
					<li><a href="hrms.html"><span class="fa fa-angle-right"></span> TUBA HRMS </a></li>
					<li><a href="finance.html"><span class="fa fa-angle-right"></span> TUBA FINANCE MANAGMENET</a></li>
					<li><a href="pin.html"><span class="fa fa-angle-right"></span> TUBA PURCHASE INVENTORY</a></li>
					<li><a href="customize-erp.html"><span class="fa fa-angle-right"></span> TUBA TUBA CUSTOMIZE ERP</a></li>
					<li><a href="mobile-app.html"><span class="fa fa-angle-right"></span> TUBA MOBILE APPLICATION</a></li>
					<li><a href="payment-gateway.html"><span class="fa fa-angle-right"></span> PAYMENT GATEWAY</a></li>
					<li><a href="project mangement.html"><span class="fa fa-angle-right"></span> TUBA PROJECT MANAGEMENT</a></li>
					<li><a href="custom-api.html"><span class="fa fa-angle-right"></span> CUSTOM API</a></li>
					<li><a href="realestate-IT-services.html"><span class="fa fa-angle-right"></span> Real Estate IT Services</a></li>
		  </ul>
		   </div>
		 </div> <!-- col md 3 -->

		 <div class="col-md-3 col-xs-12">
		   <div class="footer-content">
		  <h6>Support</h6>
		  <ul>
			<li><a href="inquiry.html"><span class="fa fa-angle-right"></span> Sales Support</a></li>
			<li><a href="inquiry.html"><span class="fa fa-angle-right"></span> Technical Support</a></li>
		  </ul>

		 

		   </div>
		 </div> <!-- col md 3 -->

		 <div class="col-md-3 col-xs-12">
		   <div class="footer-content">
		  <h6>Useful Links</h6>
		  <ul>
			<li><a href="aboutus.html"><span class="fa fa-angle-right"></span> About Us </a></li>
			<li><a href="why-csii.html"><span class="fa fa-angle-right"></span> Why CSII</a></li>
			<li><a href="vision-mission.html"><span class="fa fa-angle-right"></span> Mission & Vision</a></li>
			<li><a href="our-team.html"><span class="fa fa-angle-right"></span> Our Team </a></li>
		  </ul>
		   </div>
		 </div> <!-- col md 3 -->

		  </div> <!-- row closed -->
		</div> <!-- container closed -->
		 </div> <!-- footer top closed -->

		 <div class="footer-copy-area">
		<div class="container">
		  <p>© Copyright 2022, CSII Solutions (P) Ltd.. All rights reserved</p>
		  <div class="footer-social-icn">
		 <li><a href="#" target="_blank" rel="nofollow"><i class="fa fa-facebook"></i></a></li>
		 <li><a href="#" target="_blank" rel="nofollow"><i class="fa fa-twitter"></i></a></li>
		 <li><a href="#" target="_blank" rel="nofollow"><i class="fa fa-linkedin"></i></a></li>
		  </div>
		</div>
		 </div> <!-- footer copy area closed -->

		</footer>

		<div class="popup-bt"><a href="inquiry.html">Quick Enquiry</a></div>   
      `;
    }
  }
  
  customElements.define('footer-js', Footer);