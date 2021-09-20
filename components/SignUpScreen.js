import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Eye from "react-native-vector-icons/AntDesign";
import IconAnt from "react-native-vector-icons/FontAwesome5";

export default function SignUpScreen({ navigation }) {
  const [isSelection,setSelection]=useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/image7.png")}
          resizeMode="stretch"
          style={styles.imge}
        >
          <Text>header</Text>
          <View style={styles.img}></View>
        </ImageBackground>
      </View>

      <View style={[styles.footer]}>


        <View style={styles.mr_Auto}>
        <View>
          <View style={[styles.line]}></View>
        </View>

        <View style={[styles.icon]}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Icon name={"cross"} style={[styles.IconText]} />
          </TouchableOpacity>

          <Text style={[styles.iconText]}>Finish Signing up</Text>
        </View>

      
        <View>
          <TextInput placeholder="Name" style={[styles.Textinput]} />

          <View style={[styles.InnerText, styles.Textinput]}>
            <TextInput style={[styles.fontSize]} placeholder="Nationality" />
            <IconAnt style={[styles.angleDown]} name={"angle-down"} />
          </View>
        </View>

        <View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>Email</Text>
            <TextInput
              style={[styles.fontSize, { color: "black" }]}
              placeholder="meffects@gmail.com"
            />
          </View>

          <Text
            style={{
              textAlign: "center",
              color: "#bbb9cb",
              fontSize: 13,
              lineHeight: 19,
              letterSpacing: 0.3,
              marginTop: 5,
              // marginLeft: 35,
              // marginRight: 35,
            }}
          >
            We'll email you booking configration and receipt.
          </Text>
        </View>

        <View style={[styles.InnerText, styles.Textinput]}>
          <TextInput
            secureTextEntry={true}
            style={[styles.fontSize]}
            placeholder="Password"
          />
          <Eye
            style={{ alignSelf: "center", marginRight: 9, fontSize: 18 }}
            name={"eye"}
          />
        </View>

        <TouchableOpacity style={[styles.footerBottom]}>
          <Text style={[styles.ButtonText]}>CONTINUE</Text>
        </TouchableOpacity>
        <View style={[styles.FontText]}>
          <Text
            style={{
              fontSize: 11,
              color: "#000a32",
              // marginLeft: 5,
              // fontFamily: "sans-serif-light",
              //   width:305,
              // marginRight: 30,
              // marginLeft: 30,
              // width: "100%",
              opacity: 0.8,
              lineHeight: 16,
              fontStyle: "normal",
            }}
          >
            Golazo will send you members only deals,marketing email, and push
            notification . You can opt out of receiving these at any time in
            your account setting.
          </Text>
        </View>

        <View style={[styles.BoxText]}>
          <CheckBox
            value={isSelection}
              onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={{ fontSize: 11 }}>
            I don’t want to receive marketing messages from golazo.
          </Text>
        </View>
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000a32",
  },
  header: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imge: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#000a32",
  },

  footer: {
    flex: 3,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderColor:"red",
    // borderWidth:1
  },
  line: {
    height: 5,
    width: 50,
    backgroundColor: "#bbb9cb",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 15,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",

    // justifyContent: "space-around",
    marginTop: 20,
    // marginRight: 25,
    // marginLeft: 36,
  },
  angleDown: {
    alignSelf: "center",
    marginRight: 9,
    fontSize: 18,
  },
  fontSize: {
    fontSize: 18,
  },
  IconText: {
    fontSize: 25,
    width: 20,
    height: 20,
    color: "#000a32",
    marginRight: 25,
    // fontFamily: "HelveticaNeueMedium",
  },
  iconText: {
    // fontSize: 2,
    fontSize: 19,
    color: "#000a32",
    marginRight: 25,
    marginLeft: 60,
    // fontFamily: "HelveticaNeueMedium",
  },
  Textinput: {
    height: 56,
    // width: 327,
    width: "100%",
    marginLeft: 24,
    marginRight: 24,
    marginTop: 20,
    alignSelf: "center",
    fontSize: 17,
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 17,
    borderColor: "#000000",
    letterSpacing: 0.16,
    lineHeight: 25,
    // opacity:0.4
    borderColor:"#bbb9cb"
  },
  bordercolor: {
    height: 50,
    width: 300,
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 6,
    alignSelf: "center",
    marginTop: 20,
    opacity: 400,
  },
  InnerText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerBottom: {
    marginTop: 80,
    height: 30,
    // width: 200,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#bbb9cb",
    height: 56,
    // width: 327,
    borderRadius: 8,
  },
  FontText: {
    // padding: 24,
    marginTop:20
  },
  box: {
    height: 10,
    width: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#000000",
  },
  BoxText: {
    flexDirection: "row",
    // paddingLeft: 50,
    alignItems: "center",
    marginTop:20,
  },
  fieldSet: {
    position: "relative",

    marginTop: 20,
    // marginLeft: 40,
    marginRight: "auto",
    
    paddingHorizontal: 10,
    color: "#bbb9cb",
    borderRadius: 3,
    padding: 13,
    borderWidth: 1,
    borderColor: "#bbb9cb",
    height: 56,
    width: "100%",
  },
  legend: {
    position: "absolute",
    top: -10,
    left: 10,
    color: "#bbb9cb",
    backgroundColor: "#FFFFFF",
  },
  ButtonText: {
    paddingTop: 20,
    // fontFamily: "HelveticaNeueMedium",

    alignSelf: "center",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: "center",
    color: "white",
  },
  mr_Auto:{
    width:"85%",
    marginLeft:"auto",
    marginRight:"auto",
  

  }
  
  
});
