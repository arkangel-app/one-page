import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import Home from "./Home";
import { Form, Input, Modal, Button,Alert,message } from 'antd';
import actions from './redux/auth/actions';

const {logout} = actions;

class Main extends Component {
  state = {
    loading: false,
    visible: false,
    vHeader:true,
    menuOpen: false,
    vLogo:true,
    path:'',
    loadingRecover: false,
    errorRecover:undefined,
    award:"premios"
  }

  componentDidMount(){
    } 


  render() {
    const ScrollToTop = () => {
      window.scrollTo(0, 0);
      return null;
    };

    return (
      <BrowserRouter>
        <div  className="container-fluid">
       
          <div className="content">
            <Route component={ScrollToTop} />
            <Route path="/"  component={Home}/>
           </div>
      
        


        </div>
      </BrowserRouter>




    );
  }
}
const WrappedMain = Form.create({ name: 'recover' })(Main);

export default connect(
  state => ({
    profile: state.Auth.profile,
    pageName: state.Auth.pagename,
  }),
  {logout}
)(WrappedMain);
