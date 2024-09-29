import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { useSelector, useDispatch } from 'react-redux';
import { createProfile } from '../../store/actions/profileAction';

const RegisterScreen = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const globalProfileData = useSelector(store => store.profileReducer);
    useEffect(() => {
      console.log(globalProfileData);
    }, [globalProfileData]);
    useEffect(() => {
      dispatch(createProfile({
        username: ' Mr. Niko',
        email: 'mr.niko@gmail.com',
        password: 'mrniko123'
      }))
    }, []);

    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <Input
              title="Username"
            placeholder="Username"
            />
            <Input
              title="Email"
            placeholder="Email"
            />
            <Input
              title="Password"
            placeholder="Password"
            />
          </View>
          <Button
            text="Register"
            />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Already have an account?
            </Text>
  
            <TouchableOpacity
              onPress={
                () => navigation.navigate('Login')
              }
            >
            <Text style={styles.loginText}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  </ScrollView >
  )
  };
  export default RegisterScreen;
  
  const styles = StyleSheet.create({
    scroll: {
      flexGrow: 1
    },
    mainContainer: {
      flex: 1,
      backgroundColor: '#E6E6FA',
      alignItems: 'center'
    },
    inputContainer: {
    padding: 16,
    width: '100%'
  },
    textContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
    text: {
    fontSize: 16
  },
    loginText: {
    color: '#1A5B0A',
    fontSize: 16
  }
  });