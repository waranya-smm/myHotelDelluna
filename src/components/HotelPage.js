import React, { Component } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HotelList from './hotelList'
import Axios from 'axios';
import {
    MDBRow
  } from "mdbreact";
  import "./index.css";
export default class HotelPage extends Component {
    state = {
        isOpen: false
        
      };
    
      constructor() {
        super();
        this.state = {
          
          row: []
        };
      }

      componentDidMount() {
        var dataArray = []
        Axios.get('https://21cbfc7f-4bc2-4161-b629-f97b9dfa7dd7.mock.pstmn.io/v1/home').then(result=>{
          console.log(JSON.stringify(result.data.pattaya))
          result.data.pattaya.forEach(item=>{
            dataArray.push(item)
          })
          this.setState({row: dataArray})
        })
      }
    
      render() {
        return (
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
              Our Recommended Hotel 
            </h2>
            <MDBRow className="text-center">
            {this.state.row.map(item=> (
              <HotelList data={item}/>
              
            ))}
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
      