import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Information from "./information";
import BookingForm from "./bookingForm";
import { MDBMask, MDBRow, MDBCol, MDBView, MDBCardBody } from "mdbreact";
import "./index.css";
export default class HotelBooking extends Component {
  state = {
    isOpen: false,
    formOpen: false,
    hotelName: null
  };

  setCategoryStates = (formOpen, hotelName) => {
    this.setState(
      {
        formOpen: formOpen,
        hotelName: hotelName
      },
      () => {
        /*
           Add state to the array
           This callback will be called once the async state update has succeeded
           So accessing state in this variable will be correct.
        */
        this.pushToCategoryArray();
      }
    );
  };

  pushToCategoryArray = () => {
    //You don't need state, you can simply make these regular JavaScript variables
    this.categoryArray.push({
        'formOpen': this.state.formOpen,
        'hotelName': this.state.hotelName,
    })
}

  constructor() {
    super();
    this.state = {
      hotel1: "A-One Star Hotel",
      hotel2: "D Varee Jomtien Beach",
      hotel3: "สวัสดี ซีวิว พัทยา",
      hotel4: "The Grass Serviced Suites by At Mind",
      hotel5: "Woraburi Pattaya Resort & Spa",
      hotel6: "โรงแรม ยู จอมเทียน",

      hotel1Prc: "THB 1,992.50",
      hotel2Prc: "THB 2,992",
      hotel3Prc: "THB 3,992.50",
      hotel4Prc: "THB 4,992",
      hotel5Prc: "THB 5,992.50",
      hotel6Prc: "THB 6,992.50",

      button: "Information"
    };
  }

