class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="popup-bt"><a href="inquiry.html">Quick Enquiry</a></div>
    <div class="popup-bt-step1"><a href="tel:+91-9643323943"><i class="fa fa-phone"></i></a></div>
    <!-- Wordsapp ICON -->
    <div class="wordsapp-wrap">
        <a href="https://wa.me/9643323943?text=Hello%20CSII!!%20I%20Have%20some%20Query!!" class="float" target="_blank"><i class="fa fa-whatsapp my-float"></i></a>
    </div>
    <header class="inner-header">
        <div class="float-panel" data-top="0" data-scroll="500">
            <div class="container-fluid topbar">
                <div class="row">
                    <div class="col-sm-4">
                        <li><a href="#" target="_blank" rel="nofollow"><span class="fa fa-facebook"></span></a></li>
                        <li><a href="#" target="_blank" rel="nofollow"><span class="fa fa-twitter"></span></a></li>
                        <li><a href="#" target="_blank" rel="nofollow"><span class="fa fa-linkedin"></span></a></li>
                    </div>                    

                    <div class="col-sm-8 text-right">
                        <ul>
                            <span class="fa fa-envelope-o"></span>
                            <p><a href="mailto:sales@csii.in">sales@csii.in</a></p>
                            <span class="fa fa-phone"></span>
                            <p><a href="tel:+91-9643323943">+91-9643323943</a></p>
                        </ul>
                    </div>

                </div>
                <!--row-->
            </div>
            <!--topbar-->


            <div class="container-fluid top-menu">
                <div class="navbar navbar-default navbar-static-top">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="index.html" class="navbar-brand desktop-logo"><img style="max-width: 64px;" src="images/logo.png" class="img-responsive" alt="ERP Software Development Company " title="ERP Software Development Company"></a>
                        <a href="index.html" class="navbar-brand mobile-logo"><img style="max-width: 64px;" src="images/mobile-logo.png" class="img-responsive" alt="ERP Software for manufacturing" title="ERP Software for manufacturing"></a>
                    </div>
                    <div class="ask-for-demo-btn mobileview1">
                        <a class="btn accessyourapp" data-toggle="modal" data-target="#accessYourApp">Access Your App</a>
                        <a onclick="window.location.href = 'inquiry.html';" class="btn btn-warning" style="margin-left: 3px;">Ask for a Demo</a>
                    </div>
                    
                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav navbar-right">
                        <li><a href="index.html">Home</a></li>
                            <li class="dropdown">
                                <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Company <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="aboutus.html"><span class="fa fa-angle-right"></span> About Us </a></li>
                                    <li><a href="why-csii.html">Why CSII</a></li>
                                    <li><a href="vision-mission.html">Mission &amp; Vision</a></li>
                                    <li><a href="our-team.html">Our Team</a></li>
                                </ul>
                            </li>

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Products <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="hrms.html">TUBA HRMS</a></li>
                                    <li><a href="finance.html">TUBA FINANCE MANGEMENT</a></li>
                                    <li><a href="pin.html">TUBA PURCHASE INVENTORY</a></li>
                                    <li><a href="customize-erp.html">TUBA CUSTOMIZE ERP</a></li>
                                    <li><a href="mobile-app.html">TUBA MOBILE APPLICATION</a></li>
                                    <li><a href="payment-gateway.html">PAYMENT GATEWAY</a></li>
                                    <li><a href="project mangement.html">TUBA PROJECT MANAGEMENT</a></li>
                                    <li><a href="custom-api.html">CUSTOM API</a></li>
                                    <li><a href="realestate-IT-services.html">REAL ESTATE IT SERVICES</a></li>
                                </ul>
                            </li>
                            <li><a href="tuba.html">Platform (TUBA)</a></li>
                            
                            <li><a href="clients.html">Clients</a></li>
                            <li><a href="career.html">Career</a></li>
                            <li><a href="inquiry.html">Enquiry</a></li>
                            <li><a href="contacts.html">Contact Us</a></li>
                        </ul>
                    </div><!-- navbar-collapse -->
                </div><!-- navbar -->
            </div><!-- top-menu -->
        </div>
        <!--float-panel-->

    </header>

<div class="modal fade popup-style1" id="accessYourApp" tabindex="-1">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="clearfix"></div>

        <div class="modal-body">
            <div class="popup-canvas">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="leftside text-center">
                            <h2>TUBA HRMS</h2>
                            <h3>Total Universal Business Automation</h3>

                            <p>The enterprise automation and case management platform.</p>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="popup-canvas-white mb-5">
                            <h2 class="text-uppercase text-center">Access Your App</h2>
                            
                            <div class="or d-none d-md-block">
                                <span>We are here to help You! Simply select the below option</span>
                            </div>

                            <div class="row accessapp text-center">
                                <div class="col-xs-4">
                                    <a href="/finance/" target="_blank">
                                    <img src="images/icon-tuba-hrms.png" alt="icon">
                                    <h5>TUBA HRMS </h5>
                                    </a>
                                </div>
                                <div class="col-xs-4">
                                    <a href="/finance/" target="_blank">
                                    <img src="images/icon-tuba-hrms-lite.png" alt="icon">
                                    <h5>TUBA HRMS Lite</h5>
                                    </a>
                                </div>
                                <div class="col-xs-4">
                                <a href="/finance/" target="_blank">
                                    <img src="images/icon-tuba-finance.png" alt="icon">
                                    <h5>TUBA Finance</h5>
                                    </a>
                                </div>
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

    customElements.define('header-js', Header);
  