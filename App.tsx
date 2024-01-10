

import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import RequestOTP from './Components/RequestOTP';
import VerifyPhone from './Components/VerifyPhone';
import ForgotPassword from './Components/ForgotPassword';
import ChangePassword from './Components/ChangePassword';
import NewCase from './Components/NewCase';
import Completed from './Components/Completed';
import Pending from './Components/Pending';
import Rejected from './Components/Rejected';
import ViewJob from './Components/ViewJob';
import Profile from './Components/Profile';
import Task from './Components/Task';
import EditProfile from './Components/EditProfile';
import Dashbord from './Components/Dashbord';
import NewDashbord from './Components/NewDashbord';
import ManageAddress from './Components/ManageAddress';
import RegisterComplaint from './Components/RegisterComplaint';
import Incomplite from './Components/Incomplite';
import managePayments from './Components/managePayments';
import ServicePrice from './Components/ServicePrice';
import Discount from './Components/Discount';
import MyVouchers from './Components/MyVouchers';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RequestOTP" component={RequestOTP} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="NewCase" component={NewCase} />
        <Stack.Screen name="Completed" component={Completed} />
        <Stack.Screen name="Pending" component={Pending} />
        <Stack.Screen name="Rejected" component={Rejected} />
        <Stack.Screen name="ViewJob" component={ViewJob} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Dashbord" component={Dashbord} />
        <Stack.Screen name="ManageAddress" component={ManageAddress} />
        <Stack.Screen name="RegisterComplaint" component={RegisterComplaint} />
        <Stack.Screen name="Incomplite" component={Incomplite} />
        <Stack.Screen name="managePayments" component={managePayments} />
        <Stack.Screen name="ServicePrice" component={ServicePrice} />
        <Stack.Screen name="Discount" component={Discount} />
        <Stack.Screen name="MyVouchers" component={MyVouchers} />
        <Stack.Screen name="NewDashbord" component={NewDashbord} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}


export default App;

