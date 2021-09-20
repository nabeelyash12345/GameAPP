import { StatusBar } from "expo-status-bar";
import React from "react";
  
  import { StyleSheet, Text, View, ImageBackground, Image  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ShippingScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginLeft: 16,marginTop:24 }}
      
      
      >
      <View style={styles.shipping}>
        <ImageBackground
          source={require("../assets/bg/fshoes.jpg")}
          style={{ width: 288, height: 130 }}
        >
          <View
            style={{
              width: 233,
              height: 106,
              // borderColor: "black",
              marginLeft: 15,
              marginTop: 10,
              // borderWidth: 1,
            }}
          >
            <Text
              style={{
                // width: 22,
                // height: 2,
                fontFamily: "Helvetica-Bold",
                fontSize: 20,
                fontWeight: "normal",
                fontStyle: "normal",
                letterSpacing: 0.19,
                color:"white"
              }}
            >
              Up to 
            
            </Text>
            <Text
              style={{
                // width: 22,
                // height: 2,
                fontFamily: "Helvetica-Bold",
                fontSize: 40,
                fontWeight: "normal",
                fontStyle: "normal",
                letterSpacing: 0.19,
                color:"white"
              }}
            >
               50% Off 
            
            </Text>
            <Text
              style={{
                // width: 22,
                // height: 2,
                fontFamily: "HelveticaNeue",
                fontSize: 20,
                fontWeight: "normal",
                fontStyle: "normal",
                letterSpacing: 0.19,
                color:"white"
              }}
            >
              free shipping
            
            </Text>
          </View> 
          
        </ImageBackground>
        
      </View>


      <View style={styles.shipping}>
        <ImageBackground
          source={require("../assets/bg/fshoes.jpg")}
          style={{ width: 288, height: 130 }}
        >
          <View
            style={{
              width: 233,
              height: 106,
              // borderColor: "black",
              marginLeft: 15,
              marginTop: 10,
              // borderWidth: 1,
            }}
          >
            <Text
              style={{
                // width: 22,
                // height: 2,
                fontFamily: "Helvetica-Bold",
                fontSize: 20,
                fontWeight: "normal",
                fontStyle: "normal",
                letterSpacing: 0.19,
                color:"white"
              }}
            >
              Up to 
            
            </Text>
            <Text
              style={{
                // width: 22,
                // height: 2,
                fontFamily: "Helvetica-Bold",
                fontSize: 40,
                fontWeight: "normal",
                fontStyle: "normal",
                letterSpacing: 0.19,
                color:"white"
              }}
            >
               50% Off 
            
            </Text>
            <Text
              style={{
                // width: 22,
                // height: 2,
                fontFamily: "HelveticaNeue",
                fontSize: 20,
                fontWeight: "normal",
                fontStyle: "normal",
                letterSpacing: 0.19,
                color:"white"
              }}
            >
              free shipping
            
            </Text>
          </View>
        </ImageBackground>
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000a32",
    // backgroundColor: "red",

    

    // alignItems: 'center',
    justifyContent: "center",
    // marginLeft:16
  },
  shipping: {
    // backgroundColor: 'blue',
    width: 288,
    height: 130,
    borderRadius: 8,
    // borderColor: "black",
    // borderWidth: 1,
    marginLeft: 16,
  },
});
