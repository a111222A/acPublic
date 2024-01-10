import React from "react";
import { Text, View, TextInput, TouchableHighlight } from 'react-native';

const RequestOTP = ()=>{


    return(
        <View style={{flex:1,}}>
        <Text style ={{
        fontSize :30, 
        color:'white',
        backgroundColor:'red',
        textAlign:'center',
        padding:7,
        }}>
        Request OTP 
        </Text>
    
        <Text style={{
          fontSize:35,
          fontWeight:'bold',
          marginTop:50}}>
             Login Acount
          </Text> 
    
    
        <Text style={{
          fontSize:22
        }}> Hello, Welcome back to your account</Text>
    
        <Text style={{
          fontSize:25,
          fontWeight: 'bold',
          marginTop:35
    
    
        }}> Mobile Number : </Text>
    
    
        <TextInput 
    placeholder=' Enter Your OTP'
    style ={{borderColor : 'black',color:'black',borderWidth : 1, fontSize : 20, margin :10, }}
    
    />
    <TouchableHighlight>
    <Text style = {{
    backgroundColor:"#008080",
    color:"#fff", 
    fontSize:24,
    textAlign:'center',
    padding:10,
    margin:10,
    borderRadius:30,
    marginLeft:30,
    marginRight:30,
    shadowColor:"black",
    elevation:10,
    shadowOpacity:1
    
    }}>
    Verify OTP</Text>
    </TouchableHighlight>
    
    
    <Text>Not register yet ?</Text>
    <Text>Create an account</Text>
    
    
      </View>

    )
}
export default RequestOTP;