import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Link
} from "react-router-dom";
import { Form, Row, Col, Input, Modal, Button } from 'antd';
import actions from './redux/auth/actions';
import header from './images/header.png'
import logo from './images/Logo.png'
import icono1 from './images/icono1.png'
import icono2 from './images/icono2.png'
import icono3 from './images/icono3.png'
import icono4 from './images/icono4.png'
import tech from './images/tech.png'
import twitter from './images/Twitter.png'
import face from './images/Face.png'
import linkedin from './images/Linkedin.png'
import insta from './images/Ig.png'

const {logout} = actions;


class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      loadingRecetas:false,
      recetas:[],
      banner:''
    }
  }
  componentDidMount(){
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="header-home">
          
          <nav className="navbar navbar-expand-lg navbar-light fixed-top pleft" id="mainNav">
              <div className="container-fluid">
                
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                  <img src={logo} className="img-devices" alt="devices"/>
                </a>
              
            
              </div>
          </nav>
         <div className="banner-section">
            <Row type="flex" className="banner-row">
              <Col md={14} xs={24} className="pleft">
                <div className="red-text">
                Our 
                </div>
                <div className="big-text">
                differentiators
                </div>
                <div className="bold-text">
                Over <span className="bold-red">10 </span> years
                </div>
                <div className="thin-text">
                of experience
                </div>
                <div className="bold-text ptop">
                  <span className="bold-red">90</span> + Employees
                </div>
                <div className="thin-text">
                around the world
                </div>
              </Col>
              <Col md={10} xs={24}>
                <div className="img-boxHeader">
                  <img src={header} className="img-devices" alt="devices"/>
                </div>
              </Col>
            </Row>
          </div>
      </div>

          <div className="services-section">
            <Row type="flex" className="banner-row">
              <Col md={24} xs={24} className="pleft">
                <div className="red-text-sub">
                Our 
                </div>
                <div className="big-text-sub">
                Services
                </div>
                </Col>
            </Row>
            <Row type="flex" className="serv-row">
              <Col md={12} xs={24} className="pleft col-serv" >
                  <div className="img-service">
                    <img src={icono1} className="img-devices" alt="devices"/>
                  </div>
                  <div className="mid-text-sub">
                  Delivery Team
                </div>
                <div className="text-serv">
                  Preparamos el equipo ideal para tu proyecto teniendo en cuenta la experiencia de cada integrante de nuestro staff.
                </div>
                <a className="btn-servicio team">
                  <span>Your Team</span>
                </a>
              </Col>
              <Col md={12} xs={24} className="pleft col-serv" >
                  <div className="img-service">
                    <img src={icono2} className="img-devices" alt="devices"/>
                  </div>
                  <div className="mid-text-sub">
                  Staff Augmentation
                </div>
                <div className="text-serv">
                ¡Potenciá tus servicios! Desde Avalith te brindamos respaldo en momentos donde más necesitas soporte para tus proyectos.
                </div>
                <a className="btn-servicio lets">
                <span>
                Let´s go bigger
                  </span>
                </a>
              </Col>
              </Row>
            <Row type="flex" className="serv-row">
              
              <Col md={12} xs={24} className="pleft col-serv" >
                  <div className="img-service">
                    <img src={icono3} className="img-devices" alt="devices"/>
                  </div>
                  <div className="mid-text-sub">
                  MVP Development
                </div>
                <div className="text-serv">
                Crear un MVP para cada proyecto nos ayuda a evaluar de forma rápida y cuantitativa si la propuesta en cuestión es de valor para sus futuros usuarios.
                </div>
                <a className="btn-servicio do">
                <span>
                Let´s do it
                </span>
                </a>
              </Col>
              <Col md={12} xs={24} className="pleft col-serv" >
                  <div className="img-service">
                    <img src={icono4} className="img-devices" alt="devices"/>
                  </div>
                  <div className="mid-text-sub">
                  Project Strategy
                </div>
                <div className="text-serv">
                Cada proyecto es único y está formado por distintas fases que requieren tareas específicas, un equipo de trabajo concreto.
                </div>
                <a className="btn-servicio think">
                <span>
                Think with us
                </span>
                
                </a>
              </Col>
            </Row>
          </div>

          <div className="tech-section">
            <Row type="flex" className="row-tech">
              <Col md={12} xs={24} className="pleft" >
                 <div className="img-tech">
                    <img src={tech} className="img-devices" alt="devices"/>
                  </div>
                    <a className="btn-servicio tech rwd begin">
                       <span> Let´s begin</span>
                  </a>
              </Col>
              <Col md={12} xs={24} className="pleft" >
                <div className="red-text-sub">
                  Our 
                  </div>
                  <div className="big-text-sub">
                  Technologies
                </div>
                <div className="text-serv">
                We work on several cutting edge tenchnoly and we keep our team and us learning about them and new ones that could benefit a future project. 
                </div>
                <a className="btn-servicio tech full begin">
                <span> Let´s begin</span>
                
                </a>
              </Col>
            </Row>
          </div>
          <div className="footer-section">
            <Row type="flex" className="row-footer ">
                <div className="linetop">
</div>
                 <Col md={6} xs={24}>
                  <div className="bold-ft">
                      Contact Us
                  </div>
                  <div className="textos-ft">
                    <div className="light-ft">
                        hello@avalith.net
                    </div>
                    <div className="light-ft">
                        +54 0223 464-4850
                    </div>
                  </div>
                
                  </Col>
                 <Col md={6} xs={24}>
                 <div className="bold-ft">
                     Subscribe to us
                  </div>
                  <div className="bold-ft">
                      <input type="text" id="email" name="fname" placeholder="Enter your email here"/> 
                  </div>
                 </Col>
                 <Col md={6} xs={24}>
                 <div className="bold-ft">
                     Follow us
                  </div>
                  <div className="inline social">
                  <div className="social-log">
                      <img src={linkedin} className="img-devices" alt="devices"/>
                    </div>
                    <div className="social-log">
                      <img src={face} className="img-devices" alt="devices"/>
                    </div>
                    <div className="social-log">
                      <img src={twitter} className="img-devices" alt="devices"/>
                    </div>
                    <div className="social-log">
                      <img src={insta} className="img-devices" alt="devices"/>
                    </div>
                  </div>
                 </Col>
                 <Col md={6} xs={24} className="logo">
                   <div className="mini-log">
                      <img src={logo} className="img-devices" alt="devices"/>
                    </div>
                 </Col>
                
            </Row>
            <Row type="flex" className="row-footer">
                 <Col md={6} xs={24}>
                    <div className="mini-ft">
                      All rights reserved 2020. Tres Cubos S.A.
                    </div>
                 </Col>
                 <Col md={6} xs={24}>
                    <div className="mini-ft">
                     <a className="priv"> Privacy </a> <span className="terms"> <a className="term">Terms of Service </a></span>
                    </div>
                 </Col>
                 <Col md={6} xs={24}>
                    <div className="mini-ft">
                      Contact
                    </div>
                 </Col>
            </Row>
          </div>

      </div>
    );
  }
}


// export default Home;
export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {logout}
)(Home);
