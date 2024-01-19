import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';


const Task = () => {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.box}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>Title : Demo</Text>
              <Text style={{
                marginLeft: 190,
                color: '#000',
                margin: 5,
                fontWeight: 'bold'
              }}>Status : panding</Text>
            </View>
            <View style={{}}>

              <Text style={styles.text}>Description : </Text>
              <View style={{ margin: 5, }}>
                <Text style={{ color: '#000', fontWeight: '400' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, explicabo! Explicabo itaque aliquid quo iste.</Text>
              </View>
            </View>
            <Text style={styles.text}>Assisn Date : 20-Dec-2023</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 5 }}>

              <TouchableOpacity style={{
                padding: 10,
                backgroundColor: '#008080',
                borderRadius: 5,
                margin: 2,

              }}>
                <Text style={{ color: '#fff' }}>Accept</Text>

              </TouchableOpacity>
              <TouchableOpacity style={{
                padding: 10,
                backgroundColor: '#008080',
                borderRadius: 5,
                margin: 2,

              }}>
                <Text style={{ color: '#fff' }}>Cancel </Text>

              </TouchableOpacity>
            </View>

          </View>


          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add Job Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: "#008080",
    color: "#ffffff",
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  box: {
    backgroundColor: '#dce0ec',
    borderColor: '#000',
    shadowColor: '#000',
    shadowOpacity: 20,
    elevation: 10,
    width: 390,
    height: 190,
    margin: 10
  },
  text: {
    color: '#000',
    margin: 5,
    fontWeight: 'bold'
  },
  bnt: {
    padding: 10,
    backgroundColor: '#008080',
    borderRadius: 5,
    margin: 2,
    marginRight: 150
  }

});

export default Task;
