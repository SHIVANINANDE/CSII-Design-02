class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
     <header>
     <nav class="navbar navigation main-nav navbar-expand-xl py-2">
     <div class="container">
       <a class="navbar-brand" href="index.html">
         <img src="images/logo.png" alt="csii india logo" class="img-fluid">
       </a>
       <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <i class="fa-duotone fa-bars text-white fs-2"></i>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Company
             </a>
             <ul class="dropdown-menu shadow-lg border-0">
               <li><a class="dropdown-item" href="about-us.html">About Us</a></li>
               <li><a class="dropdown-item" href="why-csii.html">Why CSII</a></li>
               <li><a class="dropdown-item" href="vision-mission.html">Mission & Vision</a></li>
               <li><a class="dropdown-item" href="our-team.html">Our Team</a></li>
               <li><a class="dropdown-item" href="awards-and-recognition.html">Awards & Recognition</a></li>
               <li><hr class="dropdown-divider bg-secondary opacity-25"></li>
               <li><a class="dropdown-item" href="enquiry.html">Enquiry</a></li>
             </ul>
           </li> 
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Products
             </a>
             <ul class="dropdown-menu center-dropdown shadow-lg border-0 menu-wide bg-surface">
              <div class="container-fluid p-3">
                <div class="row g-2 row-cols-2 row-cols-md-3 row-cols-lg-4">
                  <div class="col">
                    <ul class="list-unstyled">
                      <li><h6 class="dropdown-header text-primary fw-bold text-uppercase small ls-1">Private Sector</h6></li>
                      <li><a class="dropdown-item" href="hrms.html">HRMS & Payroll</a></li>
                      <li><a class="dropdown-item" href="finance.html">Finance</a></li>
                      <li><a class="dropdown-item" href="project-mangement.html">Project Management</a></li>
                      <li><a class="dropdown-item" href="e-signature.html">TUBA e-Signature</a></li>
                      <li><a class="dropdown-item" href="pin.html">Purchase Inventory</a></li>
                      <li><a class="dropdown-item" href="talent-acquisition.html">Talent Acquisition</a></li>
                      <li><a class="dropdown-item" href="asset-management.html">Asset Management</a></li>
                      <li><a class="dropdown-item" href="crm.html">CRM</a></li>
                    </ul>
                  </div>                  
                  <div class="col">
                    <ul class="list-unstyled">
                      <li><h6 class="dropdown-header text-primary fw-bold text-uppercase small ls-1">Workforce</h6></li>
                      <li><a class="dropdown-item" href="helpdesk-management.html">Helpdesk Management</a></li>
                      <li><a class="dropdown-item" href="performance-management.html">Performance Management</a></li>
                      <li><a class="dropdown-item" href="task-management.html">Task Management</a></li>
                      <li><a class="dropdown-item" href="approval-management.html">Approval Management</a></li>
                      <li><a class="dropdown-item" href="diary-meeting-management.html">Diary & Meeting</a></li>
                      <li><a class="dropdown-item" href="tender-management.html">Tender Management</a></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="list-unstyled">
                      <li><h6 class="dropdown-header text-info fw-bold text-uppercase small ls-1">e-Governance</h6></li>
                      <li><a class="dropdown-item" href="building-plan-approval.html">Building Plan Approval </a></li>
                      <li><a class="dropdown-item" href="ccms.html">CCMS </a></li>
                      <li><a class="dropdown-item" href="unauthorized-construction.html">Unauthorized Construction </a></li>
                      <li><a class="dropdown-item" href="pgrs.html">PGRS </a></li>
                      <li><a class="dropdown-item" href="rti.html">RTI </a></li>
                      <li><a class="dropdown-item" href="property-tax-management.html">Property Tax </a></li>
                      <li><a class="dropdown-item" href="water-tax-management.html">Water Tax </a></li>
                      
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="list-unstyled">
                      <li><h6 class="dropdown-header text-info fw-bold text-uppercase small ls-1">Citizen Services</h6></li>
                      <li><a class="dropdown-item" href="property-mutation-system.html">Property Mutation </a></li>
                      <li><a class="dropdown-item" href="marriage-certificate-system.html">Marriage Certificate </a></li>
                      <li><a class="dropdown-item" href="death-certificate-system.html">Death Certificate </a></li>
                      <li><a class="dropdown-item" href="birth-certificate-system.html">Birth Certificate </a></li>
                      <li><a class="dropdown-item" href="leased-property-management.html">Lease Property </a></li>
                      <li><a class="dropdown-item" href="govt-hrms-finance-management.html">Gov. HRMS & Finance </a></li>
                    </ul>
                  </div>
                </div>
              </div>
             </ul>
             
           </li>
           <li class="nav-item">
             <a class="nav-link" href="tuba.html">Platform (Tuba)</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="contact-us.html">Contact Us</a>
           </li>                      
         </ul> 
         
         <button type="button" class="btn btn-primary-glow btn-sm shadow-none ms-3 BookDemoBtn" data-bs-toggle="modal" data-bs-target="#callback">Book a Demo</button>
       </div>
     </div>
   </nav>
   </header>
    `;
  }
}

customElements.define('header-js', Header);
