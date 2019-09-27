import React, { Component } from 'react';

import {
  StyleSheet, 
  Button, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Text, 
  Image} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
} from 'react-viro';

const axios = require('axios');

export default class LoginComponent extends Component {

  constructor(props) {
    super(props);

    this.loginUser = this.loginUser.bind(this);

    this.state = {
        username: "",
        password: ""
    };
  }

  render() {
    return (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Image source={require('./res/cflogo.png')} style={styles.logo}/>
            <TextInput textContentType="username" value={this.state.username} 
              onChangeText={(username) => this.setState({username})} style={styles.usernameInput} placeholder="Username"/>
            <TextInput textContentType="password" value={this.state.password} secureTextEntry={true} 
              onChangeText={(password) => this.setState({password})} style={styles.passwordInput} placeholder="Password"/>
          </View>
          <View style={styles.bottom}>
              <TouchableOpacity style={styles.button} onPress={this.loginUser}> 
                <Text style={{color: "white", fontWeight: "bold"}}>LOGIN</Text>
              </TouchableOpacity>
          </View>           
        </View>
    );
  }

  loginUser() {
    axios.get("http://10.192.168.50:8500/rest/services/login?username="+this.state.username+"&password="+this.state.password)
    .then(function(response){
      this.props.login("123456");
    })
    .catch(function(error){

    });
  }
}

module.exports = LoginComponent;

const styles = StyleSheet.create({
  usernameInput: {
    margin: 24,
    fontSize: 18,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    height: 40
  },
  passwordInput: {
    margin: 24,
    fontSize: 18,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    height: 40
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#536DFE',
    padding: 10,
    marginTop: 0,
    marginLeft: 30,
    marginRight: 30,
    letterSpacing: 3,
    height: 50
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bottom: {
    marginBottom: 36,
    justifyContent: 'flex-end'
  },
  top: {
  },
  parent: {
  }
});