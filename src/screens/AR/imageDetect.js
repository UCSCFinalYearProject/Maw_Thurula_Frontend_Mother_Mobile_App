import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { ViroARScene, ViroARSceneNavigator, ViroTrackingStateConstants, ViroText, ViroTrackingState, ViroTrackingReason, ViroBox, ViroMaterials, ViroAnimations, Viro3DObject, Viro360Image, Viro360Video, ViroSpinner, ViroARImageMarker, ViroARTrackingTargets, ViroLightingEnvironment, ViroNode, ViroSphere, ViroSpotLight, ViroQuad, ViroAmbientLight } from '@viro-community/react-viro';
// import myBoj from './res/tesla/object_car.obj';
// import myBoj1 from './res/tesla/playing/baby.obj';
// import myBoj2 from './res/tesla/SittingBaby/baby.obj';
// import myBoj3 from './res/tesla/CrawlingBaby/baby.obj';

import createReactClass from 'create-react-class';
var HelloWorldSceneAR = createReactClass({
  getInitialState() {
    return {
      texture: "white",
      playAnim: false,
      animateCar: false,
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    }
  },

  render: function () {
    return (
      <ViroARScene>

        <ViroLightingEnvironment  />

        <ViroARImageMarker target={"logo"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <ViroNode scale={[0, 0, -1]} animation={{ name: this.state.animName, run: this.state.playAnim, }}>

          </ViroNode>
          {/* 
          <ViroBox
            height={1}
            width={1}
            position={[0, 0, -0.5]} scale={[.2, .2, .2]}
  
          >

          </ViroBox> */}

          <ViroSphere materials={["white_sphere"]}
            heightSegmentCount={200} widthSegmentCount={200} radius={.03}
            position={[-.2, .25, 0]}
            onClick={this._selectWhite}
            animation={{ name: "tapAnimation", run: this.state.tapWhite, onFinish: this._animateFinished }}
          />

          <ViroSphere materials={["blue_sphere"]}
            heightSegmentCount={200} widthSegmentCount={200} radius={.03}
            position={[-.1, .25, 0]}
            onClick={this._selectBlue}
            animation={{ name: "tapAnimation", run: this.state.tapBlue, onFinish: this._animateFinished }}
          />

          <ViroSphere materials={["grey_sphere"]}
            heightSegmentCount={200} widthSegmentCount={200} radius={.03}
            position={[0, .25, 0]}
            onClick={this._selectGrey}
            animation={{ name: "tapAnimation", run: this.state.tapGrey, onFinish: this._animateFinished }}
          />

          <ViroSphere materials={["red_sphere"]}
            heightSegmentCount={200} widthSegmentCount={200} radius={.03}
            position={[.1, .25, 0]}
            onClick={this._selectRed}
            animation={{ name: "tapAnimation", run: this.state.tapRed, onFinish: this._animateFinished }}
          />

          <ViroSphere materials={["yellow_sphere"]}
            heightSegmentCount={200} widthSegmentCount={200} radius={.03}
            position={[.2, .25, 0]}
            onClick={this._selectYellow}
            animation={{ name: "tapAnimation", run: this.state.tapYellow, onFinish: this._animateFinished }}
          />

          <ViroAmbientLight color="#FFFFFF" />
          <Viro3DObject
           
            source={myBoj1}
            type="OBJ"
           position={[2,0, -1 ]}
           rotation={[0, 0 , 0]}

            scale={[0.01, 0.01, 0.00001]}
            materials={this.state.texture}
            onClick={this._toggleButtons}
            animation={{ name: "scaleCar", run: this.state.animateCar, }} />

<Viro3DObject
           
           source={myBoj3}
           type="OBJ"
           scale={[0.01, 0.01, 0.00001]}
           position={[0,0, -1 ]}
           rotation={[-90, 0 , 0]}
           materials={this.state.texture}
           onClick={this._toggleButtons}
           animation={{ name: "scaleCar", run: this.state.animateCar, }} />

{/* <Viro3DObject
           position={[-2,0, -1 ]}
           source={myBoj2}
           type="OBJ"
           rotation={[-90, 0 , 0]}
           scale={[0.01, 0.01, 0.00001]}
           materials={this.state.texture}
           onClick={this._toggleButtons}
           animation={{ name: "scaleCar", run: this.state.animateCar, }} />  */}

          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0,-1,0]}
            position={[0, 5, 1]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={.7} />

          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -0.001, 0]}
            width={2.5} height={2.5}
            arShadowReceiver={true} />

        </ViroARImageMarker>
      </ViroARScene>
    );
  },
  _onAnchorFound() {
    this.setState({
      animateCar: true,
    })
  },
  _toggleButtons() {
    this.setState({
      animName: (this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  },
  _selectWhite() {
    this.setState({
      texture: "white",
      tapWhite: true
    })
  },
  _selectBlue() {
    this.setState({
      texture: "blue",
      tapBlue: true
    })
  },
  _selectGrey() {
    this.setState({
      texture: "grey",
      tapGrey: true
    })
  },
  _selectRed() {
    this.setState({
      texture: "red",
      tapRed: true
    })
  },
  _selectYellow() {
    this.setState({
      texture: "yellow",
      tapYellow: true
    })
  },
  _animateFinished() {
    this.setState({
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    })
  },
});


ViroMaterials.createMaterials({
  white: {
    diffuseTexture: require('./res/tesla/playing/PlayingBabyDiffuseMap.jpg'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  blue: {
    diffuseTexture: require('./res/tesla/playing/PlayingBabyDiffuseMapDark.jpg'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  grey: {
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_grey.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  red: {
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_red.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  yellow: {
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_yellow.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  white_sphere: {
    diffuseColor: "rgb(231,231,231)",
  },
  blue_sphere: {
    diffuseColor: "rgb(19,42,143)",
  },
  grey_sphere: {
    diffuseColor: "rgb(75,76,79)",
  },
  red_sphere: {
    diffuseColor: "rgb(168,0,0)",
  },
  yellow_sphere: {
    diffuseColor: "rgb(200,142,31)",
  },
});

ViroARTrackingTargets.createTargets({
  logo: {
    source: require('./res/logo3.png'),
    orientation: "Up",
    physicalWidth: 0.965 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
  scaleUp: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 500, easing: "bounce"
  },
  scaleDown: {
    properties: { scaleX: 0, scaleY: 0, scaleZ: 0, },
    duration: 200,
  },
  scaleCar: {
    properties: { scaleX: .09, scaleY: .09, scaleZ: .09, },
    duration: 500, easing: "bounce"
  },
  scaleSphereUp: {
    properties: { scaleX: .8, scaleY: .8, scaleZ: .8, },
    duration: 50, easing: "easeineaseout"
  },
  scaleSphereDown: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 50, easing: "easeineaseout"
  },
  tapAnimation: [["scaleSphereUp", "scaleSphereDown"],]
});


export default HelloWorldSceneAR;