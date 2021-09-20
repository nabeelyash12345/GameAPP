import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import { Video, AVPlaybackStatus } from "expo-av";
// import { color } from "jimp";
// import { WebView } from 'react-native-webview';

export default function VideosScreen({videos}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <View style={styles.headerVidos}>
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
            Popular Video
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
        {videos.map((video) => (
          <View style={styles.Videos1}>
          <Video
            ref={video}
            style={styles.video}
            source={video.link}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />

          <View style={{ marginTop: 23 }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/icons/pro.png")}
                style={{
                  width: 16,
                  height: 16,
                  borderStyle: "solid",
                  borderRadius: 50,
                  borderWidth: 0.5,
                }}
              />
              <Text style={{ marginLeft: 10 ,color:"#ffffff"}}>{video.player}</Text>
            </View>
          </View>

          <Text
            style={{
              width: 184,
              height: 18,
              opacity: 0.9,
              fontFamily: "HelveticaNeue",
              fontSize: 14,
              fontWeight: "500",
              fontStyle: "normal",
              marginTop: 10,
              letterSpacing: 0.13,
              color:"#ffffff"
            }}
          >
            {video.name}
          </Text>
        </View>
        ))}

       
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#000a32",
    

    // alignItems: 'center',
    // justifyContent: 'center',
  },

  headerVidos: {
    marginLeft: 20,
    marginRight: 18,
    height: 50,
    marginTop:23,

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  Videos1: {
    // width: 236,
    height: 197,
    marginTop:22,
    paddingRight: 20,
   backgroundColor:"#000a32",
    borderRadius: 8,
    // bordertop:0
  },

  video: {
    width: 246,
    height: 141,
    borderRadius: 10,
  },
  video11: {
    width: 246,
    height: 141,
    borderRadius: 8,
  },
  Videos2: {
    marginLeft: 15,
    height: 197,
    // width: 236,
    height: 205,
    backgroundColor:"#000a32",
    
    borderRadius: 8,
  },
  Videos3: {
    marginLeft: 10,
    height: 197,

    // width: 236,
    height: 205,
    backgroundColor:"#000a32",
    
  },
  video112: {
    width: 246,
    height: 141,
    borderRadius: 8,
  },
});
