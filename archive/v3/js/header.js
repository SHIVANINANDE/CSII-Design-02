class Header extends HTMLElement {
 constructor() {
   super();
 }
 connectedCallback() {
     this.innerHTML = `
     <header class="main-nav position-absolute w-100 z-3">
     <nav class="navbar navigation navbar-expand-xl p-0">
     <div class="container">
       <a class="navbar-brand" href="index.html">
         <img src="images/logo/logo.png" alt="csii india logo" class="img-fluid">
       </a>
       <button class="navbar-toggler red accent-2 shadow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <i class="fa-duotone fa-bars white-text"></i>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase font-size-md">
                        
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Company
             </a>
             <ul class="dropdown-menu shadow-16dp">
               <li><a class="dropdown-item" href="about-us.html">About Us</a></li>
               <li><a class="dropdown-item" href="why-csii.html">Why CSII</a></li>
               <li><a class="dropdown-item" href="vision-mission.html">Mission & Vision</a></li>
               <li><a class="dropdown-item" href="our-team.html">Our Team</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="enquiry.html">Enquiry</a></li>
               <!--<li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="career.html">Career</a></li>-->
             </ul>
           </li> 
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Products
             </a>
             <ul class="dropdown-menu shadow-16dp" style="min-width: 250px;">
               <li><a class="dropdown-item" href="hrms.html">Tuba Hrms</a></li>
               <li><a class="dropdown-item" href="finance.html">Tuba Finance Management</a></li>
               <li><a class="dropdown-item" href="pin.html">Tuba Purchase Inventory</a></li>
               <li><a class="dropdown-item" href="customize-erp.html">Tuba Customize ERP</a></li>
               <li><a class="dropdown-item" href="mobile-app.html">Tuba Mobile Application</a></li>
               <li><a class="dropdown-item" href="project-mangement.html">Tuba Project Management</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="payment-gateway.html">Payment Gateway</a></li>
               <li><a class="dropdown-item" href="customized-api.html">Customized API</a></li>
               <li><a class="dropdown-item" href="realestate-IT-services.html">Real Estate IT Services</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="e-signature.html">TUBA e-Signature</a></li>
               <li><a class="dropdown-item" href="">SAP Services</a></li>
             </ul>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="tuba.html">Platform (Tuba)</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="contacts.html">Contacts</a>
           </li>
           <li class="nav-item dropdown ms-xl-2">
            <a class="nav-link btn button-red-gradient rounded-pill font-size-md shadow-4dp dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ASSESS YOUR APP
            </a>
             <ul class="dropdown-menu dropdown-menu-end shadow-16dp menu-wide">
              <div class="container-fluid">
                <div class="row g-2 row-cols-2 row-cols-md-3 row-cols-lg-4 my-2 text-center">
                  <div class="col">
                    <div class="card shadow">
                      <a href="https://csii.in/afry/" target="_blank" class="dropdown-item card-body">
                        <img src="images/logo/automatedTUBA.png" alt="logo" class="img-fluid w-50">
                        <br>
                        <span class="fw-bold">TUBA HRMS AFRY</span> 
                      </a>
                    </div>
                  </div>
                  <!-- <div class="col">
                    <div class="card shadow">
                      <a href="https://csii.in/finance/" target="_blank" class="dropdown-item card-body">
                        <img src="images/logo/automatedTUBA.png" alt="logo" class="img-fluid w-50">
                        <br>
                        <span class="fw-bold">TUBA HRMS Lite</span>
                      </a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card shadow">
                      <a href="https://csii.in/finance/" target="_blank" class="dropdown-item card-body">
                        <img src="images/logo/automatedTUBA.png" alt="logo" class="img-fluid w-50">
                        <br>
                        <span class="fw-bold">TUBA Finance</span>
                      </a>
                    </div>
                  </div> -->
                  <div class="col">
                    <div class="card shadow">
                      <a href="https://csii.in/bug-tracker/#/account/login" target="_blank" class="dropdown-item card-body">
                        <img src="images/logo/logo-taskManager.png" alt="logo" class="img-fluid mb-2">
                        <br>
                        <span class="fw-bold">CSII Task Manager</span>
                      </a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card shadow">
                      <a href="enquiry.html" class="dropdown-item card-body">
                        <img src="images/tuba-e-sign2.1.png" alt="logo" class="img-fluid mb-2">
                        <br>
                        <span class="fw-bold">Digital Signature</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

             </ul>
           </li>
           <li class="nav-item d-grid ms-xl-2 mt-xl-0 mt-3">
             <button type="button" class="btn btn-outline-light2 font-size-md rounded-pill" data-bs-toggle="modal" data-bs-target="#callback"><img src="images/demo-icon.png" alt="icon" class="img-fluid me-1"> ASK FOR DEMO</button>
           </li>              
         </ul>            
       </div>
     </div>
   </nav>
   </header>
    `;
   }
 }

 customElements.define('header-js', Header);
