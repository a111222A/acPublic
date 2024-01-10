import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import VerifyPhone from "./VerifyPhone";
import { TouchableOpacity } from "react-native-gesture-handler";



const ForgotPassword = ({navigation}:{navigation:any})=>{

    const VerifyPhone=()=>{
        navigation.navigate('VerifyPhone');
    }
return(
    <View style={{flex:1,}}>

      
        <Text style={{ margin: 10,color:'#000000'}}>
            Please entor the number you'd like your Password
            reset information sent to
        </Text>
        <Text style={{ margin: 6,color:'#000000',fontSize:15}}>Enter Number</Text>
        <TextInput placeholder="Enter Number" style={{borderColor:'black', borderWidth:2,margin:6}}/>
       
        <View style={{ margin: 6,}}>     
    <TouchableOpacity  onPress={()=>VerifyPhone()}>
      <Text style={style.Button}>Forgot Password</Text>
    </TouchableOpacity>
</View >
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
   margin:10,
   borderRadius:30,
   marginLeft:30,
   marginRight:30,
   shadowColor:"black",
   elevation:10,
   shadowOpacity:1
   },

   InputBox:{
    borderColor: 'black', 
    color: 'black', 
    borderWidth: 2, 
    fontSize: 20, 
    margin: 10,
   },
})

export default ForgotPassword;