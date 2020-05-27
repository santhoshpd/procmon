import React from "react"
import { PageProps } from "gatsby"

const Api = (props: PageProps) => (
    <div className="container">
        <div className="box has-text-centered has-padding-top-40 has-padding-bottom-10">
            <h3 className="title has-margin-bottom-20">Install a monitor in any language.</h3> 
            <p className="has-padding-bottom-40">Simply make a <code>GET</code> request in your favorite language or framework whenever your job runs. We will take care of the rest.<br/>
            For advanced usage, see our <a href="https://docs.cronmon.io/" rel="me" target="_blank">docs</a>. Check out some installation examples below:</p> 
            <div className="b-tabs">
                <nav className="tabs is-centered">
                    <ul>
                        <li className="is-active"><a><span>Crontab</span></a></li>
                        <li className=""><a> <span>PHP</span></a></li>
                        <li className=""><a> <span>Laravel</span></a></li>
                        <li className=""><a><span>Node</span></a></li>
                        <li className=""><a><span>Python</span></a></li>
                        <li className=""><a> <span>Bash</span></a></li>
                        <li className=""><a><span>Ruby</span></a></li>
                    </ul>
                </nav> 
                <section className="tab-content">
                    <div className="tab-item">
                        <pre>0 0 * * * command.sh &amp;&amp; curl -fsS --retry 3 https://cronmon.io/api/v1/ping/e88ae715-aab3-4g79-9ba5-31294b2ba573 &gt; /dev/null</pre>
                    </div> 
                    <div className="tab-item" >
                        <pre>file_get_contents("https://cronmon.io/api/v1/ping/e88ae715-aab3-4g79-9ba5-31294b2ba573");</pre>
                    </div>
                    <div className="tab-item" >
                        <pre>$schedule-&gt;command('your-command')
                            -&gt;hourly()
                            -&gt;pingBefore('https://cronmon.io/api/v1/ping/e88ae715-aab3-4g79-9ba5-31294b2ba573/start')
                            -&gt;thenPing('https://cronmon.io/api/v1/ping/e88ae715-aab3-4g79-9ba5-31294b2ba573/finish');
                        </pre>
                    </div>
                    <div className="tab-item" >
                        <pre>var https = require('https');
                                https.get("https://cronmon.io/api/v1/ping/e88ae715-aab3-4g79-9ba5-31294b2ba573");
                        </pre>
                    </div> 
                    <div className="tab-item" >
                        <pre>import requests requests.get("https://cronmon.io/api/v1/ping/e88ae715-aab3-4g79-9ba5-31294b2ba573")
                        </pre>
                    </div>
                    <div className="tab-item" >
                        <pre>curl --retry 3 https://cronmon.io/api/v1/ping/e88ae715-aab3-4g79-9ba5-31294b2ba573</pre>
                    </div>
                    <div className="tab-item" >
                        <pre>require 'net/http'require 'uri' Net::HTTP.get(URI.parse('https://cronmon.io/api/v1/ping/e88ae715-aab3-4g79-9ba5-31294b2ba573'))</pre>
                    </div>
                </section>
            </div>
        </div>
    </div>
)
export default Api;

