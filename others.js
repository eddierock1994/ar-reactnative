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

const CarScene = require('./CarScene');
const BikeScene = require('./BikeScene');

export default class SceneNavigation extends Component {

    constructor(props) {
        super(props); this.selectBike = this.selectBike.bind(this);
    }
    render() {
        return (
            <a>
            <ViroARScene>
                <ViroNode position={[2.0, 5.0, -2.0]} 
                rotation={[0, 45, 45]} scale={[2.0, 2.0, 2.0]}>
                    <ViroText text="Inside node"position={[2.0, 5.0, -2.0]}/>
                    <ViroImage source={{uri:"http://localhost:8500/AR/bike.png"}}/>
                </ViroNode>
                <ViroText text="Outside node"position={[2.0, 5.0, -2.0]}/>
            </ViroARScene>

            <ViroCamera position={[0, 0, 0]} active={true} />

            <ViroOrbitCamera position={[0, 0, 0]} focalPoint={[0, 0, -1]}/>


            <ViroSpotLight
                color="#ffffff"
                attenuationStartDistance={2}
                attenuationEndDistance={6}
                position={[0, -5, 5]}
                direction={[0 -1, 0]}
                innerAngle={0}
                outerAngle={45}/>

            <ViroSound 
                paused={false}
                muted={false}
                source={require('./res/sound.mp3')}
                loop={false}
                volume={1.0}
                onFinish={this.onFinishSound}
                onError={this.onErrorSound}/>
                
        );
    }
    selectBike() {
        this.props.sceneNavigator.push({scene: BikeScene});
    }

}

module.exports = SceneNavigation;