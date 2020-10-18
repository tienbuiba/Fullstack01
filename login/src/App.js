import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './views/Dashboard'
import './App.css';
import { Avatar } from '@material-ui/core';

import { FacebookLoginButton ,GoogleLoginButton} from "react-social-login-buttons";
import { Button, TextField, Grid, Typography ,Link} from '@material-ui/core';




export default class Class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isLogin: false,
      isLoginFailed: false,
      isLoading: false
    }
  }
  login() {
    this.callAuthAPI(this.state.username, this.state.password);
  }
  callAuthAPI(username, password) {
    let body = {
      username: username,
      password: password
    }
    let url = 'https://8e6484f74e30.ngrok.io/login'
    let config = {
      method: 'POST',
      url: url,
      data: body
    };
    this.setState({ isLoading: true })

    axios(config)
      .then((res) => {
        console.log('response: ', (res.data)); //status: true/false
        if (res.data?.status) {
          this.setState({ isLogin: true })
        }
        else {
          this.setState({ isLoginFailed: false })
        }
        this.setState({ isLoading: false })
      })
      .catch((err) => {
        console.log('error: ', err);
      })
  }
  render() {
    if (this.state.isLogin) {
      return (
        <Dashboard username={this.state.username} />
      )
    } else if (this.state.isLoading) {
      return (
        <div> Loading... </div>
      )
    } else {
      return (
        

<Grid container className="CreateLogin">

<Grid  className="form">

<Avatar  alt="Tien Bui" src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/p960x960/104496780_896036634251700_699740985854456987_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=3USTIVxCQ5sAX9ARjqx&_nc_ht=scontent.fhan2-6.fna&tp=6&oh=5dada4a57c17cc56a7f81947e9b0dd92&oe=5FB1F7CF" />

    <Typography >  Sign up   </Typography>

    <TextField   style={{margin: '10px'}} variant = "outlined"         
                  label = {'Username'}
                  value = {this.state.username}
                  onChange = {(e) => {
                    this.setState({
                      username: e.target.value
                    });
                  }}
              />

  <TextField   style={{magin:'10px'}} variant = "outlined"                                
                  label = {'Password'}
                  value = {this.state.password}
                  onChange = {(e) => {
                    this.setState({
                      password: e.target.value
                    });
                  }}
                  />
   
 
 
    <Button   style={{color:'black',backgroundColor: "skyblue"}}
             variant = "contained"                   
                    onClick = {() => this.login()}>
                    login
                  </Button>  
                  {this.state.loginFail ? <Typography >
                    Incorrect username or password
                  </Typography> : null}
           
              <FacebookLoginButton  onClick={() => alert("Hello")} />
            
                
   

</Grid>

</Grid>
      );
    }
  }
}


