class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="container text-center mt-5">       
        <div class="dropdown gcontact">
            <button class="btn dropdown-toggle text-uppercase shadow-sm py-2" type="button" id="gcontact" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Global Contacts
            </button>
            <div class="dropdown-menu text-center text-uppercase shadow-sm" aria-labelledby="gcontact">
                <a class="dropdown-item global-cont" href="javascripr:void(0);">Global</a>
                <a class="dropdown-item canada-cont" href="javascripr:void(0);">Canada</a>
                <a class="dropdown-item india-cont" href="javascripr:void(0);">India</a>
                <a class="dropdown-item nigeria-cont" href="javascripr:void(0);">Nigeria</a>
                <a class="dropdown-item senegal-cont" href="javascripr:void(0);">Senegal</a>
            </div>
        </div>

        <div id="global_contact" class="row justify-content-md-center gcontact-data border-bottom pb-4">
            <div class="col-sm col-lg-3 mt-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h6 class="title pb-3">NEW BUSINESS</h6>
                <h4 class="font-weight-400 my-4">Pratik Rath</h4>
                <p class="font-size-md mb-1"><i data-feather="mail"></i> <a href="mailto:pra@csii.in"> pra@csii.in</a></p>
                <p class="font-size-md mb-1"><i data-feather="phone-call"></i> +91 - 88260 69802</p>
            </div>
        </div>  

        <div id="canada_contact" class="row justify-content-md-center gcontact-data border-bottom pb-4" style="display: none;"> 
            <div class="col-sm col-lg-3 mt-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h6 class="title pb-3">NEW BUSINESS</h6>
                
                <p class="font-size-md mb-1"><i data-feather="phone-call"></i> +1 647 400 6439</p>
            </div>
        </div>

        <div id="india_contact" class="row justify-content-md-center gcontact-data border-bottom pb-4" style="display: none;"> 
            <div class="col-sm col-lg-3 mt-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h6 class="title pb-3">NEW BUSINESS</h6>
                <h4 class="font-weight-400 my-4">Pratik Rath</h4>
                <p class="font-size-md mb-1"><i data-feather="mail"></i> <a href="mailto:pra@csii.in"> pra@csii.in</a></p>
                <p class="font-size-md mb-1"><i data-feather="phone-call"></i> +91 - 88260 69802</p>
            </div>
        </div>

        <div id="nigeria_contact" class="row justify-content-md-center gcontact-data border-bottom pb-4" style="display: none;"> 
            <div class="col-sm col-lg-3 mt-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h6 class="title pb-3">NEW BUSINESS</h6>
                <h4 class="font-weight-400 my-4">Adebayo Tony Olabiyi</h4>
                <p class="font-size-md mb-1"><i data-feather="mail"></i> <a href="mailto:Adebayo Tony Olabiyi"> Adebayo Tony Olabiyi</a></p>
                <p class="font-size-md mb-1"><i data-feather="phone-call"></i> +234 817 616 6404</p>
                <p class="font-size-md mb-1"><i data-feather="phone-call"></i> +234 811 537 1139</p>
            </div>
        </div>

        <div id="senegal_contact" class="row justify-content-md-center gcontact-data border-bottom pb-4" style="display: none;"> 
            <div class="col-sm col-lg-3 mt-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h6 class="title pb-3">NEW BUSINESS</h6>
                
                <p class="font-size-md mb-1"><i data-feather="phone-call"></i> +221 778349250</p>
            </div>
        </div>

        </div>

      <footer class="footer mt-5">
      <section class="mb-4 text-center text-sm-left" data-aos="fade-up" data-aos-duration="800">
          <div class="container">
              <div class="row">
                  <div class="col-md col-sm-6">
                      <h4 class="f-heading">Industry Solutions</h4>
                      <ul class="list-unstyled">
                          <li><a href="permitting-and-compliance-solutions.html">Permitting and Compliance</a></li>
                          <li><a href="licensing.html">Licensing</a></li>
                          <li><a href="freedom-of-information.html">FOI and Privacy Compliance</a></li>
                          <li><a href="courts-justice.html">Courts & Justice</a></li>
                          <li><a href="grants-management.html">Grants Management</a></li>
                          <li><a href="https://www.4th-wave.com/" target="_blank">Mobile Payment</a></li>
                      </ul>
                  </div>
                  <div class="col-md col-sm-6">
                      <h4 class="f-heading">Discover More</h4>
                      <ul class="list-unstyled">
                          <li><a href="why-csii.html">Why CSII</a></li>
                          <li><a href="our-executive-team.html">Our Team</a></li>
                          <li><a href="tuba-platform.html">TUBA Solution</a></li>
                          <li><a href="case-studies.html">Customers</a></li>
                          <li><a href="partners.html">Partners</a></li>
                          <li><a href="careers.html">Careers</a></li>
                          <li><a href="contact-us.html">Contact Us</a></li>
                      </ul>
                  </div>
                  <div class="col-md col-sm-6">
                      <h4 class="f-heading">Resources</h4>
                      <ul class="list-unstyled">
                          <li><a href="support.html">Support</a></li>
                          <li><a href="training-certification.html">Training & Certification</a></li>
                          <li><a href="#callback" data-toggle="modal">Schedule a Demo</a></li>
                          <li><a href="case-studies.html">Case Studies</a></li>
                          <li><a href="comming-soon.html">Whitepapers</a></li>
                          <li><a href="news-events.html">News & Events</a></li>
                          <li><a href="comming-soon.html">Blog</a></li>
                      </ul>
                  </div>
                  <div class="col-md col-sm-6">
                      <h4 class="f-heading">Follow Us On</h4>
                      <ul class="list-unstyled social-link">
                          <li class="fb animated pulse">
                            <a href="https://www.instagram.com/csii.tuba/" target="_blank"><i data-feather="instagram"></i></a>
                          </li>
                          <li class="linkedin animated pulse">
                            <a href="https://www.linkedin.com/in/csii-india-pvt-ltd/" target="_blank"><i data-feather="linkedin"></i></a>
                          </li>
                          <li class="twitter animated pulse">
                            <a href="https://twitter.com/csiiIndiaPvtLtd" target="_blank"><i data-feather="twitter"></i></a>
                          </li>                          
                      </ul>
  
                      <h4 class="f-heading mt-5">Global Presence</h4>
                      <ul class="list-unstyled global-presence">
                          <li><a href="javascript:void(0);">
                              <img class="img-fluid animated pulse" src="images/ind.jpg" alt="india">
                          </a></li>
                          <li><a href="javascript:void(0);">
                              <img class="img-fluid animated pulse" src="images/ca.jpg" alt="canada">
                          </a></li>
                          <li><a href="javascript:void(0);">
                              <img class="img-fluid animated pulse" src="images/Nigeria.jpg" alt="Nigeria">
                          </a></li>
                          <li><a href="javascript:void(0);">
                              <img class="img-fluid animated pulse" src="images/senegal-flag.jpg" alt="Senegal Flag">
                          </a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      <section class="bg-grey py-4 text-center">
          <div class="container">
              © 2019 CSI Inc. | <a href="comming-soon.html">Privacy</a>
          </div>
      </section>
  </footer>
  
      `;
    }
  }
  
  customElements.define('footer-js', Footer);