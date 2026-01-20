class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="main-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg text-uppercase font-size-md px-0 navigation">
                    <a class="navbar-brand" href="index.html"><img class="img-fluid" src="images/logo-csii.png" alt="CSII logo"></a>
        
                    <div class="d-inline-block">
                        <span class="search d-inline-block d-lg-none mr-3"><a class="nav-link search_buton" href="javascript:void(0);"><i data-feather="search"></i> Search</a></span>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i data-feather="menu"></i>
                        </button>
                    </div>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Company</a>
                                <div class="dropdown-menu font-size-md dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="about-us.html">About CSII</a>
                                    <a class="dropdown-item" href="our-executive-team.html">Our Team</a>
                                    <a class="dropdown-item" href="careers.html">Careers</a>
                                    <!-- <a class="dropdown-item" href="support.html">Support</a> -->
                                    <a class="dropdown-item" href="partners.html">Partners</a>
                                    <a class="dropdown-item" href="contact-us.html">Contact Us</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Platform</a>
                                <div class="dropdown-menu font-size-md dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="tuba-platform.html">TUBA <br> (Total Universal Business Automation)</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Solution</a>
                                <div class="dropdown-menu font-size-md dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="permitting-and-compliance-solutions.html">Permitting and Compliance</a>
                                    <a class="dropdown-item" href="licensing.html">Licensing</a>
                                    <a class="dropdown-item" href="freedom-of-information.html">FOI and Privacy Compliance</a>
                                    <a class="dropdown-item" href="courts-justice.html">Courts & Justice</a>
                                    <a class="dropdown-item" href="grants-management.html">Grants Management</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">APPS</a>
                                <div class="dropdown-menu font-size-md dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="my-office-app.html">My Office App</a>
                                    <a class="dropdown-item" href="contractor-app.html">Contractor App</a>
                                    <a class="dropdown-item" href="service-request-app.html">Service Request App</a>
                                    <a class="dropdown-item" href="inspector-app.html">Inspector App</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Resources</a>
                                <div class="dropdown-menu font-size-md dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="training-certification.html">Training & Certification</a>
                                    <a class="dropdown-item" href="news-events.html">News & Events</a>
                                    <a class="dropdown-item" href="case-studies.html">Case Studies</a>
                                </div>
                            </li>                    
                            <!--<li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Global Offices</a>
                                <div class="dropdown-menu font-size-md dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Canada</a>
                                    <a class="dropdown-item" href="#">India</a>
                                    <a class="dropdown-item" href="#">Nigeria</a>
                                    <a class="dropdown-item" href="#">Senegal</a>
                                </div>
                            </li>
                            <li class="nav-item search d-none d-lg-block">
                                <a class="nav-link animated infinite pulse search_buton" href="javascript:void(0);"><i data-feather="search"></i></a>
                            </li>-->
                        </ul>                
                    </div>            
                </nav>        
            </div>
            </header>
        `;
      }
    }

    customElements.define('header-js', Header);
  