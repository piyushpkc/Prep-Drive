import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';


function VarifyEmailScreen({ navigation }) {
  return (
    
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
        <Text style={{ marginTop: 70, padding:20, paddingBottom:5, fontWeight:'bold'}}> OTP is sent to your email</Text>
        <TextInput
        style={{ marginTop: 5 , 
          marginLeft:20, 
          marginRight:20, 
          height:50, 
          backgroundColor:'#eeeeee', 
          padding:10, 
          borderRadius:10,
          justifyContent:'center',
          alignItems:'center'

        }}
          // style={Styles.Vinput}
          placeholder="OTP"
          keyboardType='number-pad'
          // onChangeText={(val)=> setUserName(val)}
        />
         <TouchableOpacity
          style={{
            marginTop:50,
            paddingTop:20,
            paddingBottom:15,
            marginLeft:30,
            marginRight:30,
            backgroundColor:'#2F80ED',
            borderRadius:50,
            width:150,
            borderColor: '#fff',
            
           

         }}
          activeOpacity = { .5 }
        onPress = { () => navigation.navigate('Profile') }

       >
 
            <Text style={{textAlign:'center', color:'#fff'}} > Verify </Text>
            
      </TouchableOpacity>
  </SafeAreaView>
  );
}
// const style = StyleSheet.create({
//   Vinput:{
//     fontSize:20
//   }
// })

export default VarifyEmailScreen;