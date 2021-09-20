import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

export default function GameSection(props) {
  const joinPerson=[
    
    'https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg',
    'https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg',
    'https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg',
    'https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg',

    
  ]
  return (
    <View style={styles.container}>
      <View style={styles.headerGame}>
        <View>
          <Text
            style={{
              width: 220,
              height: 22,
              opacity: 0.9,
              fontFamily: "HelveticaNeue",
              fontSize: 18,
              fontWeight: "500",
              fontStyle: "normal",
              letterSpacing: 0.17,
              color: "#fcfcfc",
            }}
          >
            Join the game
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                width: 108,
                height: 16,
                fontFamily: "Helvetica",
                fontSize: 14,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0.13,
                textAlign: "right",
                color: "#18f2b2",
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}
      >
        <View style={styles.Box1}>
          <View style={{ marginLeft: 13, marginRight: 16 }}>
            <View style={styles.TxtMAY}>
              <View>
                <Text
                  style={{ fontSize: 11, letterSpacing: 0.5, color: "#ffffff" }}
                >
                  Mon10 May -7pm
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 11, letterSpacing: 0.5, color: "#ffffff" }}
                >
                  1.6 km away
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  letterSpacing: 0.5,
                  color: "#ffffff",
                  width: 227,
                  height: 20,
                  fontFamily: "HelveticaNeue",
                  fontSize: 16,
                  fontWeight: "500",
                  fontStyle: "normal",
                  letterSpacing: 0.13,
                }}
              >
                Al Hadaf Soccer Fields
              </Text>
            </View>

            <View style={{marginTop:10}}>
              <View style={{flexDirection:"row"}}>
                <Image
                
                source={require('../assets/profile/p.jpeg')}
                style={{width:20,height:20,borderRadius:50,position:"absolute"}}
                />
                <Image
                
                source={require('../assets/profile/p.jpeg')}
                style={{width:20,height:20,borderRadius:50,position:"absolute",marginLeft:10}}
                />
                 <Image
                
                source={require('../assets/profile/p.jpeg')}
                style={{width:20,height:20,borderRadius:50,position:"absolute",marginLeft:20}}
                />
                <Image
                
                source={require('../assets/profile/p.jpeg')}
                style={{width:20,height:20,borderRadius:50,position:"absolute", marginLeft:30}}
                />
              </View>
              <View style={{marginLeft:60,}}>
                <Text style={{ opacity: 0.7,
          fontFamily: "HelveticaNeue",
          fontSize: 11,
         fontWeight: "normal",
        fontStyle: "normal",
          color:"white",
              letterSpacing: 0.1,}}>6 Joined</Text>
              </View>
              
              
            </View>
          </View>

        </View>

        <View style={styles.Box2}>
          <View style={{ marginLeft: 13, marginRight: 16 }}>
            <View style={styles.TxtMAY}>
              <View>
                <Text
                  style={{ fontSize: 11, letterSpacing: 0.5, color: "#ffffff" }}
                >
                  Mon10 May -7pm
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 11, letterSpacing: 0.5, color: "#ffffff" }}
                >
                  1.6 km away
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  letterSpacing: 0.5,
                  color: "#ffffff",
                  width: 227,
                  height: 20,
                  fontFamily: "HelveticaNeue",
                  fontSize: 16,
                  fontWeight: "500",
                  fontStyle: "normal",
                  letterSpacing: 0.13,
                }}
              >
                Al Hadaf Soccer Fields
              </Text>
              
            </View>
            
            <View style={{marginTop:10}}>
              <View style={{flexDirection:"row"}}>
                <Image
                
                source={require('../assets/profile/p.jpeg')}
                style={{width:20,height:20,borderRadius:50,position:"absolute"}}
                />
                <Image
                
                source={require('../assets/profile/p.jpeg')}
                style={{width:20,height:20,borderRadius:50,position:"absolute",marginLeft:10}}
                />
                 <Image
                
                source={require('../assets/profile/p.jpeg')}
                style={{width:20,height:20,borderRadius:50,position:"absolute",marginLeft:20}}
                />
                <Image
                
                source={require('../assets/profile/p.jpeg')}
                style={{width:20,height:20,borderRadius:50,position:"absolute", marginLeft:30}}
                />
              </View>
              <View style={{marginLeft:60,}}>
                <Text style={{ opacity: 0.7,
          fontFamily: "HelveticaNeue",
          fontSize: 11,
         fontWeight: "normal",
        fontStyle: "normal",
          color:"white",
              letterSpacing: 0.1,}}>6 Joined</Text>
              </View>
              
              
            </View>
            
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001052",
  },

  headerGame: {
    marginLeft: 18,
    marginRight: 18,
    height: 50,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  Box1: {
    width: 264,
    height: 113,
    backgroundColor: "#38305c",
    marginTop: 30,
    marginBottom: 30,
  },
  TxtMAY: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 18,
  },


  Box2: {
    width: 264,
    height: 113,
    marginLeft:10,
    backgroundColor: "#38305c",
    
    marginTop: 30,
    marginBottom: 30,
  },
});
