import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Apploading from 'expo-app-loading' 
import {useFonts} from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './navigation/NavigationTab';





export default function App() {

  const  [fontsLoaded] = useFonts({
    "HelveticaNeueMedium": require("./assets/fonts/HelveticaNeueMedium.ttf"),
    "HelveticaNeueBold": require("./assets/fonts/HelveticaNeueBold.ttf")
  
  })
  
  if(!fontsLoaded) {
    return <Apploading/>
  }
  return (
    <NavigationContainer>
      
      <NavigationTab/>
        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
