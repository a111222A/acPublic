import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


  const Login =({navigation}:{navigation:any})=>{

    const loginSubmit = ()=>{
        navigation.navigate('Dashbord'); 
    }
   {/* const loginSubmit = ()=>{
      navigation.navigate('Home'); 
  }*/}
 {/* const loginSubmit = ()=>{
    navigation.navigate('NewDashbord'); 
}*/}
    const RegisterCall = ()=>{
        navigation.navigate('Register')
    }
    const ForgotPassword = ()=>{
        navigation.navigate('ForgotPassword');
    }
    


    return (
        <View style={{flex:1,}}>
            
            
            <Text style={{ fontSize: 19, color: 'black', marginTop:50, marginLeft:10 }}> User ID :</Text>
            <TextInput style={style.InputBox} placeholder='Please Enter Your User ID by '/>

            <Text style={{ fontSize: 19, color: 'black',marginLeft:10 }}> Password :</Text>
            <TextInput style={style.InputBox} placeholder='Please Enter Your Password '
            secureTextEntry={true}/>

                

<View style={{ margin: 6}}>
 <TouchableOpacity  onPress={()=>loginSubmit()}>
  <Text style = {style.Button}>Login</Text>
 </TouchableOpacity>
</View >

<View style={{ margin: 6}}>       
    <TouchableOpacity  onPress={()=>RegisterCall()}>
      <Text style = {style.Button}>SingUp</Text>
    </TouchableOpacity>
</View >

<View style={{ margin: 6}}>       
    <TouchableOpacity  onPress={()=>ForgotPassword()}>
      <Text style={{ fontSize: 15, color: 'blue',marginLeft:25 }}>Forgot Password?</Text>
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

export default Login;
