import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
    state = {
      websiteUrl: "",
      isValid: false
    };
  
    render() {
      return (
      <body>
        <div class="valign-wrapper" style={{paddingBottom:"10vh"}}>
          <div class="valign" ></div>
            <div class="container">
              <div class="row">
                <div class="valign-wrapper">
                  <div class="col s12">
                      <h3>About Us</h3>
                       <p>The Injury Index focues on serving our users the proper information to help them get back to their normal selves.</p>
                       <p> </p>
                      <h5>Our Team</h5>
				      <p  style={{margin:"0",
                                  textIndent: "20px"}}>Dylan Wilbur</p>
				      <p  style={{margin:"0",
                                textIndent: "20px"}}
                                 s>Keaton Heisterman</p>
				      <p  style={{margin:"0",
                                    textIndent: "20px"}}>Jai Parera</p>
				      <p  style={{margin:"0",
                                textIndent: "20px"}}>Ethan Matus</p>
                      <h5>Our Code</h5>
                      <p style={{margin:"0",
                                textIndent: "20px"}} ><a href="https://github.com/CS35LF21/injury-info-app">Click Here for Github Repo</a></p>
                      <h5>Contact Us</h5>
				      <p  style={{margin:"0",
                                  textIndent: "20px"}}>For questions or suggestions regarding our application please contact us at: injury_index@aol.com</p>
                  </div>
                </div>
              </div>
            </div>
            </div> 
      </body> 
      );
    }
}
export default About;