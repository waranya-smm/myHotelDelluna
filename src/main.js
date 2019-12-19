import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import HotelBooking from "./components/HotelBooking";
import ClassicFormPage from "./components/ClassicFormPage";
import HotelPage from "./components/HotelPage";
import BookingShow from "./components/bookingShow";
import auth from "./firebase";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
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
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <ClassicFormPage />;
  }
  return <LoginFormPage />;
}


function SigninButton(props) {
  return <p onClick={props.onClick}>Sign Up</p>;
}

function SignUPButton(props) {
  return <p onClick={props.onClick}>Login</p>;
}

function LogoutButton(props) {
  return <p onClick={props.onClick}>Logout</p>;
}

class Navbar extends Component {
  state = {
    collapseID: ""
  };

  setLoggined = () => {
    this.setLoggined({ onLoggedIn: true });
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  constructor(props) {
    super(props);
    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleSignUPClick = this.handleSignUPClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleSignInClick() {
    this.setState({ isLoggedIn: true });
  }

  handleSignUPClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // const onLoggedIn = this.state.onLoggedIn;
    let showState;

    if (isLoggedIn) {
      showState = <SignUPButton onClick={this.handleSignUPClick} />;
    } else {
      showState = <SigninButton onClick={this.handleSignInClick} />;
    }

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="navBar">
        <Greeting isLoggedIn={isLoggedIn} />
       
        <Router>
          {/* left side */}
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">DEL-LUNA</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Hotel</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="nav-item nav-link" to="#!">
                        {showState}
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>
      </div>
    );
  }
}


class LoginFormPage extends Component {
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
      .signInWithEmailAndPassword(email, password)
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

  logout = e => {
    console.log("logout");

    e.preventDefault();
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
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
      <section>
        <div id="LoginFormPage">
          <MDBView>
            <MDBMask
              style={{ paddingTop: 126 }}
              className="d-flex justify-content-center align-items-center gradient"
            >
              <MDBContainer>
                <MDBRow>
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                  >
                    <h1 style={{ color: "#fff" }}>Login</h1>
                    <hr className="hr-light" />
                    <h6 style={{ color: "#fff" }}>
                      กรุณาเข้าสู่ระบบ เพื่อใช้บริการจองโรงแรมไปกับ Hotel Del
                      Luna
                    </h6>

                    <button type="button" className="btn btn-outline-primary">
                      SIGN UP
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
                          <h3 className="text-center">Login</h3>
                          <hr className="hr-light" />
                          <form onSubmit={this.onSubmit}>
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
      </section>
    );
  }
}

class LoginedFormPage extends Component {
  state = {
    collapseID: "",
    isOpen: false,
    currentUser: null
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div id="UserLoginFormPage">
        <MDBView>
          <MDBMask
            style={{ paddingTop: 126 }}
            className="d-flex justify-content-center align-items-center gradient"
          >
            <MDBContainer>
              <MDBRow>
                <div id="card" className="card">
                  <img
                    src="https://picsum.photos/200"
                    alt="user"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <h1>AAA</h1>
                  <p className="email">{this.props.thisEmail}</p>

                  <button
                    onClick={e => this.setState({ isOpen: true })}
                    type="button"
                    className="btn btn-info"
                  >
                    My Booking
                  </button>
                  <button onClick={this.props.logout}>Logout</button>
                  <BookingShow
                    isOpen={this.state.isOpen}
                    onClose={e => this.setState({ isOpen: false })}
                  ></BookingShow>
                  {/* <HotelBooking /> */}
                </div>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
