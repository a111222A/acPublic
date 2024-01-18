import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashbord from './Dashbord';
import Profile from './Profile';
import Task from './Task';
import Notification from './Notification';
import Login from './Login';
import { NativeScreen, NativeScreenNavigationContainer } from 'react-native-screens';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createBottomTabNavigator();
const TabNavi = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}>
            <Tab.Screen name="Dashbord" component={Dashbord}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Task" component={Task}
                options={{
                    tabBarLabel: 'Task',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="reader-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Notifications"
                component={Notification}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen name="Logout" component={Login}
                options={{
                    tabBarLabel: 'Logout',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="log-out-outline" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>


    )
}
export default TabNavi;