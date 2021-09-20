import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import AngleIcon from "react-native-vector-icons/FontAwesome";
import CodeInput from "react-native-confirmation-code-input";

export default function OtpConformation({ navigation }) {
  const onFulfill = (isValid) => {
    if (isValid) {
      navigation.navigate("FinishSignUp");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerImg}>
        <ImageBackground
          source={require("../assets/image7.png")}
          resizeMode="stretch"
          style={styles.imge}
        >
          <Text>header</Text>
          <View style={styles.img}>
            <Image
              source={require("../assets/icons/logo.png")}
              style={styles.img2}
            />
          </View>
        </ImageBackground>
      </View>

      
      <View style={styles.subHeading}>
        <View
          style={{
            width: 44,
            height: 4,
            backgroundColor: "#bbb9cb",
            alignSelf: "center",
            marginTop: 18,
            borderRadius: 8,
          }}
        />
      
        <View style={styles.textOne}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="cross" style={{ fontSize: 25 }} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.contant}>Confirm your number</Text>
          </View>
        </View>
      </View>

      <View style={styles.mr_auto}>
      <View style={styles.CodeInput}>
        <View>
          <CodeInput
            useRef="codeInputRef1"
            secureTextEntry
            className={"border-b"}
            keyboardType="numeric"
            space={4}
            codeLength={4}
            size={24}
            inputPosition="left"
            onFulfill={(isValid) => onFulfill(isValid)}
            compareWithCode="1234"
            activeColor="black"
            inactiveColor="black"
            autoFocus={false}
            ignoreCase={true}
            inputPosition="center"
            size={70}
            containerStyle={{ marginTop: 30 }}
            codeInputStyle={{ borderBotttomWidth: 1.5 }}
          />
        </View>
        <View style={{ marginTop: 100, flexDirection:"row"}}>
          <Text
            style={{
              height: 32,
              fontFamily: "HelveticaNeueMedium",
              fontSize: 14,
              fontWeight: "bold",
              fontStyle: "normal",
              // lineHeight: 20,
              letterSpacing: 0,
            }}
          >
            Didn't get a SMS?{" "}
          
          </Text>

          <TouchableOpacity style={{marginTop:-3}}>
              <Text
                style={{
                  textDecorationLine: "underline",
                  // marginLeft: -6
                  height: 32,
                  // marginTop: 12,
                  fontFamily: "HelveticaNeueMedium",
                  fontSize: 14,
                  fontWeight: "bold",
                  // marginTop:2,
                  fontStyle: "normal",
                  lineHeight: 20,
                  letterSpacing: 0,
                }}
              >
                {" "}
                Send again
              </Text>
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: "underline",
                width: 318,
                height: 32,
                fontFamily: "HelveticaNeueMedium",
                fontSize: 14,
                fontWeight: "bold",
                fontStyle: "normal",
                lineHeight: 20,
                letterSpacing: 0,
              }}
            >
              More options
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerImg: {
    height: 100,
    backgroundColor: "#000a32",
  },
  subHeading: {
    marginTop: -18,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: "white",
  },
  textOne: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
  },
  contant: {
    // marginRight:50,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    fontFamily: "HelveticaNeueMedium",

    lineHeight: 24,
    letterSpacing: 0.14,
    color: "#000a32",
    paddingRight: 45,
  },
  CodeInput: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    justifyContent: "space-around",
  },

  imge: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#000a32",
  },
  mr_auto:{
    width:"80%",
    // borderWidth:1,
    // borderColor:"red",
    marginLeft:"auto",
    marginRight:"auto"
  }
});
