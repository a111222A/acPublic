import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableHighlight, Modal, Pressable } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

import DatePicker from 'react-native-date-picker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BASEURL } from '../Components/Constant';

const Register = ({ navigation }: { navigation: any }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pineCode, setPineCode] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState(false);
    const [mobileNumberError, setMobileNumberError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [pineCodeError, setPineCodeError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const Register = async () => {

        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (!mobileNumber) {
            setMobileNumberError(true);
        } else {
            setMobileNumberError(false);
        }
        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if (!pineCode) {
            setPineCodeError(true);
        } else {
            setPineCodeError(false);
        }
        if (!address) {
            setAddressError(true);
        } else {
            setAddressError(false);
        }
        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        if (!name || !mobileNumber || !email || !pineCode || !address || !password) {
            return false;
        }
        try {
            const registrationData = {
                name: name,
                mobileNumber: mobileNumber,
                email: email,
                address: address,
                pine_code: pineCode,
                password: password
            };
            //console.warn(registrationData);
            const response = await fetch(BASEURL + '/technicianRegister', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });
            const result = await response.json();
            if (result.success) {
                setModalVisible(true);
                //setData(result.data);
            } else {
                console.error('API request failed:', result.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    {/** **/ }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'MR.', value: 'MR.' },
        { label: 'MIS.', value: 'MIS.' },
        { label: 'MS.', value: 'MS.' },
    ]);
    const closeModal = () => {
        setModalVisible(false);
        navigation.navigate('Login');
    };


    return (
        <View style={{ flex: 1, }}>
            <View style={style.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={closeModal}

                >
                    <View style={style.modalContainer}>
                        <View style={style.modalContent}>
                            <Text style={{ color: '#00ff00', fontWeight: '800' }}>Registration Successful !</Text>
                            <View style={{ margin: 10, }}>
                                <Button title="Close" onPress={closeModal} color={'#008000'} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <ScrollView>
                <Text style={{ fontSize: 20, color: 'black' }}>  Name :</Text>
                <TextInput placeholder=' Enter Your First Name' value={name} onChangeText={(text) => setName(text)} style={style.InputBox} />
                {nameError ? <Text style={style.errorMessage}> Please Enter Your First Name </Text> : ''}


                <Text style={{ fontSize: 20, color: 'black' }}>  Mobile Number :</Text>
                <TextInput placeholder=' Enter Your Mobile No' value={mobileNumber} onChangeText={(text) => setMobileNumber(text)} style={style.InputBox} />
                {mobileNumberError ? <Text style={style.errorMessage}> Please Enter Mobile Number </Text> : ''}

                <Text style={{ fontSize: 20, color: 'black' }}>  Email ID :</Text>
                <TextInput placeholder=' Enter Your Email ID' value={email} onChangeText={(text) => setEmail(text)} style={style.InputBox} />
                {emailError ? <Text style={style.errorMessage}> Please Enter Email ID </Text> : ''}


                <Text style={{ fontSize: 20, color: 'black' }}>  Pine code :</Text>
                <TextInput placeholder=' Enter Pine code' value={pineCode} onChangeText={(text) => setPineCode(text)} style={style.InputBox} />
                {pineCodeError ? <Text style={style.errorMessage}> Please Enter Pine code </Text> : ''}



                <Text style={{ fontSize: 20, color: 'black' }}>  Address :</Text>
                <TextInput placeholder=' Enter Your Address' value={address} onChangeText={(text) => setAddress(text)} style={style.InputBox} />
                {addressError ? <Text style={style.errorMessage}> Please Enter Address </Text> : ''}


                <Text style={{ fontSize: 20, color: 'black' }}>  Password :</Text>
                <TextInput placeholder='Enter Password ' value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={style.InputBox} />
                {passwordError ? <Text style={style.errorMessage}> Please Enter Password </Text> : ''}

                <View style={{ margin: 6 }}>
                    <TouchableHighlight onPress={() => Register()}>
                        <Text style={style.Button}>SingUp</Text>
                    </TouchableHighlight>
                </View >
                {/*ihh*/}



            </ScrollView>
        </View>
    )

}
const style = StyleSheet.create({
    InputBox: {
        borderColor: 'black',
        color: 'black',
        borderWidth: 2,
        fontSize: 20,
        margin: 10,
        marginBottom: 5
    },
    Button: {
        backgroundColor: "#008080",
        color: "#ffffff",
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 30,
        marginLeft: 30,
        marginRight: 30,
        shadowColor: "black",
        elevation: 10,
        shadowOpacity: 1
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: '#000'
    },
    fil: {
        width: 32,
        height: 32,
        backgroundColor: '#000',
        borderRadius: 20,
        margin: 2
    },
    errorMessage: {
        fontSize: 20,
        color: 'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    modalButtonText: {
        color: 'white',
    },
})

export default Register;
