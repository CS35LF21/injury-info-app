import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "/",
    };
    var path = "/index?query=" + this.state.value;
  }
  func = () => {
    document.getElementById("first")
  }
  setSearch = searchStr => {
    this.state.value = searchStr;
  }

  render() {
    return (
      <div style={{ height: "45vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Aches and pains</b> keeping you from your sport?
            </h4>
            <p className="flow-text grey-text text-darken-1"  >
              The one stop solution for getting back to your normal self
            </p>
            <br />
            <div className="col s12 center-align" >
              <div id="front_side">
              </div>
              <div id="back_side">
                <img src="/images/back_edge.jpeg" usemap="#image-map"/>
                  <map name="image-map">
                    <area target="_self" alt="Head" title="Head" href="/" coords="99,61,106,38,99,14,78,8,63,15,53,42,66,61" shape="poly"/>
                    <area target="_self" alt="Neck" title="Neck" href="/" coords="67,64,92,63,106,88,58,87" shape="poly"/>
                    <area target="_self" alt="Glutei" title="Glutei" href="/" coords="34,257,120,260,120,227,83,236,40,228" shape="poly"/>
                    <area target="_self" alt="Hammy" title="Hammy" href="/" coords="36,269,122,268,112,332,111,391,82,394,75,394,49,393,52,349" shape="poly"/>
                    <area target="_self" alt="UpperBack" title="UpperBack" href="/" coords="38,118,46,172,77,172,113,173,119,118" shape="poly"/>
                    <area target="_self" alt="lowerback" title="lowerback" href="/" coords="47,174,46,193,42,215,40,225,79,232,119,224,118,210,114,192,113,174" shape="poly"/>
                    <area target="_self" alt="forearm" title="forearm" href="/" coords="17,194,16,220,19,243,18,259,16,271,18,285,24,292,29,287,26,271,29,261,30,243,32,224,36,201" shape="poly"/>
                    <area target="_self" alt="shoulder" title="shoulder" href="/" coords="25,116,36,116,81,116,117,116,135,114,132,99,111,88,81,89,54,87,29,98" shape="poly"/>
                    <area target="_self" alt="r_tricep" title="r_tricep" href="/" coords="120,119,136,115,139,150,141,167,142,177,123,181,119,153" shape="poly"/>
                    <area target="_self" alt="l_tricep" title="l_tricep" href="/" coords="25,118,38,118,41,146,40,165,38,179,21,174" shape="poly"/>
                    <area target="_self" alt="l_elbow" title="l_elbow" href="/" coords="20,175,38,180,35,198,17,192" shape="poly"/>
                    <area target="_self" alt="r_elbow" title="r_elbow" href="/" coords="123,182,141,177,144,196,126,199" shape="poly"/>
                    <area target="_self" alt="r_forearm" title="r_forearm" href="/" coords="126,201,143,198,145,219,142,240,141,256,145,269,142,287,135,293,133,287,134,269,131,245,127,217" shape="poly"/>
                    <area target="_self" alt="r_calf" title="r_calf" href="/" coords="84,395,111,392,105,426,100,449,101,468,85,468" shape="poly"/>
                    <area target="_self" alt="l_calf" title="l_calf" href="/" coords="50,395,77,396,77,468,61,468,60,447" shape="poly"/>
                    <area target="_self" alt="r_foot" title="r_foot" href="/" coords="85,470,99,469,103,490,85,490,85,470" shape="poly"/>
                   <area target="_self" alt="l_foot" title="l_foot" href="/" coords="61,470,75,469,74,490,59,488" shape="poly"/>
                </map>
              </div>
              <div id="side_side">
              </div>
            </div >
            
            <div className="col s12">
              <Link
                to="/"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;