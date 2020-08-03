import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import MyCanvas from './Canvas';
const imageURL = { uri: "C:/Users/91701/Downloads/testImage.jpg" };

export default class Masker extends React.Component {
  render() {
    return (
      <MaskedView
                  style={{ flex: 1,  height: '100%' }}
                  maskElement={
                                <View style={styles.mask}>
                                  {/* <Text style={styles.text}>
                                    Basic Mode
                                  </Text> */}
                                  <MyCanvas/> 
                                </View>
                              }
                            >
          {/* Shows behind the mask, you can put anything here, such as an image */}
          <View style={styles.backgroundC}>
            {/* <ImageBackground source={imageURL.uri} style={styles.image}>
                <Text style={styles.text}>Some text</Text>
            </ImageBackground> */}
          </View>
      </MaskedView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  mask: {
    // Transparent background because mask is based off alpha channel.
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundC: { 
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'red' }
});