// Gatsby supports TypeScript natively!
import React from "react"
import logo1 from '../images/logo1.png'
//import { PageProps, Link } from "gatsby"
import Layout from "../components/layout"


const About = () => (
  <Layout>
    <div className="jumbotron pt-5">
        <div className="title-block lg-text-4xl">
            <h2>How it Works ?</h2>
        </div>
    </div>
   <section id="marketing">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="content-box">
            <span></span>
            <h2>Create a Monitor</h2>
            <p>Create your monitor, and specify a few parameters such as a name, the expected schedule (so we know when to notify you if we don't receive a ping), and your alert settings. We will then start listening for events.</p>
            {/*<a href="#" className="btn btn-regular"></a>*/}
          </div>
        </div>
        <div className="col-md-6">
            <img src={logo1} className="img-fluid" alt="Not valid"/>
        </div>
      </div>
    </div>
  </section>
  <section id="marketing">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
            <img src={logo1} className="img-fluid" alt="Not valid"/>
        </div>
        <div className="col-md-6">
          <div className="content-box">
            <span></span>
            <h2>Update Your Project</h2>
            <p>Install the simple tracking code into your project. Choose if you would like to track start and end events (for duration tracking) or simplified ping events. Code examples are provided for many popular programming languages and frameworks.</p>
            {/*<a href="#" className="btn btn-regular"></a>*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="marketing">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="content-box">
            <span></span>
            <h2>Get Alerted</h2>
            <p>If we do not receive a ping within your defined grace period, we will send out alerts to all of your integrated channels, such as Slack, Email, SMS, or a Webhook. Have full control over the notifications you and your team receives.</p>
            {/*<a href="#" className="btn btn-regular"></a>*/}
          </div>
        </div>
        <div className="col-md-6">
            <img src={logo1} className="img-fluid" alt="Not valid"/>
        </div>
      </div>
    </div>
  </section>
  <section id="call-to-action">
    <div className="container text-center">
      <h2>Create your first 5 job monitors for free!</h2>
      <div className="title-block">
        <p>It only takes a few minutes to install.</p>
        <a href="/" className="btn btn-regular">Get Started</a>
      </div>
    </div>
  </section>
  </Layout>
)
export default About;