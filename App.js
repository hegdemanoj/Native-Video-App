import * as React from 'react';
import { StyleSheet, PermissionsAndroid, Button, Text, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';
import Camera from './home/Camera';
import Masker from './home/Masker'
import MyCanvas from './home/Canvas'

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
      // console.log(Masker.imageURL);
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Button style={styles.button}
          title="request permissions" onPress={requestCameraPermission} />
      {/* <Camera/> */}
      <View style={styles.backg}>
        <Masker/>
      </View>
      {/* <MyCanvas /> */}
      <View style={styles.backg}>
        <MyCanvas />
      </View>      
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>Welcome to React Native!</Text>
    //   <Text style={styles.instructions}>To get started, edit App.js</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  button: {
    flex: 1,
    width:'100%'
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  backg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // width:'100%',
    // backgroundColor: "black",
    // opacity: .5
  }
});

