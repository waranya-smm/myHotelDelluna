import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import auth from "../firebase";
import LoginedFormPage from "../main"
import HotelPage from "./HotelPage";
import HotelBooking from "./HotelBooking"

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
  MDBInputGroup
} from "mdbreact";
import "./index.css";
export default class ClassicFormPage extends Component {
  state = {
    collapseID: ""
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      currentUser: null,
      message: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    componentDidMount() {
        auth.onAuthStateChanged(user => {
          if (user) {
            this.setState({
              currentUser: user
            });
          }
        });
      }
    
      onChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const { email, password } = this.state;
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(response => {
            this.setState({
              currentUser: response.user
            });
          })
          .catch(error => {
            this.setState({
              message: error.message
            });
          });
      };


  render() {
    const { message, currentUser } = this.state;

    if (currentUser) {
        return (
          <div>
            <LoginedFormPage thisEmail={currentUser.email} logout={this.logout} />
            <HotelBooking />
          </div>
        );
      }

    return (
      <div>
        <div id="classicformpage">
          <MDBView>
            {" "}
            {/* sign up from*/}
            <MDBMask
              style={{ paddingTop: 46 }}
              className="d-flex justify-content-center align-items-center gradient"
            >
              <MDBContainer>
                <MDBRow>
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                  >
                    <h1 style={{ color: "#fff" }}>Sign up</h1>
                    <hr className="hr-light" />
                    <h6 style={{ color: "#fff" }}>
                      กรุณาสมัครสมาชิก เพื่อสิทธิพิเศษที่เหนือกว่า
                    </h6>

                    <button type="button" className="btn btn-outline-primary">
                      LEARNMORE
                    </button>
                  </MDBAnimation>

                  <MDBCol
                    md="8"
                    xl="4"
                    className="mb-4"
                    style={{ color: "#fff", fontSize: 16 }}
                  >
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCard id="classic-card">
                        <MDBCardBody className="white-text">
                          <h3 className="text-center">Register</h3>
                          <hr className="hr-light" />
                          <form onSubmit={this.onSubmit}>
                            <label>Your First and Last name: </label>
                            <MDBInputGroup
                              className="form-control form-control-sm"
                              inputs={
                                <>
                                  <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    placeholder="First name"
                                    required
                                  />
                                  <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    placeholder="Last name"
                                    required
                                  />
                                </>
                              }
                            />

                            <label>Your Birthdate: </label>
                            <input
                              id="bdate"
                              type="date"
                              className="form-control form-control-sm"
                              required
                            />

                            <label>Your Email: </label>
                            <input
                              type="email"
                              className="form-control form-control-sm"
                              id="email2"
                              placeholder="Enter email"
                              name="email"
                              onChange={this.onChange}
                              required
                            ></input>

                            <label>Password: </label>
                            <input
                              type="password"
                              className="form-control form-control-sm"
                              id="password"
                              placeholder="Enter password"
                              name="password"
                              onChange={this.onChange}
                              required
                            ></input>

                            <label>Confirm Password: </label>
                            <input
                              type="password"
                              className="form-control form-control-sm"
                              id="Cpassword"
                              placeholder="Enter password"
                              name="password"
                              required
                            ></input>

                             {message ? (
                              <p className="help is-danger">{message}</p>
                            ) : null}
                            <hr className="hr-light" />
                            <div className="field is-grouped">
                              <div className="control">
                                <button className="btn btn-primary">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                          <hr className="hr-light" />
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </div>
        <HotelPage />
      </div>
    );
  }
}
