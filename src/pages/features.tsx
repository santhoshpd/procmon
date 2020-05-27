import React from "react"
//import { PageProps } from "gatsby"

const Features = () => (
<section id="testimonials bg-white">
    <div className="container">
      <div className="title-block">
        <h2>Features of ProcMon</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="testimonial-box">
            <div className="row personal-info">
              <div className="col-md-10 col-xs-10">
                <h6>Easy to Use</h6>
              </div>
            </div>
            <p>Procmon is built on top of an attractive, intuitive interface, optimized for mobile devices.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="testimonial-box">
            <div className="row personal-info">
              <div className="col-md-10 col-xs-10">
                <h6>Powerful Dashboard</h6>
              </div>
            </div>
            <p>See the real time status, whether active, running or in an alert state, of all your monitors.</p>
          </div>
        </div>   <div className="col-md-6">
          <div className="testimonial-box">
            <div className="row personal-info">
              <div className="col-md-10 col-xs-10">
                <h6>Rich Integrations</h6>
              </div>
            </div>
            <p>Receive email, SMS, Slack and webhook notifications when one of your cron jobs fails or takes longer than normal.</p>
          </div>
        </div>   <div className="col-md-6">
          <div className="testimonial-box">
            <div className="row personal-info">
              <div className="col-md-10 col-xs-10">
                <h6>Excellent Support</h6>
              </div>
            </div>
            <p>Get your questions answered within 1 business day. Priority support available for Pro plan members.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
export default Features;


