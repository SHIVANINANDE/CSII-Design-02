class Footer extends HTMLElement {
 constructor() {
   super();
 }

 connectedCallback() {
   this.innerHTML = `
   <section class="callofaction pt-5" data-aos="fade-up" data-aos-duration="300">
    <div class="container mt-5">
      <h3 class="heading3 py-4" data-aos="fade-right" data-aos-duration="500"><span class="bg-border d-inline-block p-3">Let's Work</span> </h3>
      <h2 class="heading1" data-aos="fade-right" data-aos-duration="700">
        Experience & innovative <br>
        <span>solutions for ERP Module</span>
      </h2>

      <a class="btn btn-outline-explore mt-3 " href="#callback" data-bs-toggle="modal" data-aos="fade-right" data-aos-duration="900">
        Let's Work Together <i class="fa-duotone fa-arrow-right"></i>
      </a>
      <p class="text-end position-relative work-img mt-lg-5" data-aos="fade-up" data-aos-duration="1200">
        <img src="images/img-1.jpg" alt="contact csii" class="img-fluid rounded-pill">
      </p>
    </div>
  </section>
  
  <footer class="footer mt-5 font-roboto overflow-hidden">
   <section class="mb-4 text-center text-sm-start foot1">
       <div class="container">
           <div class="row">
               <div class="col-md-3 col-sm-6" data-aos="fade-up-right" data-aos-duration="700">
                   <h4 class="f-heading">Industry Solutions</h4>
                   <ul class="list-unstyled hover-underlineText-animation">
                       <li><a href="hrms.html">Tuba Hrms</a></li>
                       <li><a href="finance.html">Tuba Finance Management</a></li>
                       <li><a href="pin.html">Tuba Purchase Inventory</a></li>
                       <li><a href="customize-erp.html">Tuba Tuba Customize Erp</a></li>
                       <li><a href="mobile-app.html">Tuba Mobile Application</a></li>
                       <li><a href="payment-gateway.html">Payment Gateway</a></li>
                       <li><a href="customized-api.html">Customized API</a></li>
                       <li><a href="project-mangement.html">Tuba Project Management</a></li>
                       <li><a href="realestate-IT-services.html">Real Estate It Services</a></li>
                       <li><a href="e-signature.html">TUBA e-Signature</a></li>
                       <li><a href="">SAP Services</a></li>
                   </ul>
               </div>
               <div class="col-md-2 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                   <h4 class="f-heading">Discover More</h4>
                   <ul class="list-unstyled hover-underlineText-animation">                   
                      <li><a href="about-us.html">About Us</a></li>
                       <li><a href="why-csii.html">Why CSII</a></li>
                       <li><a href="our-team.html">Our Team</a></li>
                       <li><a href="tuba.html">TUBA Solution</a></li>
                      <!-- <li><a href="career.html">Careers</a></li> -->
                       <li><a href="digital-marketing.html">Digital Marketing</a></li>
                       <li><a href="pricing.html">Pricing</a></li>
                       <li><a href="contacts.html">Contact Us</a></li>
                   </ul>
               </div>
               <div class="col-md col-sm-6" data-aos="fade-up" data-aos-duration="1400">
                   <h4 class="f-heading">Resources</h4>
                   <ul class="list-unstyled hover-underlineText-animation">
                       <li><a href="enquiry.html">Sale Support</a></li>
                       <li><a href="enquiry.html">Technical Support</a></li>
                   </ul>

                   <h4 class="f-heading mt-5">Follow Us On</h4>
                   <ul class="list-unstyled social-link">
                     <!-- <li class="fb">
                       <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
                     </li>
                     <li class="insta">
                       <a href="https://www.instagram.com/csii.india/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                     </li>  -->                        
                     <li class="tw">
                       <a href="https://twitter.com/csiiIndiaPvtLtd" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                     </li>  
                     <li class="li">
                       <a href="https://www.linkedin.com/in/csii-india-pvt-ltd/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                     </li>                        
                   </ul>
               </div>                    
               <div class="col-md col-sm-6" data-aos="fade-up-left" data-aos-duration="700">  
                 <p><img src="images/logo/csii-tuba-enterprise-govt-private.png" alt="csii-tuba logo" class="img-fluid w-50 f-logo"></p>

                 <h4 class="f-heading">Canadian Systems International Inc</h4>
                 
                 <div class="mb-3 d-flex">
                   <div class="flex-shrink-0">
                     <i class="fa-duotone fa-location-dot fa-xl mt-3"></i>
                     <box-icon name='map-pin' animation='tada' ></box-icon>
                   </div>
                   <div class="flex-grow-1 ms-2">
                     C-56, A/2, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh - 201309
                   </div>
                 </div>

                 <ul class="list-unstyled">
                   <li>
                     <i class="fa-duotone fa-phone-volume me-2"></i> +91 - <span class="font-size-xxl text-gray-800">96433 23943</span>
                   </li>
                 </ul>

                 <h4 class="f-heading mt-4">Global Presence</h4>
                 <ul class="list-unstyled global-presence">
                   <li>
                     <a href="javascript:void(0);">
                       <img class="img-fluid hvr-wobble-vertical" src="images/flag/flag-Toronto.png" alt="india">                              
                     </a>
                     <div class="font-size-sssm text-center mt-1 black-text">Toronto</div>
                   </li>
                   
                   <li>
                     <a href="javascript:void(0);">
                       <img class="img-fluid hvr-wobble-vertical" src="images/flag/flag-india.png" alt="Nigeria">
                     </a>
                     <div class="font-size-sssm text-center mt-1 black-text">Delhi</div>
                   </li>
                   <li>
                     <a href="javascript:void(0);">
                       <img class="img-fluid hvr-wobble-vertical" src="images/flag/flag-bahrain.png" alt="Senegal Flag">
                     </a>
                     <div class="font-size-sssm text-center mt-1 black-text">Manama</div>
                   </li>
                   <li>
                     <a href="javascript:void(0);">
                       <img class="img-fluid hvr-wobble-vertical" src="images/flag/flag-dakar.png" alt="Senegal Flag">
                     </a>
                     <div class="font-size-sssm text-center mt-1 black-text">Dakar</div>
                   </li>
                 </ul>
               </div>
           </div>
       </div>
   </section>
   <section class="bg-grey py-4 text-center foot2">
     <div class="container">
       <div class="border-bottom font-size-sm pb-2">
         <i class="fa-regular fa-copyright mr-1"></i> Copyright 2023, CSII India (P) Ltd. All rights reserved &nbsp; | &nbsp; <a href="privacy-policy.html">Privacy Policy</a> &nbsp; | &nbsp; <a href="terms-and-conditions.html">Terms & Conditions</a>
       </div>

       <div class="font-size-xxs text-gray-600 mt-2">
         The rights to all trademarks, images, videos and logos belong to its exclusive owners. They are being used on this site for reference purpose only. Clients : Dakar, Toronto, Canada, UAE, Dubai, Delhi, Gurugram, Noida, Dehradun, Rajasthan, Uttar Pradesh.
       </div>
       <div class="text-gray-600 font-size-sssm pt-1">
         Rated 4.8 out of 5.0 by 378+ CSII India clients on over 380+ projects
         <br>
         <img src="images/logo/cerified-cmmi-logo2.png" alt="logo" class="img-fluid w-50 opacity-75 mt-2">
       </div>            
     </div>
   </section>
  </footer> 

  <span class="rounded-circle shadow-8dp red darken-1 text-white d-inline-block position-fixed scrollTop opacity-0 hvr-pulse hvr-float-shadow" onclick="scrollToTop()"><i class="fa-duotone fa-arrow-up fa-xl"></i></span>

  <div class="wordsapp-wrap position-fixed hvr-float-shadow">
      <a href="https://wa.me/919871721666?text=Hello%20CSII!!%20I%20Have%20some%20Query!!" class="text-white d-inline-block rounded-circle shadow-8dp hvr-pulse" target="_blank"><i class="fa-brands fa-whatsapp fa-2x"></i></a>
  </div>

  <!-- Schedule a Call Back Modal -->
 <div class="modal fade popup-style1" id="callback" tabindex="-1" role="dialog" aria-labelledby="callbackLabel" aria-hidden="true">
   <div class="modal-dialog modal-xl" role="document">
       <div class="modal-content pt-5">
           <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
           </button>
           <div class="clearfix"></div>
           
           <div class="modal-body">
               <div class="popup-canvas">
                   <div class="row">
                       <div class="col-xl-4 d-none d-md-block">
                           <div class="leftside p-5 text-center">
                               <h2 class="yellow-text text-lighten-2 h1 font-weight-900 font-nunito">TUBA ERP</h2>
                               <h2 class="font-weight-400 border-top pt-3">Total Universal Business Automation</h2>
                               <h6 class="font-weight-bold border-bottom pb-3 text-uppercase">Enterprise Resource Planning</h6>

                               <p class="h6 font-weight-300">Hundreds of government & Private agencies trust TUBA ERP as their enterprise automation. If you’re considering leveraging <strong>TUBA</strong> or Just want more information, we’re here to help.</p>
                           </div>
                       </div>
                       <div class="col-xl-8 position-relative">
                           <div class="popup-canvas-white mb-5">
                               <h2 class="text-uppercase text-center">Request a call back</h2>
                               
                               <div class="or d-none d-md-block">
                                   <span>We are here to help! Simply drop a enquiry e-mail Us</span>
                               </div>

                               <p><strong>Drop your Query Message e-mail to</strong>: <a href="mailto:sales@csii.in?cc=dsa@csii.in&subject=REQUEST A CALL BACK" class="red-text">CSII INDIA, Sales Department</a>, Our team schedule Call back. Thanks for your interest.</p>

                               <form>
                               <div class="row">
                                <div class="col-md-6">
                                  <div class="form-floating mb-3 shadow">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Your Name">
                                    <label for="floatingInput">Your Name</label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-floating mb-3 shadow">
                                    <input type="number" class="form-control" id="floatingInput" placeholder="Your Contact Number">
                                    <label for="floatingInput">Your Contact Number</label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-floating mb-3 shadow">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Email address</label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-floating mb-3 shadow">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="company Name">
                                    <label for="floatingInput">Your Company Name</label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-floating mb-3 shadow">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Your City">
                                    <label for="floatingInput">Your City</label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-floating mb-3 shadow">
                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                      <option selected>Select Products</option>
                                      <option value="1">ERP</option>
                                      <option value="2">Finance</option>
                                      <option value="3">HRMS</option>
                                      <option value="4">PIMS</option>
                                      <option value="5">Customize ERP</option>
                                      <option value="6">Mobile App</option>
                                      <option value="7">Project Management</option>
                                      <option value="8">Payment Gateway</option>
                                      <option value="9">Custom API</option>
                                      <option value="16">TUBA e-Signature</option>
                                      <option value="17">SAP Services</option>
                                      <option value="10">Real Estate IT Service</option>
                                      <option value="11">Real Estate IT Service</option>
                                      <option value="12">E-Commerce</option>
                                      <option value="13">CRM</option>
                                      <option value="14">GST</option>
                                      <option value="15">Other</option>
                                    </select>
                                    <label for="floatingSelect">Products</label>
                                  </div>
                                </div>
                               </div>
                                
                                <div class="form-floating mb-3 shadow">
                                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
                                  <label for="floatingTextarea">Enquiry Details</label>
                                </div>

                                <div class="d-grid gap-2">
                                  <button type="button" class="btn btn-danger btn-lg button-red-gradient shadow-4dp rounded-pill hvr-icon-wobble-horizontal" data-bs-dismiss="modal" aria-label="Close">SUBMIT <i class="fa-thin fa-paper-plane hvr-icon"></i></button>
                                </div>                                
                              </form> 
                              
                              <div class="d-flex justify-content-between mt-1">
                                <div><i class="fa-duotone fa-phone-volume me-1"></i> +91 - <span class="">96433 23943</span></div>
                                <div><i class="fa-duotone fa-envelopes me-1"></i> e-mail: <a href="mailto:sales@csii.in?cc=dsa@csii.in&subject=REQUEST A CALL BACK">sales@csii.in</a></div>
                              </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </div>
   </div>
 </div>
   `;
 }
}

customElements.define('footer-js', Footer);
