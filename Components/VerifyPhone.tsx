import React from "react";
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import ChangePassword from "./ChangePassword";

const VerifyPhone = ({navigation}:{navigation:any})=>{

  const ChangePassword = ()=>{
    console.warn("ChangePassword  method call");  
    navigation.navigate('ChangePassword'); 
}
const ResendCode = ()=>{
  console.warn("ResendCode  method call");  
  navigation.navigate('RequestOT'); 
}

    return(
        <View style={{flex:1,}}>


        <Text style={{
          fontSize:10,
          color :'#000000',
          margin:10,
        }}> Please veeify your mobile number</Text>

        <Text style={{
          fontSize:15,
          fontWeight: 'bold',
          color :'#000000',
          margin:10


        }}> Enter then verify code send to to : </Text>


        <TextInput 
placeholder=' Enter Your OTP'
style ={{borderColor : 'black',color:'black',borderWidth : 1, fontSize : 20, margin :10, }}

/>
<TouchableOpacity  onPress={()=>ChangePassword()}>
  <Text style = {style.Button}>
    Verify OTP</Text>
</TouchableOpacity>

<View style={{flexDirection:'row'}}>
  <Text style={{margin:6, color:'#000000'}}>Don't received code?</Text>
  <View style={{ margin:6}}>       
    <TouchableOpacity  onPress={()=>ResendCode()}>
      <Text style={{ color: 'blue', }}>Resend code</Text>
    </TouchableOpacity>
</View >

</View>
        </View>
    )
}
const style= StyleSheet.create({
  Button :{
      backgroundColor:"#008080",
 color:"#ffffff", 
 fontSize:24,
 textAlign:'center',
 padding:10,
 margin:5,
 borderRadius:30,
 marginLeft:30,
 marginRight:30,
 shadowColor:"black",
 elevation:10,
 shadowOpacity:1
 },
})
export default VerifyPhone;