  render() {
    return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Recommended Hotel
        </h2>

        <MDBRow className="text-center">
          <MDBCol lg="4" md="12" className="mb-lg-6 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000001000269798_wh_140"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              
              <button
                style={{ marginTop: "20px", backgroundColor: "#f4522d" }}
                type="button"
                className="btn btn-primary btn-sm"
                onClick={e => this.setState({ formOpen: true,hotelName: "A-One Star Hotel" })}
              >
                BOOK IN
              </button>
              <BookingForm
                formOpen={this.state.formOpen}
                hotelName={this.state.hotel1}
                onClose={e => this.setState({ formOpen: false })}
              >
                {this.state.hotelName}
              </BookingForm>
              <h4 className="font-weight-bold my-3">{this.state.hotel1}</h4>
              <Star3 />
              <p className="grey-text">
                <FontAwesomeIcon icon={faSearchLocation} />
                115/11 หมู่ที่ 9 ถนน เลียบหาด ถนน พัทยาเหนือ เมืองพัทยา
                อำเภอบางละมุง ชลบุรี 20150
              </p>
              <p>ราคา/ห้อง/คืน เริ่มต้นที่</p>
              <h3 style={{ color: "#f4522d" }}>{this.state.hotel1Prc}</h3>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={e => this.setState({ isOpen: true })}
              >
                {this.state.button}
              </button>
              <Information
                isOpen={this.state.isOpen}
                onClose={e => this.setState({ isOpen: false })}
              >
                MAP: 
              </Information>
            </MDBCardBody>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000001000268480_wh_66"
                alt=""
                className="img-fluid"
              />

              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>

            <MDBCardBody className="pb-0">
              <button
                style={{ marginTop: "20px", backgroundColor: "#f4522d" }}
                type="button"
                className="btn btn-primary btn-sm"
                onClick={e => this.setState({ formOpen: true,hotelName: "D Varee Jomtien Beach" })}
              >
                BOOK IN
              </button>
              <BookingForm
                formOpen={this.state.formOpen}
                hotelName={this.state.hotel2}
                onClose={e => this.setState({ formOpen: false })}
              >
                {this.state.hotelName}
              </BookingForm>
              <h4 className="font-weight-bold my-3">{this.state.hotel2}</h4>
              <Star4 />
              <p className="grey-text">
                <FontAwesomeIcon icon={faSearchLocation} />
                457 Moo 12, Jomtien Rd. Soi 13 - 14, อำเภอบางละมุง ชลบุรี 20150
              </p>
              <p>ราคา/ห้อง/คืน เริ่มต้นที่</p>
              <h3 style={{ color: "#f4522d" }}>{this.state.hotel2Prc}</h3>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={e => this.setState({ isOpen: true })}
              >
                {this.state.button}
              </button>
              <Information
                isOpen={this.state.isOpen}
                onClose={e => this.setState({ isOpen: false })}
              >
                MAP: 
              </Information>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1627691941882777130_wh_16"
                alt=""
                className="img-fluid"
              />

              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <button
                style={{ marginTop: "20px", backgroundColor: "#f4522d" }}
                type="button"
                className="btn btn-primary btn-sm"
                onClick={e => this.setState({ formOpen: true,hotelName: "สวัสดี ซีวิว พัทยา" })}
              >
                BOOK IN
              </button>
              <BookingForm
                formOpen={this.state.formOpen}
                hotelName={this.state.hotel3}
                onClose={e => this.setState({ formOpen: false })}
              >
                {this.state.hotelName}
              </BookingForm>
              <h4 className="font-weight-bold my-3">{this.state.hotel3}</h4>
              <Star4 />
              <p className="grey-text">
                <FontAwesomeIcon icon={faSearchLocation} />
                302, 10 ถนน พัทยาใต้ เมืองพัทยา อำเภอบางละมุง ชลบุรี 20260
              </p>
              <p>ราคา/ห้อง/คืน เริ่มต้นที่</p>
              <h3 style={{ color: "#f4522d" }}>{this.state.hotel3Prc}</h3>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={e => this.setState({ isOpen: true })}
              >
                {this.state.button}
              </button>
              <Information
                isOpen={this.state.isOpen}
                onClose={e => this.setState({ isOpen: false })}
              >
                MAP: 
              </Information>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-6 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100099866_wh_109"
                alt=""
                className="img-fluid"
              />

              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <button
                style={{ marginTop: "20px", backgroundColor: "#f4522d" }}
                type="button"
                className="btn btn-primary btn-sm"
                onClick={e => this.setState({ formOpen: true,hotelName: "The Grass Serviced Suites by At Mind" })}
              >
                BOOK IN
              </button>
              <BookingForm
                formOpen={this.state.formOpen}
                hotelName={this.state.hotel4}
                onClose={e => this.setState({ formOpen: false })}
              >
                {this.state.hotelName}
              </BookingForm>
              <h4 className="font-weight-bold my-3">{this.state.hotel4}</h4>
              <Star5 />
              <p className="grey-text">
                <FontAwesomeIcon icon={faSearchLocation} />
                99/1-2 ถนน พัทยาสายสอง เมืองพัทยา อำเภอบางละมุง ชลบุรี 20150
              </p>
              <p>ราคา/ห้อง/คืน เริ่มต้นที่</p>
              <h3 style={{ color: "#f4522d" }}>{this.state.hotel4Prc}</h3>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={e => this.setState({ isOpen: true })}
              >
                {this.state.button}
              </button>
              <Information
                isOpen={this.state.isOpen}
                onClose={e => this.setState({ isOpen: false })}
              >
                MAP: 
              </Information>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100764572_wh_77"
                alt=""
                className="img-fluid"
              />

              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>

            <MDBCardBody className="pb-0">
              <button
                style={{ marginTop: "20px", backgroundColor: "#f4522d" }}
                type="button"
                className="btn btn-primary btn-sm"
                onClick={e => this.setState({ formOpen: true,hotelName: "Woraburi Pattaya Resort & Spa" })}
              >
                BOOK IN
              </button>
              <BookingForm
                formOpen={this.state.formOpen}
                hotelName={this.state.hotel5}
                onClose={e => this.setState({ formOpen: false })}
              >
                {this.state.hotelName}
              </BookingForm>
              <h4 className="font-weight-bold my-3">{this.state.hotel5}</h4>
              <Star5 />
              <p className="grey-text">
                <FontAwesomeIcon icon={faSearchLocation} />
                237/45 หมู่ 9 ถนนเพนียดช้าง พัทยากลาง ตำบลหนองปรือ อำเภอบางละมุง
                จังหวัดชลบุรี 20150
              </p>
              <p>ราคา/ห้อง/คืน เริ่มต้นที่</p>
              <h3 style={{ color: "#f4522d" }}>{this.state.hotel5Prc}</h3>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={e => this.setState({ isOpen: true })}
              >
                {this.state.button}
              </button>
              <Information
                isOpen={this.state.isOpen}
                onClose={e => this.setState({ isOpen: false })}
              >
                MAP: 
              </Information>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100555532_wh_41"
                alt=""
                className="img-fluid"
              />

              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              
              <button
                style={{ marginTop: "20px", backgroundColor: "#f4522d" }}
                type="button"
                className="btn btn-primary btn-sm"
                onClick={e => this.setState({ formOpen: true,hotelName: "โรงแรม ยู จอมเทียน" })}
              >
                BOOK IN
              </button>
              <BookingForm
                formOpen={this.state.formOpen}
                hotelName={this.state.hotelName}
                onClose={e => this.setState({ formOpen: false })}
              >
                Hotel: {this.state.hotelName}
              </BookingForm>
              <h4 className="font-weight-bold my-3">{this.state.hotel6}</h4>
              <Star5 />
              <p className="grey-text">
                <FontAwesomeIcon icon={faSearchLocation} />
                หาดจอมเทียน, พัทยา, ชลบุรี, ประเทศไทย
              </p>
              <p>ราคา/ห้อง/คืน เริ่มต้นที่</p>
              <h3 style={{ color: "#f4522d" }}>{this.state.hotel6Prc}</h3>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={e => this.setState({ isOpen: true })}
              >
                {this.state.button}
              </button>
              <Information
                isOpen={this.state.isOpen}
                onClose={e => this.setState({ isOpen: false })}
              >
                MAP: 
              </Information>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
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
