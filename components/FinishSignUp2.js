import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AngleIcon from 'react-native-vector-icons/FontAwesome';
import FieldSet from 'react-native-fieldset';

export default function FinishSignUp2({navigation}) {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.headerImg} >
        <Image source={require('../assets/image7.png')} style={{ width: "100%", height: 90 }}
          resizeMode='stretch' />
      </View>
      <View style={styles.subHeading}>
        <View style={{ width: 44, height: 4, backgroundColor: '#bbb9cb', alignSelf: 'center', marginTop: 18,borderRadius:8 }} />

        <View style={styles.textOne}>
          <View >
            <TouchableOpacity  style={{marginLeft:-48}} onPress={() => navigation.goBack()}>
              <Icon name='cross' style={{ fontSize: 25,}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.contant} >Finishing Signing up</Text>
          </View>
        </View>
        <View style={styles.fieldSetSection}>
        <View style={styles.fieldSet}>
            <Text style={styles.legend}>Name</Text>
            <TextInput
              style={[styles.fontSize, { color: "black" }]}
              placeholder="Leopard"
            />
          </View>
          <View style={styles.fieldSetIconText}>
            <Text style={styles.legend}>Nationality</Text>
            <TextInput
              style={[styles.fontSize, { color: "black" }]}
              placeholder="Syrian"
            />
            <View>
              <AngleIcon name="angle-down" style={{fontSize:20,marginTop:2}}/>
            </View>
            </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>Email</Text>
            <TextInput
              style={[styles.fontSize, { color: "black" }]}
              placeholder=""
            />
          </View>
          
        
          <View style={styles.Text}>
            <TouchableOpacity>
                <Text style={{textDecorationLine:"underline"}}>Next</Text>
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
    backgroundColor:"white"
    
  },
  headerImg: {
    height: 100,
    backgroundColor: '#000a32'
  },
  subHeading: {
    marginTop: -18,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: 'white',
  },
  textOne: {
    justifyContent:"space-evenly",
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
    width:"85%",
    marginRight:"auto",
    marginLeft:"auto",
    // marginLeft:-18,
  },
  contant: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.14,
    color: '#000a32',
    marginRight:23
  },
  fieldSetSection:{
    // flex:1,
    justifyContent:'space-evenly',
    height:350,
    width:"85%",
    // borderColor:"red",
    marginLeft:"auto",
    marginRight:"auto",
    // borderWidth:1,
  

  },
  fieldSet: {
    position: "relative",
    flexDirection:'row',
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
  fieldSetIconText:{
    position: "relative",
    marginTop: 20,
    // marginLeft: 40,
    marginRight: "auto",
    flexDirection:'row',
    justifyContent:'space-between',
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

  Text:{
    alignItems:'flex-end',
    marginTop:40,
    // backgroundColor:'red',
    justifyContent:'center',
    marginLeft:16
    
  }
});