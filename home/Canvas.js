import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import Canvas from 'react-native-canvas';
import LinearGradient from 'react-native-linear-gradient';
const imageURL = "C:/Users/91701/Downloads/testImage.jpg";

export default class MyCanvas extends Component {
 
  handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');

    // ctx.globalCompositeOperation = 'exclusion';
    // ctx.fillStyle = 'black';
    // ctx.fillRect(10, 10, 100, 100);

    // ctx.fillStyle = 'skyblue';
    // ctx.fillRect(20, 80, 200, 200);


    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 400, 400);
    // var gradient = await ctx.createRadialGradient(20, 20, 30 , 40, 40, 35);
    // gradient.addColorStop(offset, color)
    // ctx.fillStyle = gradient;
    // ctx.fillRect(50, 50, 200, 100);

    // // ctx.drawImage(imageURL, 0, 0, 100, 100);
    // // console.log('Printing here:',imageURL);
    // ctx.beginPath();
    // ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    // ctx.stroke();

    // var img = new Image();
    // img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    // img.onload = function() {
    //   var pattern = ctx.createPattern(img, 'repeat');
    //   ctx.fillStyle = pattern;
    //   ctx.fillRect(0, 0, 300, 300);
    // };

    // ctx.strokeStyle = 'blue';
    // ctx.strokeRect(10, 10, 100, 100);







    var lingrad = (async () => {
        await ctx.createLinearGradient(0, 0, 0, 150);
      })();
    // var lingrad = await ctx.createLinearGradient(0, 0, 0, 150);
    // lingrad.addColorStop(0, '#00ABEB');
    // lingrad.addColorStop(0.5, '#fff');
    // lingrad.addColorStop(0.5, '#26C000');
    // lingrad.addColorStop(1, '#fff');

    var lingrad2 = (async () => {
      await ctx.createLinearGradient(0, 50, 0, 95);
    })();
    // lingrad2.addColorStop(0.5, '#000');
    // lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

    // assign gradients to fill and stroke styles
    ctx.fillStyle = lingrad;
    ctx.strokeStyle = lingrad2;
    
    // draw shapes
    ctx.fillRect(10, 10, 130, 130);
    ctx.strokeRect(50, 50, 50, 50);
  }
 
  render() {
    return (
      // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Canvas ref={this.handleCanvas}
              style={styles.canvasBg}
            />
      // </LinearGradient>


      // <View style={{flex:1}}>
      //   <LinearGradient colors={['white', 'red', 'black']} style={{flex:1}}>
      //     <Canvas ref={this.handleCanvas}
      //           // style={styles.canvasBg}
      //         />
      //   </LinearGradient>
      // </View> 
    )
  }
}

const styles = StyleSheet.create({
  canvasBg: {
        flex:1,
        flexDirection: 'row',
        // width: '100%',
        justifyContent: 'center',
        // height:'100%',
        // backgroundColor: 'red',
        // opacity: .6
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});