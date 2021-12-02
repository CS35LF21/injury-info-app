import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "/",
    };
  }
  render() {
    return (
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align" >
            <h4 style={{paddingTop:"0px"}}>
              <b>Aches and pains</b> keeping you from your sport?
            </h4>
            <h8 className="flow-text grey-text text-darken-1">
              Click on a body part or search above to begin finding the solution
            </h8>
            <br />
            <br />
          </div>
        <div className="col s12 center-align" >
        <div className="row">
            <div className="col s4 center-align" style={{
                float: "left",
                width: "33.33%",
                padding: "5px"
                }}>
                <div id="front_side" >
                <img src="/images/front_edge.jpeg" useMap="#image-map1"/>
                  <map name="image-map1">
                    <area target="_self" alt="Eyes" title="Eyes" href="/index?query=eyes" coords="56,41,100,41,99,32,56,31" shape="poly"/>
                    <area target="_self" alt="Eyes" title="Eyes" href="/index?query=" coords="56,41,100,41,99,32,56,31" shape="poly"/>
                    <area target="_self" alt="Nose" title="Nose" href="/index?query=nose" coords="75,42,76,52,83,51,81,43" shape="poly"/>
                    <area target="_self" alt="Jaw" title="Jaw" href="/index?query=jaw" coords="57,46,66,60,79,68,90,63,104,43,85,42,86,50,76,52,71,42" shape="poly"/>
                    <area target="_self" alt="neck" title="Neck" href="/index?query=neck" coords="67,66,78,70,90,66,97,79,80,86,62,79" shape="poly"/>
                    <area target="_self" alt="Collarbone" title="Collarbone" href="/index?query=collarbone" coords="48,100,77,101,110,101,105,89,79,88,52,87" shape="poly"/>
                    <area target="_self" alt="Chest" title="Chest" href="/index?query=chest" coords="46,129,46,155,77,156,111,156,113,135,114,105,77,104,43,105" shape="poly"/>
                    <area target="_self" alt="r_shoulder" title="r_shoulder" href="/index?query=shoulder" coords="42,87,41,128,19,126,22,101" shape="poly"/>
                    <area target="_self" alt="l_shoulder" title="l_shoulder" href="/index?query=shoulder" coords="113,86,117,126,137,127,132,95" shape="poly"/>
                    <area target="_self" alt="l_bicep" title="l_bicep" href="/index?query=bicep" coords="119,132,138,132,141,173,121,176" shape="poly"/>
                    <area target="_self" alt="r_bicep" title="r_bicep" href="/index?query=bicep" coords="20,132,39,132,36,177,19,171" shape="poly"/>
                    <area target="_self" alt="r_elbow" title="r_elbow" href="/index?query=elbow" coords="12,202,32,205,33,179,18,177,16,187" shape="poly"/>
                    <area target="_self" alt="l_elbow" title="l_elbow" href="/index?query=elbow" coords="124,178,138,176,145,197,125,199" shape="poly"/>
                    <area target="_self" alt="r_forearm" title="r_forearm" href="/index?query=forearm" coords="14,208,32,212,27,253,17,251" shape="poly"/>
                    <area target="_self" alt="l_forearm" title="l_forearm" href="/index?query=forearm" coords="126,204,143,201,139,252,130,249" shape="poly"/>
                    <area target="_self" alt="r_hand" title="r_hand" href="/index?query=hand" coords="17,254,28,255,25,270,27,282,22,286,14,275" shape="poly"/>
                    <area target="_self" alt="l_hand" title="l_hand" href="/index?query=hand" coords="131,251,140,255,144,271,139,290,131,285" shape="poly"/>
                    <area target="_self" alt="abs" title="abs" href="/index?query=abs" coords="100,182,93,207,92,228,66,230,64,209,60,180,56,158,103,159" shape="poly"/>
                    <area target="_self" alt="side" title="side" href="/index?query=side" coords="53,159,44,162,39,206,39,227,37,248,61,249,81,248,120,249,119,226,112,194,114,158,105,159,104,176,98,194,92,226,68,228" shape="poly"/>
                    <area target="_self" alt="hips" title="hips" href="/index?query=hips" coords="35,270,72,272,119,271,119,252,78,250,34,249" shape="poly"/>
                    <area target="_self" alt="quad" title="quad" href="/index?query=quad" coords="36,273,47,337,111,337,121,273" shape="poly"/>
                    <area target="_self" alt="knee" title="knee" href="/index?query=knee" coords="49,364,72,364,84,364,109,364,109,342,84,340,75,340,50,341" shape="poly"/>
                    <area target="_self" alt="shins" title="shins" href="/index?query=shins" coords="45,368,57,428,59,463,72,469,80,466,99,463,104,426,107,367" shape="poly"/>
                    <area target="_self" alt="feet" title="feet" href="/index?query=feet" coords="49,486,68,496,89,495,111,487,99,463,81,466,74,466,59,465" shape="poly"/>
                  </map>
              </div>
              </div>
              <div className="col s4 center-align" style={{
                float: "left",
                width: "33.33%",
                padding: "5px"
                }}>
              <div id="side_side">
                <img src="/images/side_edge.jpeg" useMap="#image-map2"/>
                  <map name="image-map2">
                    <area target="_self" alt="head" title="head" href="/index?query=head" coords="36,40,70,33,84,48,90,32,83,17,67,9,51,10,42,17" shape="poly"/>
                    <area target="_self" alt="jaw" title="jaw" href="/index?query=jaw" coords="36,41,61,35,76,42,79,60,41,70" shape="poly"/>
                    <area target="_self" alt="neck" title="neck" href="/index?query=neck" coords="53,69,76,62,84,83,57,84" shape="poly"/>
                    <area target="_self" alt="shoulder" title="shoulder" href="/index?query=shoulder" coords="59,86,59,121,90,126,92,107,83,85" shape="poly"/>
                    <area target="_self" alt="chest" title="chest" href="/index?query=chest" coords="57,89,58,142,36,143,40,117,48,100" shape="poly"/>
                    <area target="_self" alt="tricep" title="tricep" href="/index?query=tricep" coords="72,124,72,163,82,167,87,126" shape="poly"/>
                    <area target="_self" alt="bicep" title="bicep" href="/index?query=bicep" coords="59,125,62,162,70,163,70,123" shape="poly"/>
                    <area target="_self" alt="elbow" title="elbow" href="/index?query=elbow" coords="63,162,81,169,80,190,63,187" shape="poly"/>
                    <area target="_self" alt="forearm" title="forearm" href="/index?query=forearm" coords="63,189,65,263,77,262,76,240,80,194" shape="poly"/>
                    <area target="_self" alt="hand" title="hand" href="/index?query=hand" coords="62,264,65,284,72,292,73,284,77,273,77,264" shape="poly"/>
                    <area target="_self" alt="abs" title="abs" href="/index?query=abs" coords="36,144,54,143,50,173,48,198,48,220,39,234" shape="poly"/>
                    <area target="_self" alt="side" title="side" href="/index?query=side" coords="53,143,59,145,64,260,38,238,49,224,50,179" shape="poly"/>
                    <area target="_self" alt="glutei" title="glutei" href="/index?query=glute" coords="83,200,93,227,95,242,86,258,79,257,79,234" shape="poly"/>
                    <area target="_self" alt="hips" title="hips" href="/index?query=hip" coords="39,244,40,274,60,273,59,259" shape="poly"/>
                    <area target="_self" alt="quad" title="quad" href="/index?query=quad" coords="57,277,63,348,54,349,41,275" shape="poly"/>
                    <area target="_self" alt="it band" title="it band" href="/index?query=it+band" coords="61,292,63,345,72,348,69,294" shape="poly"/>
                    <area target="_self" alt="hammy" title="hammy" href="/index?query=hamstring" coords="79,265,85,266,86,347,73,345,72,302" shape="poly"/>
                    <area target="_self" alt="Knee" title="Knee" href="/index?query=knee" coords="56,351,85,351,89,375,59,376" shape="poly"/>
                    <area target="_self" alt="shin" title="shin" href="/index?query=shin" coords="60,380,79,378,77,454,66,453,65,415" shape="poly"/>
                    <area target="_self" alt="calf" title="calf" href="/index?query=calf" coords="79,379,88,378,92,408,88,453,79,451,80,412" shape="poly"/>
                    <area target="_self" alt="ankle" title="ankle" href="/index?query=ankle" coords="66,454,86,455,86,469,64,467" shape="poly"/>
                    <area target="" alt="foot" title="foot" href="/index?query=foot" coords="87,470,91,485,79,492,37,495,26,485,44,479,64,469" shape="poly"/>
                    </map>
              </div>
              </div >
              
              <div className="col s4 center-align" style={{
                float: "left",
                width: "33.33%",
                padding: "5px"
                }}>
              <div id="back_side">
                <img src="/images/back_edge.jpeg" useMap="#image-map3"/>
                  <map name="image-map3">
                    <area target="_self" alt="Head" title="Head" href="/index?query=head"coords="99,61,106,38,99,14,78,8,63,15,53,42,66,61" shape="poly"/>
                    <area target="_self" alt="Neck" title="Neck" href="/index?query=neck" coords="67,64,92,63,106,88,58,87" shape="poly"/>
                    <area target="_self" alt="Glutes" title="Glutei" href="/index?query=glute" coords="34,257,120,260,120,227,83,236,40,228" shape="poly"/>
                    <area target="_self" alt="Hammy" title="Hammy" href="/index?query=hamstring" coords="36,269,122,268,112,332,111,391,82,394,75,394,49,393,52,349" shape="poly"/>
                    <area target="_self" alt="UpperBack" title="UpperBack" href="/index?query=upper+back" coords="38,118,46,172,77,172,113,173,119,118" shape="poly"/>
                    <area target="_self" alt="lowerback" title="lowerback" href="/index?query=lower+back" coords="47,174,46,193,42,215,40,225,79,232,119,224,118,210,114,192,113,174" shape="poly"/>
                    <area target="_self" alt="l_forearm" title="forearm" href="/index?query=forearm" coords="17,194,16,220,19,243,18,259,16,271,18,285,24,292,29,287,26,271,29,261,30,243,32,224,36,201" shape="poly"/>
                    <area target="_self" alt="shoulder" title="shoulder" href="/index?query=shoulder" coords="25,116,36,116,81,116,117,116,135,114,132,99,111,88,81,89,54,87,29,98" shape="poly"/>
                    <area target="_self" alt="r_tricep" title="r_tricep" href="/index?query=tricep" coords="120,119,136,115,139,150,141,167,142,177,123,181,119,153" shape="poly"/>
                    <area target="_self" alt="l_tricep" title="l_tricep" href="/index?query=tricep" coords="25,118,38,118,41,146,40,165,38,179,21,174" shape="poly"/>
                    <area target="_self" alt="l_elbow" title="l_elbow" href="/index?query=elbow" coords="20,175,38,180,35,198,17,192" shape="poly"/>
                    <area target="_self" alt="r_elbow" title="r_elbow" href="/index?query=elbow" coords="123,182,141,177,144,196,126,199" shape="poly"/>
                    <area target="_self" alt="r_forearm" title="r_forearm" href="/index?query=forearm" coords="126,201,143,198,145,219,142,240,141,256,145,269,142,287,135,293,133,287,134,269,131,245,127,217" shape="poly"/>
                    <area target="_self" alt="r_calf" title="r_calf" href="/index?query=calf" coords="84,395,111,392,105,426,100,449,101,468,85,468" shape="poly"/>
                    <area target="_self" alt="l_calf" title="l_calf" href="/index?query=calf" coords="50,395,77,396,77,468,61,468,60,447" shape="poly"/>
                    <area target="_self" alt="r_foot" title="r_foot" href="/index?query=foot" coords="85,470,99,469,103,490,85,490,85,470" shape="poly"/>
                   <area target="_self" alt="l_foot" title="l_foot" href="/index?query=foot" coords="61,470,75,469,74,490,59,488" shape="poly"/>
                </map>
              </div>
              </div>
              <div className="col s12 center-align" >
              <p className="flow-text grey-text text-darken-1"  style={{fontSize:"20px"}}>
              <small> Need help? Try clicking on the body map where you're experiencing pain and we'll do our part to help you find a remedy. </small>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
