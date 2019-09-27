<ViroARImageMarker target={"marker1"} onAnchorFound={this.onAnchorFound1}>

				<ViroSpotLight
					color="#ffffff"
					position={[0, 2, 0]}
					direction={[0, -1, 0]}
					innerAngle={0}
					outerAngle={12}
					castShadows={true}/>
					
					<Viro3DObject 
						source={require("./res/1/model.obj")}
						resources={[require('./res/1/materials.mtl')]}
						scale={[0.2,0.2,0.2]}
						position={[0,0,0]}
						rotation={[0,90,0]}
						type="OBJ" visible={this.state.showObj1}/>
				
				</ViroARImageMarker>

<ViroARImageMarker target={"marker2"} onAnchorFound={this.onAnchorFound2}>

					<ViroAmbientLight color="#ffffff" />

					<ViroOrbitCamera position={[0, 0, 1]} focalPoint={[0, 0, 0]} active={this.state.showObj2} />
					
					<Viro3DObject 
						source={require("./res/2/model.obj")}
						resources={[require('./res/2/materials.mtl')]}
						scale={[1,1,1]}
						position={[0.5,0,-1]}
						rotation={[0,90,0]}
						type="OBJ"  visible={this.state.showObj2}/>
					
				</ViroARImageMarker>

				<ViroARImageMarker target={"marker3"} onAnchorFound={this.onAnchorFound3}>

					<ViroAmbientLight color="#ffffff" />

					<ViroParticleEmitter
						position={[0, 4.5, 0]}
						duration={2000}
						run={true}
						image={{
							source:require("./res/particles/particle_snow.png"),                 
							height:0.1,
							width:0.1,
						}}/>
					
					<Viro3DObject 
						source={require("./res/3/model.obj")}
						resources={[require('./res/3/materials.mtl')]}
						scale={[0.15,0.15,0.15]}
						position={[0,0,0]}
						rotation={[0,0,0]}
						type="OBJ"  visible={this.state.showObj3}/>
					
				</ViroARImageMarker>

				<ViroARImageMarker target={"marker4"} onAnchorFound={this.onAnchorFound4}>

					<ViroAmbientLight color="#ffffff" />
					
					<Viro3DObject 
						source={require("./res/4/model.obj")}
						resources={[require("./res/4/materials.mtl")]}
						scale={[0.3,0.3,0.3]}
						position={[0,0,0]}
						rotation={[0,0,0]}
						physicsBody={{type:"Dynamic", mass:0.2}} 
						type="OBJ"  visible={this.state.showObj4}/>
					
				</ViroARImageMarker>

				<ViroARImageMarker target={"marker5"} onAnchorFound={this.onAnchorFound5}>

					<ViroAmbientLight color="#ffffff" />

					<ViroSound
						source={require("./res/sound/pokemon.mp3")}
						paused={false}/>
					
					<Viro3DObject 
						source={require("./res/5/model.obj")}
						resources={[require('./res/5/materials.mtl')]}
						scale={[0.4,0.4,0.4]}
						position={[0,0,0]}
						rotation={[0,0,0]}
						type="OBJ"  visible={this.state.showObj5}/>
				</ViroARImageMarker>



                <Text style={styles.counter}>
							{this.state.count}
						</Text>