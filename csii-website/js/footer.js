class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <section class="call-of-action container position-relative z-index-2" data-aos="fade-up" data-aos-duration="1000">
    <div class="row align-items-center justify-content-between p-5">
      <div class="col-lg-7 mb-4 mb-lg-0">
        <h3 class="h2 text-white mb-2">Ready to Upgrade?</h3>
        <p class="text-muted mb-0">Get in touch with us to explore how TUBA can transform your organization.</p>
      </div>
      <div class="col-lg-auto">
        <button type="button" class="btn btn-primary-glow btn-lg px-5" href="#callback" data-bs-toggle="modal">Request Callback</button>
      </div>
    </div>
  </section>

  <footer class="footer">
    <section class="mb-5 foot1">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Enterprise ERP</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2"><a href="hrms.html" class="text-decoration-none">HRMS & Payroll</a></li>
                      <li class="mb-2"><a href="finance.html" class="text-decoration-none">Finance Management</a></li>
                      <li class="mb-2"><a href="project-mangement.html" class="text-decoration-none">Project Control</a></li>
                      <li class="mb-2"><a href="pin.html" class="text-decoration-none">Purchase & Inventory</a></li>
                      <li class="mb-2"><a href="e-signature.html" class="text-decoration-none">TUBA e-Signature</a></li>
                      <li class="mb-2"><a href="crm.html" class="text-decoration-none">CRM</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                  <h5 class="text-white mb-4">GovTech Solutions</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2"><a href="building-plan-approval.html" class="text-decoration-none">Building Plan Approval</a></li>
                      <li class="mb-2"><a href="ccms.html" class="text-decoration-none">CCMS (Court Cases)</a></li>
                      <li class="mb-2"><a href="pgrs.html" class="text-decoration-none">Public Grievance</a></li>
                      <li class="mb-2"><a href="rti.html" class="text-decoration-none">RTI System</a></li>
                      <li class="mb-2"><a href="property-tax-management.html" class="text-decoration-none">Property Tax</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                  <h5 class="text-white mb-4">Company</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2"><a href="about-us.html" class="text-decoration-none">About Us</a></li>
                      <li class="mb-2"><a href="why-csii.html" class="text-decoration-none">Why CSII?</a></li>
                      <li class="mb-2"><a href="our-team.html" class="text-decoration-none">Team</a></li>
                      <li class="mb-2"><a href="career.html" class="text-decoration-none">Careers</a></li>
                      <li class="mb-2"><a href="contact-us.html" class="text-decoration-none">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="mb-4">
                      <img src="images/csii-tuba-enterprise-govt-private.png" alt="csii logo" class="img-fluid w-50 mb-3" style="filter: brightness(0) invert(1); opacity: 0.8;">
                      <h5 class="text-white mb-2">Canadian Systems International Inc.</h5>
                      <p class="small text-muted">Global leader in Low-Code/No-Code automation platforms.</p>
                  </div>

                  <div class="d-flex mb-3 align-items-start">
                    <i class="fa-duotone fa-location-dot text-primary mt-1 me-3"></i>
                    <p class="small text-muted mb-0">TOWER-C, Noida One, C-122, Sector 62, Noida, UP - 201309</p>
                  </div>
                  <div class="d-flex mb-4 align-items-center">
                    <i class="fa-duotone fa-phone text-primary me-3"></i>
                    <p class="small text-muted mb-0">+91 - 96433 23943</p>
                  </div>

                  <div class="d-flex gap-3">
                     <a href="https://www.linkedin.com/in/csii-india-pvt-ltd/" class="btn btn-outline-light btn-sm rounded-circle" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                     <a href="https://twitter.com/csiiIndiaPvtLtd" class="btn btn-outline-light btn-sm rounded-circle" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                  </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="py-4 border-top border-secondary border-opacity-10 foot2">
      <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-md-6 text-md-start mb-3 mb-md-0">
                <p class="small text-muted mb-0">© 2025 CSII India Pvt. Ltd. All rights reserved.</p>
            </div>
            <div class="col-md-6 text-md-end">
                <a href="privacy-policy.html" class="text-muted small text-decoration-none me-3">Privacy Policy</a>
                <a href="terms-and-conditions.html" class="text-muted small text-decoration-none">Terms</a>
            </div>
        </div>
      </div>
    </section>
  </footer>
  
  <span class="rounded-circle btn-primary-glow text-white d-flex align-items-center justify-content-center position-fixed scrollTop opacity-0" onclick="scrollToTop()" style="width: 50px; height: 50px; bottom: 30px; right: 30px; cursor: pointer; transition: 0.3s;"><i class="fa-solid fa-arrow-up"></i></span>
  
  <div class="whatsapp-wrap position-fixed opacity-0" style="bottom: 90px; right: 30px; transition: 0.3s;">
      <a href="https://wa.me/919871721666?text=Hello%20CSII" class="d-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-lg" style="width: 50px; height: 50px;" target="_blank"><i class="fa-brands fa-whatsapp fs-4"></i></a>
  </div>

  <!-- Modal content remains managed by shared bootstrap HTML in the page mostly, but re-injected here to ensure it exists if missing -->
  <div class="modal fade" id="callback" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Request a Callback</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
                <p class="text-muted mb-4">Leave your details below and our team will reach out shortly.</p>
                <form class="callback-form">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control user-name" placeholder="Name">
                                <label>Your Name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="tel" class="form-control user-phone" placeholder="Phone">
                                <label>Phone Number</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating">
                                <input type="email" class="form-control user-email" placeholder="Email">
                                <label>Email Address</label>
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control user-company" placeholder="Company">
                                <label>Company Name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control user-city" placeholder="City">
                                <label>City</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating">
                                <select class="form-select user-product">
                                    <option selected>Select Interest</option>
                                    <option value="HRMS & Payroll">HRMS & Payroll</option>
                                    <option value="Finance">Finance</option>
                                    <option value="GovTech">GovTech Solutions</option>
                                    <option value="Other">Other</option>
                                </select>
                                <label>Interested Product</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating">
                                <textarea class="form-control enquiry-details" placeholder="Message" style="height: 100px"></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div class="col-12 mt-4">
                             <button type="button" class="btn btn-primary-glow w-100 submit-callback">
                                <span class="btn-text">Send Request</span>
                                <span class="spinner-border spinner-border-sm d-none" role="status"></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
    `;
  }
}

customElements.define('footer-js', Footer);
