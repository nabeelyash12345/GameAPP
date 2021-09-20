import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/Profile";
import SignUpScreen from "../components/SignUpScreen";
import LoginScreen from "../components/LoginScreen";
import CountryCodeSelector from '../components/CountryCodeSelector'
import  OtpConformation from "../components/OtpConformation"
import FinishSignUp from "../components/FinishSignUp"
import FinishSignUp2 from "../components/FinishSignUp2";
// import Test from '../components/Test'

const RegistrationStack = createStackNavigator();

const RegistrationScreensStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen
        name="Home"  
        component={Profile}
        options={{
          headerShown: false,
        }}
      />

      <RegistrationStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <RegistrationStack.Screen name='SignUpScreen' component={SignUpScreen} 
       options={{
        headerShown: false,
      }}/>
     
     <RegistrationStack.Screen name='CountryCodeSelector' component={CountryCodeSelector} 
       options={{
        headerShown: false,
      }}/>
      <RegistrationStack.Screen name='OtpConformation' component={OtpConformation} 
       options={{
        headerShown: false,
      }}/>

<RegistrationStack.Screen name='FinishSignUp' component={FinishSignUp} 
       options={{
        headerShown: false,
      }}/>

<RegistrationStack.Screen name='FinishSignUp2' component={FinishSignUp2} 
       options={{
        headerShown: false,
      }}/>
      
      
    </RegistrationStack.Navigator>
  );
};

export default RegistrationScreensStack;
