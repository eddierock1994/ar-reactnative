/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
		AppRegistry,
		Text,
		View,
		StyleSheet,
		PixelRatio,
		TouchableHighlight,
		TouchableOpacity
} from 'react-native';

import {
		ViroARSceneNavigator
} from 'react-viro';

import LoginComponent from './js/LoginComponent';
import ARComponent from './js/ARComponent';
import LocationARComponent from './js/LocationARComponent';


export default class ViroSample extends Component {

	constructor() {
		super();

		
		this.getView = this.getView.bind(this);
		this.getArNavigator = this.getArNavigator.bind(this);
		this.login = this.login.bind(this);
		this.anchorFound = this.anchorFound.bind(this);
		this.replay = this.replay.bind(this);

		this.state = {
		    viroAppProps : {
				anchorFound: this.anchorFound,
				showAnimation: false
			},
			token: "",
			count: "0",
			foundClues: {},
			treasureHuntSolved: false
		}
	}

	render() {
		isLoggedIn = this.state.token.trim() === "" ? false : true;
		
		if(!isLoggedIn)
		{
			return (
				<View style={styles.container}>
					<LoginComponent login={this.login}/>
				</View>
			);
		}
		else
		{
			return this.getView();
		}
		
	}

	getView() {
		const arNavigator = this.getArNavigator();
		if(!this.state.treasureHuntSolved){
			return (
				<View style={styles.outer}>
					{arNavigator}
					
					<Text style={styles.counter}>
						{this.state.count}
					</Text>
				</View>
			);
		}
		else {
			return (
				<View>
					<Text style={styles.congratulations}>
						Congratulations!!!
					</Text>
					<Text style={styles.clues}>
						You have found all the clues
					</Text>
					<View style={styles.bottom}>
						<TouchableOpacity style={styles.replayButton} onPress={this.replay}> 
							<Text style={{color: "white", fontWeight: "bold"}}>Play Again</Text>
						</TouchableOpacity>
					</View> 
				</View>
			);
		}
	}

	getArNavigator() {
		return (
			<ViroARSceneNavigator viroAppProps={this.state.viroAppProps} apiKey="475BA180-F053-492A-B876-1A82C4431685"
			initialScene={{scene: ARComponent}} style={styles.arView}/>
		);
	}

	login(tokenValue){
		this.setState({token: tokenValue});
	}

	replay(){
		this.setState({count: 0, treasureHuntSolved: false, clues: {}});
	}

	anchorFound(clueId) {
		if(this.state.foundClues && this.state.foundClues['clueId']) {
			// do nothing
		} else {
			let clues = this.state.foundClues;
			clues[clueId] = true;
			let tempCount = 0;
			for(let i=1; i<=5; i++) {
				if(clues[i] && clues[i] == true)
					tempCount++;
			}
			if(tempCount == 5) {
				this.setState({
					viroAppProps : {
						anchorFound: this.anchorFound,
						showAnimation: true
					}
				});
			}
			if(tempCount == 5) {
				setTimeout(() => {
					this.setState({treasureHuntSolved: true});	
				}, 3000);
			}
			this.setState({foundClues: clues, count: tempCount});	
		}
	}
}

module.exports = ViroSample

const styles = StyleSheet.create({
	outer: {
		flex: 1
	},
	arView: {
		flex: 1
	},
	counter: {
		color: "white",
		fontSize: 32,
		textAlign: "center",
		right: 45, 
		top: 45,
		backgroundColor: "rgba(0,0,0,0.5)",
		position: "absolute",
		paddingLeft: 20,
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		borderRadius: 5
	},
	replayButton: {
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
	congratulations: {
		fontSize: 48,
		textAlign: "center",
		paddingTop: 100
	}, 
	clues: {
		fontSize: 32,
		textAlign: "center",
		paddingBottom: 50
	}
});