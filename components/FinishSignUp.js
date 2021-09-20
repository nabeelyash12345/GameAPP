import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, CheckBox ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AngleIcon from 'react-native-vector-icons/FontAwesome'
export default function FinishSignUp({navigation}) {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.headerImg} >
        <Image source={require('../assets/image7.png')} style={{ width: "100%", height: 90 }}
          resizeMode='stretch' />
      </View>
      <View style={styles.subHeading}>
      <View style={{ width: 44, height: 4, backgroundColor: '#bbb9cb', alignSelf: 'center', marginTop: 18 }} />
     

        <View style={styles.textOne}>
          <View >
            <TouchableOpacity  onPress={()=> navigation.goBack()}>
              <Icon name='cross' style={{ fontSize: 25, }} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.contant} >Finishing Signing up</Text>
          </View>
        </View>
           
        <ScrollView>
        <View style={styles.inputs}>
          <TextInput placeholder='Name' style={styles.textInput1} />
          <View style={styles.capIcon}>

            <TextInput placeholder='Nationality' style={styles.textInput2} />
            <TouchableOpacity>
              <AngleIcon name='angle-down' style={{ position: 'absolute', right: 10, top: 14, fontSize: 25, }} />
            </TouchableOpacity>
          </View>
          <TextInput placeholder='Email' style={styles.textInput3} />
        </View>
        <View style={styles.conformation}>
          <Text style={styles.booking}>
            We'll email you booking confirmation and receipts.
          </Text>
        </View>
        <View style={styles.footer}>
          
          <TouchableOpacity style={styles.button1}  onPress={()=> navigation.navigate('FinishSignUp2') }>
            <Text style={styles.continue} >CONTINUE</Text>
          </TouchableOpacity>
         <View style={styles.paragraph}>
           <Text>Golazo will send you members only deals,marketing email, and 
                 push notification . You can opt out of receiving these at any time 
                 in your account setting.</Text>
         </View>
         <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I don’t want to receive marketing messages from golazo.</Text>
      </View>
       
        </View>
        </ScrollView>
      </View>
     
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerImg: {
    height: 120,
    backgroundColor: '#000a32'
  },
  subHeading:{
    backgroundColor:'white',
    marginTop:-20,
    borderTopRightRadius:24,
    borderTopLeftRadius:24
  },
  textOne: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  contant: {
    // marginRight:50,
    fontSize: 18,
    fontFamily:"HelveticaNeue-Medium",

    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.14,
    color: '#000a32',
    paddingRight: 45
  },
  inputs: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    //  backgroundColor:'red',
    height: 240
  },
  textInput1: {
    borderWidth: 1,
    width: 327,
    height: 56,
    borderRadius: 5,
    borderColor: '#000000',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
    padding: 15
  },
  capIcon: {
    flexDirection: 'row'
  },
  textInput2: {
    borderWidth: 1,
    width: 327,
    height: 56,
    borderRadius: 5,
    borderColor: '#000000',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
    padding: 15
  },
  textInput3: {
    borderWidth: 1,
    width: 327,
    height: 56,
    borderRadius: 5,
    borderColor: '#000000',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
    padding: 15
  },
  conformation: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  booking: {
    fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0.4,
  color:"#bbb9cb",

    marginTop: -6,
    fontFamily:"HelveticaNeue-Medium",

  },
  footer: {
   height:310,
   alignItems:'center',
   justifyContent:'center',
   marginTop:20
   
  
  },

  button1:{
   width:327,
   height:48,
   borderRadius:8,
   backgroundColor:'#bbb9cb',
   fontFamily:"HelveticaNeueMedium",

   justifyContent:'center',
   alignItems:'center', 
   
   
  

   
  },
  continue:{
     color:'#ffffff',
     fontSize:14,
     lineHeight:16,
     letterSpacing:1.25
  },
  paragraph: {
    // width: 320,  
    paddingLeft:30,
   fontFamily:"HelveticaNeueMedium",
   paddingRight:30,
  
    // height: 42,
    lineHeight: 15,
    letterSpacing: 0,
    marginLeft:8, 
    marginRight:5,
    fontSize: 10,
    opacity: 0.6,
    color: '#000a32',
    marginTop:20
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems:'center' ,
    marginTop:20,
    opacity: 0.6,
    
    fontFamily:"HelveticaNeueMedium",

  },
  label:{
    fontSize:11,
    letterSpacing:0
  }

});