import React from "react";
import { View, Text, TextInput, Button,TouchableOpacity,StyleSheet } from 'react-native';

const ChangePassword = ({navigation}:{navigation:any})=>{
    const ChangePassword = ()=>{
        console.warn("Login method call");  
        navigation.navigate('Login'); 
    }


    return(
        <View style={{flex:1,}}>
            
            <Text style={{ fontSize: 20, color: 'black' }}> Password :</Text>
            <TextInput
                placeholder=' Confrim Password '
                secureTextEntry={true}
                style={{ borderColor: 'black', color: 'black', borderWidth: 2, fontSize: 20, margin: 10, }}
            />

            <Text style={{ fontSize: 20, color: 'black' }}> Confrim Password :</Text>
            <TextInput
                placeholder=' Confrim Password '
                secureTextEntry={true}
                style={{ borderColor: 'black', color: 'black', borderWidth: 2, fontSize: 20, margin: 10, }}
            />

<TouchableOpacity  onPress={()=>ChangePassword()}>
      <Text style = {style.Button}>Change Password</Text>
</TouchableOpacity>
        </View>

    )
}
const style= StyleSheet.create({
    Button :{
        backgroundColor:"#008080",
   color:"#fff", 
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

   InputBox:{
    borderColor: 'black', 
    color: 'black', 
    borderWidth: 2, 
    fontSize: 20, 
    margin: 10,
   },

   
})

export default ChangePassword;