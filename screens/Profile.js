import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,

} from "react-native";


export default function Profile({navigation}) {
  

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require("../assets/bg/bg.png")}
        resizeMode="cover"
        style={styles.image}
      > 

      <View style={styles.Mr_Auto}>

        <View>
          <Text style={styles.Text1}>
            Your Profile
          </Text>
        </View>
        <View>
          <Text style={styles.Text2}>
            log in to enjoy the Golazo
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn} style={styles.btn}  onPress={()=> navigation.navigate('LoginScreen') } > 
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:40,flexDirection:"row"}}>
          <Text style={styles.Text3}>
            Don't have an account ?

           
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('CountryCodeSelector') } 
             style={{marginTop:-3}}><Text style={styles.btnText1}>Create one</Text>
             </TouchableOpacity>
        </View>

      </View>

    
      </ImageBackground>
      
      
      

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000a32",
    // alignItems: "center",
    // justifyContent: "center",
  },
  
  image: {
    flex:1,
    width: "100%",
  },
  Mr_Auto:{
    // borderColor:"red",
    // borderWidth:1,
    flex:1,
    justifyContent:"center",
    width:"85%",
    marginLeft:"auto",
    marginRight:"auto",
    // marginTop:30
  },
  Text1:{
    fontSize: 24,
  fontWeight: "500",
  fontStyle: "normal",
  fontFamily:"HelveticaNeueMedium",

  letterSpacing: 0,
  color:"white", 
  marginTop:230,
  },
  Text2:{
  
    fontFamily: "HelveticaNeue",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    opacity:0.8,
  fontFamily:"HelveticaNeueMedium",

    color:"white",
    letterSpacing: 0.4,
    marginTop:20

  },
  btn:{
    height: 50,
    width: "100%",
    backgroundColor: "#65f6ca",
    marginTop:30,
  
  
    borderRadius: 8,
    color: "#000a32",
    justifyContent: "center",
    alignItems: "center",
  
  },
  btnText:{
   
    color: "#1b2345", fontWeight: "600",
     fontSize: 14,
     letterSpacing:1.25,
     fontFamily:"HelveticaNeueMedium",
     lineHeight:16
  },
  Text3:{

    fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  opacity:0.8,
  color:"white",
  fontFamily:"HelveticaNeueMedium",

  },
  btnText1:{
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color:"white",
    textDecorationLine:"underline",
  fontFamily:"HelveticaNeueMedium",
  marginLeft:4,

    // paddingTop:1,
    marginTop:2

  }
  
  
  
});
