import React from "react";

function Resources() {
  return (
    <div className="resources">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Resources</h1>
            <b/>
            <h3> Extra information sources/ tools to help you along the way! </h3>
            <p>
              <a href="https://bursar.utdallas.edu/" > UTD Bursar's Office </a>
              <b/><b/>
              <a href ="https://idp.utdallas.edu/idp/profile/SAML2/Unsolicited/SSO?providerId=touchnet-prod-tbp" > EZPAY (For UTD Students) </a>
              <b/><b/>
              <a href ="https://www.self.inc/blog/guide-to-tax-season-for-students"> An insightful blog post detailing what you should know heading into Tax Season </a> 
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;