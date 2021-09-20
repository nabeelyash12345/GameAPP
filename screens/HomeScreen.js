import { StatusBar } from "expo-status-bar";
import React, { Profiler } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  ScrollView,
} from "react-native";


import VideosScreen from "../VideosComponents/VideosScreen"

import ImageSwiperScreen from '../VideosComponents/ImageSwiperScreen'

import ShippingScreen from "../VideosComponents/ShippingScreen";
import GameSection from "../VideosComponents/GameSection"

import video1 from '../assets/Videos/f.mp4';
import video2 from '../assets/Videos/w.mp4';
import image1 from '../assets/groundpic/p.jpg';
import image2 from '../assets/groundpic/pic2.jpg'

export default function HomeScreen() {
  const videoLinks = [
    {link: video2, name: 'best goals in football', player: 'ronaldo' },
    {link: video1, player: 'Messi', name: 'best player'},
    {link: video2, player: 'nemar', name: 'best defender'},
    {link: video1, player: 'ali', name: 'best player'}
  ]

  const sliderImages = [
    
    {image: [image1,image2], name:'name', desc: 'thid is description'},
    {image:[ image1,image2], name:'name', desc: 'thid is description'},
    {image:[ image1,image2], name:'name', desc: 'thid is description'},
  ]

  
  
  return (

    <View style={styles.container}>

      
      {/* Header_Section start Here */}
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/bg/hpic.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.ICOn}>
            <View style={styles.Logo}>
              <Image
                source={require("../assets/icons/logo.png")}
                style={{ width: 48, height: 44 }}
              />
            </View>

            <View style={styles.Meassage}>
              <Image
                source={require("../assets/icons/iconMessages.png")}
                style={{ width: 24, height: 24 }}
              />
            </View>
            <View style={styles.Notification}>
              <Image
                source={require("../assets/icons/iconNotification.png")}
                style={{ width: 24, height: 24 }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Header_Section end Here */}

      {/* HeroSection start  Here */}

    <ScrollView bounces={false}>
      
      <View style={styles.Hero_Section}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
            <View style={styles.boxImg1}>
              
                <Image
                  style={{
                    width: 90,
                    height: 65,
                    marginLeft: 10,
                    zIndex:100,
                    position: 'absolute', 
                  }}
                  source={require("../assets/Image/pattern1.png")}
                />
             
              
                <Image
                  source={require("../assets/Image/shoes.png")}
                  style={{ height: 102,width:71,marginLeft:74}}
                />
              
            </View>

            
            <View
              style={{
                width: "60%",
                height: "30%",
              }}
            >
              <Text
                style={{
                  opacity: 0.9,
                  fontFamily: "HelveticaNeue",
                  fontSize: 16,
                  fontWeight: "bold",
                  fontStyle: "normal",
                  letterSpacing: 0.11,
                  color: "#fcfcfc",
                  paddingLeft: 14,
                  marginTop:-10
                  
                }}
              >
                Join a Games
              </Text>
            </View>
          </View>

          <View style={styles.box2}>
            <View>
              <Image
                source={require("../assets/Image/field.png")}
                style={{
                  width: 107,
                  height: 96,
                  shadowColor: "rgba(0, 0, 0, 0.2)",
                  marginLeft: 33,
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowRadius: 14,
                  shadowOpacity: 1,
                }}
              />
            </View>
            <View style={styles.box2Img}>
              <View>
                <Text
                  style={{
                    width: 89,
                    height: 34,
                    opacity: 0.9,
                    fontFamily: "HelveticaNeue",
                    fontSize: 14,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    letterSpacing: 1,
                    color: "#fcfcfc",
                    paddingLeft: 30,
                  }}
                >
                  Book a field
                </Text>
              </View>

              <View>
                <Image
                  source={require("../assets/Image/pattern.png")}
                  style={{marginTop:-12 ,marginRight:20,}}
                />
              </View>
            </View>
          </View>

          <View style={styles.box3}>
            <View>
              <Image
                  source={require("../assets/Image/pattern3.png")}
                  style={{marginLeft:10}}
              
              />
            </View>
            <View>
              
            </View>
          </View>
        </ScrollView>
      </View>

      {/* HeroSection start end Herr Here */}
      
      <View style={styles.Videos_Section}>
        <VideosScreen  videos={videoLinks}/>
      </View>


      <View style={styles.Fields_Section}>
        

        <ImageSwiperScreen images={sliderImages}/>
        


      </View>

      <View style={styles.Shipping_Section}>
          <ShippingScreen/>
          
      </View>

      <View style={styles.Game_Section}>
         
         <GameSection  />

      </View>
      
      </ScrollView>

      <StatusBar style="auto" />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddinop:10
    // paddingTop:10,
    // backgroundColor: "#fff",
    backgroundColor: "#03196d",

    alignItems: "center",
    justifyContent: "center",
  },
  // {/* Header_Section start Here */}

  header: {
    height:130,
    backgroundColor: "#03196d",
    width: "100%",
    // position: "fixed",
    // Top: 0,
  },
  image: {
    flex: 1,
  },
  ICOn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 30,
    marginLeft: 10,
  },
  Logo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  Meassage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  Notification: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  // {/* Header_Section end Here */}

  // {/* HeroSection start  Here */}

  Hero_Section: {
    flex: 4,
    backgroundColor: "#03196d",
    // backgroundColor:"red",

    width: "100%",
    paddingLeft: 30,
    paddingTop: 50,
    paddingBottom: 50,
  },
  box1: {
    width: 145,
    height: 145,
    backgroundColor: "yellow",
    borderRadius: 10,
    backgroundColor: "#0570f0",
  },
  boxImg1: {
    flexDirection: "row",
    // flexWrap:"wrap",
    // justifyContent: "center",
    // alignItems: "center",
  },
  box2: {
    width: 140,
    height: 141,
    backgroundColor: "yellow",
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "#158b7c",
  },
  box2Img: {
    justifyContent: "center",
    flexDirection: "row",
  },
  box3: {
    width: 140,
    height: 141,
    backgroundColor: "yellow",
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "#da950f",
  },
  // {/* HeroSection start end Herr Here */}

  Videos_Section: {
    height:350,
    // backgroundColor: 'red',
    backgroundColor: "#03196d",

    width: "100%",
  },
  Fields_Section: {
    // flex: 3,
    height:470,
    // borderColor:"red",
    // borderWidth:1,
    
    // backgroundColor: 'blue',
    // backgroundColor: "#03196d",

    width: "100%",
  },
  Shipping_Section: {
    // flex: 3,
    height:173,
    // backgroundColor: "red",
    // backgroundColor: "#03196d",

    width: "100%",
  },
  Game_Section: {
    height:350,
    // backgroundColor: 'blue',
    // backgroundColor: "#03196d",

    width: "100%",
  },
});
