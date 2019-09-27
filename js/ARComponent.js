'use strict';

import React, { Component, Text, View } from 'react';

import {StyleSheet} from 'react-native';

import {
	ViroSceneNavigator,
	ViroARScene,
	ViroARTrackingTargets,
	Viro3DObject,
	ViroAmbientLight,
	ViroNode,
	ViroARImageMarker,
	ViroSpotLight,
	ViroParticleEmitter,
	ViroSound,
	ViroOrbitCamera,
	ViroCamera,
	ViroAnimatedImage
  } from 'react-viro';


export default class ARComponent extends Component {

  	constructor() {
		super();
		this.state = {
			display: false,
			count: 0,
			showAnimation: false,
			showObj1: false,
			showObj2: false,
			showObj3: false,
			showObj4: false,
			showObj5: false
		};

		this.onAnchorFound1 = this.onAnchorFound1.bind(this);
		this.onAnchorFound2 = this.onAnchorFound2.bind(this);
		this.onAnchorFound3 = this.onAnchorFound3.bind(this);
		this.onAnchorFound4 = this.onAnchorFound4.bind(this);
		this.onAnchorFound5 = this.onAnchorFound5.bind(this);

	}

  	render() {
    	return (
			<ViroARScene>
				<ViroARImageMarker target={"marker1"} onAnchorFound={this.onAnchorFound1}>

				<ViroSpotLight
					color="#ffffff"
					position={[0, 2, 0]}
					direction={[0, -1, 0]}
					innerAngle={0}
					outerAngle={12}
					castShadows={true}/>
					
					<Viro3DObject 
						source={{uri:"http://10.192.168.50:8500/res/1/model.obj"}}
						resources={[{uri:"http://10.192.168.50:8500/res/1/model.mtl"}]}
						scale={[0.2,0.2,0.2]}
						position={[0,0,0]}
						rotation={[0,90,0]}
						type="OBJ" visible={this.state.showObj1}/>

				</ViroARImageMarker>

				<ViroARImageMarker target={"marker4"} onAnchorFound={this.onAnchorFound4}>

					<ViroAmbientLight color="#ffffff" />
					
					<Viro3DObject 
						source={{uri:"http://10.192.168.50:8500/res/2/model.obj"}}
						resources={[{uri:"http://10.192.168.50:8500/res/2/model.mtl"}]}
						scale={[0.3,0.3,0.3]}
						position={[0,0,0]}
						rotation={[0,0,0]}
						physicsBody={{type:"Dynamic", mass:0.2}} 
						type="OBJ"  visible={this.state.showObj4}/>
					
				</ViroARImageMarker>

				<ViroARImageMarker target={"marker3"} onAnchorFound={this.onAnchorFound3}>

					<ViroAmbientLight color="#ffffff" />
					
					<Viro3DObject 
						source={{uri:"http://10.192.168.50:8500/res/3/model.obj"}}
						resources={[{uri:"http://10.192.168.50:8500/res/3/model.mtl"}]}
						scale={[0.15,0.15,0.15]}
						position={[0,0,0]}
						rotation={[0,0,0]}
						type="OBJ"  visible={this.state.showObj3}/>
					
				</ViroARImageMarker>

				<ViroARImageMarker target={"marker5"} onAnchorFound={this.onAnchorFound5}>

					<ViroAmbientLight color="#ffffff" />

					<ViroSound
						source={{uri:"http://10.192.168.50:8500/res/sound/pokemon.mp3"}}
						paused={false}/>
					
					<Viro3DObject 
						source={{uri:"http://10.192.168.50:8500/res/4/model.obj"}}
						resources={[{uri:"http://10.192.168.50:8500/res/4/model.mtl"}]}
						scale={[0.4,0.4,0.4]}
						position={[0,0,0]}
						rotation={[0,0,0]}
						type="OBJ"  visible={this.state.showObj5}/>
				</ViroARImageMarker>

				<ViroARImageMarker target={"marker2"} onAnchorFound={this.onAnchorFound2}>

					<ViroAmbientLight color="#ffffff" />

					<ViroOrbitCamera position={[0, 0, 1]} focalPoint={[0, 0, 0]} active={this.state.showObj2} />
					
					<Viro3DObject 
						source={{uri:"http://10.192.168.50:8500/res/5/model.obj"}}
						resources={[{uri:"http://10.192.168.50:8500/res/5/model.mtl"}]}
						scale={[1,1,1]}
						position={[0.5,0,-1]}
						rotation={[0,90,0]}
						type="OBJ"  visible={this.state.showObj2}/>
					
				</ViroARImageMarker>
			</ViroARScene>	
    	);
  	}
	  
	onAnchorFound1(anchor) {
		this.setState({
			showObj1: true,
			showObj2: false,
			showObj3: false,
			showObj4: false,
			showObj5: false
		});
		this.props.arSceneNavigator.viroAppProps.anchorFound("1");
	}

	onAnchorFound2(anchor) {
		this.setState({
			showObj1: false,
			showObj2: true,
			showObj3: false,
			showObj4: false,
			showObj5: false
		});
		this.props.arSceneNavigator.viroAppProps.anchorFound("2");
	}

	onAnchorFound3(anchor) {
		this.setState({
			showObj1: false,
			showObj2: false,
			showObj3: true,
			showObj4: false,
			showObj5: false
		});
		this.props.arSceneNavigator.viroAppProps.anchorFound("3");
	}

	onAnchorFound4(anchor) {
		this.setState({
			showObj1: false,
			showObj2: false,
			showObj3: false,
			showObj4: true,
			showObj5: false
		});
		this.props.arSceneNavigator.viroAppProps.anchorFound("4");
	}

	onAnchorFound5(anchor) {
		this.setState({
			showObj1: false,
			showObj2: false,
			showObj3: false,
			showObj4: false,
			showObj5: true
		});
		this.props.arSceneNavigator.viroAppProps.anchorFound("5");
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.arSceneNavigator.viroAppProps.showAnimation !== undefined) {
			this.setState({showAnimation: nextProps.arSceneNavigator.viroAppProps.showAnimation});
		}
	}
}

ViroARTrackingTargets.createTargets({
	"marker1" : {
	  source : {uri:"http://10.192.168.50:8500/res/markers/marker1.png"},
	  orientation : "Up",
	  physicalWidth : 0.4
	},
	"marker2" : {
		source : {uri:"http://10.192.168.50:8500/res/markers/marker2.png"},
		orientation : "Up",
		physicalWidth : 0.4
	},
	"marker3" : {
		source : {uri:"http://10.192.168.50:8500/res/markers/marker3.png"},
	  orientation : "Up",
	  physicalWidth : 0.4
	},
	"marker4" : {
		source : {uri:"http://10.192.168.50:8500/res/markers/marker4.png"},
		orientation : "Up",
		physicalWidth : 0.4
	},
	"marker5" : {
		source : {uri:"http://10.192.168.50:8500/res/markers/marker5.png"},
		orientation : "Up",
		physicalWidth : 0.4
	},
});

module.exports = ARComponent;
