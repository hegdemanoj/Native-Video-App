import * as React from 'react';
// import { StyleSheet, PermissionsAndroid, Button, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';


const facedetected = (faces) => {
    console.log(faces)
    alert(JSON.stringify(faces))
  }
  
export default class Camera extends React.Component {
render(){
return(
  <RNCamera 
            type={RNCamera.Constants.Type.front}
            values={true}
            onFacesDetected={facedetected}
            // faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
            // faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
          
            style={{
              flex: 1,
              width: '100%',
            }}
          >
  </RNCamera>
      );
        }
}