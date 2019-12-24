import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Information from "./information";
import { MDBMask, MDBRow, MDBCol, MDBView, MDBCardBody } from "mdbreact";
import "./index.css";

export default class HotelList extends Component {
  state = {
    isOpen: false
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MDBCol lg="4" md="12" className="mb-lg-6 mb-4">
        <MDBView className="overlay rounded z-depth-1" waves>
          <img src={this.props.data.url} alt="" className="img-fluid" />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
        <MDBCardBody className="pb-0">
          <h4 className="font-weight-bold my-3">{this.props.data.hotel}</h4>

          {/* <Star3 /> */}
          <p className="grey-text">
            <FontAwesomeIcon icon={faSearchLocation} />
            {this.props.data.address}
          </p>
          <p>ราคา/ห้อง/คืน เริ่มต้นที่</p>
          <h3 style={{ color: "#f4522d" }}>BTH {this.props.data.price}</h3>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={e => this.setState({ isOpen: true })}
          >
            Information
          </button>
          <Information
            isOpen={this.state.isOpen}
            onClose={e => this.setState({ isOpen: false })}
          >
            MAP:
          </Information>
        </MDBCardBody>
      </MDBCol>
    );
  }
}

const Star3 = () => (
    <div style={{ color: "#fffe50" }}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
  
  const Star4 = () => (
    <div style={{ color: "#fffe50" }}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
  
  const Star5 = () => (
    <div style={{ color: "#fffe50" }}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
  
