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
  ViroAnimatedImage,
  ViroConstants,
  ViroCamera
} from 'react-viro';

const axios = require('axios');

export default class LocationARComponent extends Component {
	
	constructor(props){
		super(props);

        state = {
			canTrack: false,
			display: false
		};
		this._onInitialized = this._onInitialized.bind(this);
	}

    render() {
        const image = <ViroAnimatedImage height={2} width={2} position={0,0,-1}
        source={require("./res/confetti/confetti.gif")} visible={true}/>;
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized} >
                <ViroCamera active="true"/>
                {image}
            </ViroARScene>
        );
    }
    
    componentDidMount(){
        Geolocation.watchPosition(
            (position) => {
                if(this.matchesPosition(position)){
                    this.setState({
                        display: true
                    });
                }
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    _onInitialized(state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            this.setState({canTrack: true});
        } else if (state == ViroConstants.TRACKING_NONE) {
            this.setState({canTrack: false});
        }
  	}

}

module.exports = LocationARComponent;

const styles = StyleSheet.create({
  textInput: {
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
  }
});