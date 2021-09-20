
import React,{useState,useRef} from 'react';
import {
   View, 
   Text,
   StyleSheet,
   TouchableOpacity,
   ImageBackground,
   Image,
   TextInput,
  ScrollView
  }
 from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Icons from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/AntDesign"

const CountryCodeSelector = ({navigation}) => {
  const [value, setValue] = useState('');
  
  const phoneInput = useRef<PhoneInput>(null);
  
    return (
        <View styles={styles.Container}>
            <View style={styles.header}>
            <ImageBackground source={require('../assets/image7.png')} resizeMode='stretch' style={styles.imge} >
                <Text>header</Text>
                <View style={styles.img}> 
                    <Image source={require('../assets/logo.png')}/>
                </View>
            </ImageBackground>
            </View> 

            <View style={styles.footer}>
             
             <ScrollView>
               
             <View style={styles.line} />
        <View style={styles.headings}>
          <TouchableOpacity onPress={()=> navigation.goBack() }
          >
            <Icons name="cross" style={styles.icons} />
          </TouchableOpacity>
          <Text style={styles.subHeading}>Log in or sign up</Text>
        </View>
        <View style={styles.inputs} style={{marginTop:30,marginLeft:13}}>
         <View style={styles.countryNumber}>
         <View style={styles.verticleLine}></View>
         <PhoneInput
            useRef={phoneInput}
            defaultCode="AE"
            onChangeFormattedText={(text) => {
              setValue(text);
            }}
            
            
          /> 
          
          </View>

          <TouchableOpacity  onPress={()=> navigation.navigate('OtpConformation') }
            style={styles.btn1} style={{marginTop:30, borderWidth: 1,
                width: 343,
                height: 56,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#bbb9cb",
                backgroundColor: "#bbb9cb"}}
          >
            <Text style={styles.text}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          <View style={{ width: 135, height: 2, backgroundColor: "#bbb9cb" ,marginRight:10}} />
          <View>
            <Text
              style={{
                width: 50,
                textAlign: "center",
                // fontFamily: "Helvetica-Neue-Medium",
              }}
            >
              or
            </Text>
          </View>
          <View style={{ width: 135, height: 2, backgroundColor: "#bbb9cb" ,marginRight:10}} />
        </View>
        <View>
        </View>


        <View style={styles.inputs}>
                <View>
                    <TouchableOpacity style={styles.btn2} >
                    
                <Icon name='mail' style={styles.mail}/>

                        <Text style={styles.text1}>Continue with Email</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.btn2}   >
                        <Icon name='apple1' style={styles.apple} />
                        <Text style={styles.text2}>
                            Continue with Apple
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.btn3}  >
                       
                    <Image
                  source={require("../assets/2.png")}
                  style={styles.google}
                />
                        <Text style={styles.text3}>Continue with Google </Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity style={styles.btn4}>
                      
                        <Icons name='facebook-with-circle' style={styles.facebook} />
                        <Text style={styles.text4}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>

            </View>
                

             </ScrollView>
            </View> 
        </View>
        
    )
}

export default CountryCodeSelector

const styles = StyleSheet.create({

    Container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      
    },
    header: {
      height:143,
      alignItems: 'center',
      justifyContent: 'center',   
    },
    img: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    imge: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#000a32',   
        
    },
    footer:{
        height:700,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        marginTop:-28,
     },
     line: {
        width: 45,
        height: 4,
        backgroundColor: "#bbb9cb",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 10,
      },
      text: {
         color: "#ffffff",
    fontFamily: "HelveticaNeueBold",
        
         
        fontSize: 14,
        letterSpacing: 1.25,
        lineHeight: 16,
      },
      headings: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-around",
        marginRight: 50,
      },
      icons: {
        fontSize: 30,
      },
      subHeading: {
        marginRight: 40,
        fontSize: 20,
    fontFamily: "HelveticaNeueBold",
        
        color: "#000a32",
      },
      countryNumber:{
            width:335,
            borderRadius:4,
            height:60,
            borderWidth:1,
            borderColor:'#bbb9cb',
            backgroundColor:'white',
            
          },
          verticleLine:{
            height: '100%',
            width: 1,
            backgroundColor: '#909090',
            marginLeft:70,
            position:'absolute',
            zIndex:1,
            borderColor:'#bbb9cb',
            
          },
      inputs: {
        marginTop: -30,
        alignItems: "center",
      },
    
      inputs: {
        flex: 1,
        height: 320,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    icon1: {
        flexDirection: 'row'
    },
    btn1: {
        borderWidth: 1,
        width: 343,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#bbb9cb'

    },
    mail: {
        fontSize: 25,

    },
    text1: {
        fontSize:14,
        marginLeft: 22,
    fontFamily: "HelveticaNeueBold",
        
        // backgroundColor:'red'
        
    },

    btn2: {
        borderWidth: 1,
        width: 343,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        borderColor: '#bbb9cb'

    },
    text2:{
    fontFamily: "HelveticaNeueBold",
        
        
        fontSize:14
    },

    apple: {

        fontSize: 25,
        marginRight: 20
    },
    btn3: {
        borderWidth: 1,
        width: 343,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        borderColor: '#bbb9cb'
    },
    text3:{
      fontFamily: "HelveticaNeueBold",
    
        
     fontSize:14
    },
    google: {
        marginRight: 15,
        width:35,
        height:25,
        
    },
    btn4: {
        borderWidth: 1,
        width: 343,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#bbb9cb'

    },
    text4: {
      fontFamily: "HelveticaNeueBold",
    
      
      fontSize:14
    },

    facebook: {
        fontSize: 25,
        padding: 20,
        color: '#007ad9'
    }
     

  });

