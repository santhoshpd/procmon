import React from "react"
import HeroImage from '../components/HeroImage'
import Layout from "../components/layout"
import Features from './features'
import ApiModal from './apimodal'
import { BrowserRouter } from "react-router-dom";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSlack} from '@fortawesome/free--svg-icons'
const IndexPage = (props) => (
  <BrowserRouter>
  <Layout>
    <div className="pt-5 mb-0 pb-6">
    <section className="pt-10 md-pt-15">
      <div className="container mx-auto px-8 lg-flex">
        <div className="row">
          <div className="text-center lg-text-left mr-5 col-lg-4">
            <div className="title-block">
              <h2>Simple and Effective Cron Job Monitoring</h2>
              <p>Receive alerts when your nightly backups, weekly reports, cron jobs and scheduled tasks don't run on time.</p>
            </div>
            <p className="mt-8 md:mt-12">
              <button className="btn btn-buy" size="lg">Get Started</button>
            </p>
          </div>
        <div className=" col-lg-7">
          <HeroImage />
        </div>
        </div>
      </div>
    </section>
    </div>
    <Features/>
    
  {/*<Api/>*/}  
  <ApiModal/>
  <div className="pt-5 mb-0">
        <div className="container">
        <div className="title-block lg-text-4xl">
            <h2>Integrations</h2>
        </div>
        </div>
    </div>
    <i className="fab fa-slack"></i>
  </Layout>
  </BrowserRouter>
)

export default IndexPage
