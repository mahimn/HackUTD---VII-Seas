import React from "react";

function About() {
  return (
    <div className="about">
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
            <h1 class="font-weight-light">About</h1>
            <p>
              AKCS is a group of four strong men of the seven seas. We are a diverse group ranging from majors like finance
              to computer science. However, what brought this uncanny gang together is the pursuit for honing our skills, a
              thirst for challenges and a moving motivation to perform social good. Through this hackathon, AKCS took its
              first step on the journey of self and community development by creating a financial tool to prepare college
              students for tax season while offering insight into the financial world and how they can best be aware of it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;