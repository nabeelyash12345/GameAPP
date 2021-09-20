import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import RegistrationStack  from "../navigation/RegistrationScreensStack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Setting from '../screens/Setting';
import Add from '../screens/Add';
import Date from '../screens/Date';
import Profile from '../screens/Profile';



const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        showLabel:false,
        style:{
          position:"absolute",
        //   bottom:25,
          elevation:0,
          backgroundColor:"#1b2345",
          borderTopLeftRadius:24,
          borderTopRightRadius:24,
          // borderTopWidth:"none",
        
          height:80
        }
      }}
    
    >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon:({focused})=>(
           <View style={{alignItems:"baseline",justifyContent:"center"}}>
             <Image
             source={require('../assets/icons/Home.png')}
             resizeMode="contain"
             style={{
               width:25,
               height:25,
               tintColor:focused ? 'white':'#767c9f'
             }}
             />
           </View>
          ),
        }}/>
         <Tab.Screen name="Date" component={Date} 
        options={{
            
          tabBarIcon:({focused})=>(
            <View style={{alignItems:"baseline",justifyContent:"center"}}>
              <Image
              source={require('../assets/icons/Date.png')}
              resizeMode="contain"
              style={{
                width:25,
                height:25,
                tintColor:focused ? 'white':'#767c9f'
              }}
              />
            </View>
           ),
                  
        }}/>

<Tab.Screen name="add" component={Add} options={{
          tabBarIcon:({focused})=>(
            <View style={{alignItems:"baseline",justifyContent:"center"}}>
              <Image
              source={require('../assets/icons/Add.png')}
              resizeMode="contain"
              style={{
                width:25,
                height:25,
                tintColor:focused ? 'white':'#767c9f'
              }}
              />
            </View>
           ),
        }}/>


<Tab.Screen name="Profile" component={RegistrationStack}  options={{ 

headerShown:false,
tabBarIcon:({focused})=>(
  <View style={{alignItems:"baseline",justifyContent:"center"}}>
    <Image
    source={require('../assets/icons/pro.png')}
    resizeMode="contain"
    style={{
      width:25,
      height:25,
      // tintColor:focused ? '#00187a':'white',
      color:"#00187a"
    }}

    
    
    />
  </View>
 ),
}}/>
 <Tab.Screen name="Setting" component={Setting} options={{
          tabBarIcon:({focused})=>(
            <View style={{alignItems:"baseline",justifyContent:"center"}}>
              <Image
              source={require('../assets/icons/set.png')}
              resizeMode="contain"
              style={{
                width:25,
                height:25,
                tintColor:focused ? 'white':'#767c9f'
                
              }}
              />
            </View>
           ),
        }}/>
      


      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
