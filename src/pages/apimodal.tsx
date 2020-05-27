import React from "react"
//import { PageProps } from "gatsby"
import {Tabs,Tab} from 'react-bootstrap'
const ApiModal = () => (

<div className="jumbotron pt-5 mb-0 pb-6">
  <div className="container">
  <div className="testimonial-box shadow">
    <div className="card-header text-center bg-white">
          <h2>Install a monitor in any language.</h2>
    </div>
    <div className="card-body">
      <p className="card-text text-center">Simply make a GET request in your favorite language or framework whenever your job runs. We will take care of the rest.
        For advanced usage, see our docs. Check out some installation examples below:</p>
        
        <Tabs defaultActiveKey="php" transition={false} id="noanim-tab-example">
          <Tab eventKey="php" title="PHP">
          <div className="card border-top-0">
            <div className="card-body">
              php 
            </div>
          </div>
          </Tab>
          <Tab eventKey="python" title="PYTHON">
          <div className="card border-top-0">
            <div className="card-body">
              python
            </div>
          </div>
          </Tab>
          <Tab eventKey="bash" title="BASH">
          <div className="card border-top-0">
            <div className="card-body">
              bash
            </div>
          </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
</div>
  
)
export default ApiModal;