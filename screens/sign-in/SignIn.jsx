import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Pressable, SafeAreaView, View } from 'react-native';
import Toast from 'react-native-root-toast';

import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [focusEmail, setFocusEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [focusPassword, setFocusPassword] = useState(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

//   let toast = Toast.show('Please enter a valid email address', {
//     duration: Toast.durations.LONG,
//   });

//   setTimeout(function hideToast() {
//     Toast.hide(toast);
//   }, 500);

  const error = false;
  
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.header}>Sign In</Text>
                <View style={styles.form}>
                    <View style={error ? styles.errorLabelContainer : null}>
                        <Text style={error ? styles.errorLabel : styles.label} htmlFor='email'>Email</Text>
                        {error && (<Text style={styles.errorLabel}>You need a valid email</Text>)}
                    </View>
                    <TextInput
                    type="text"
                    id="email"
                    inputMode="email"
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                    placeholder="Enter your email"
                    value={email}
                    style={focusEmail ? styles.inputOnFocus : styles.input}
                    onFocus={() => setFocusEmail(true)}
                    onBlur={() => setFocusEmail(false)}
                    />
                </View>
                <View style={styles.form}>
                    <Text style={styles.label} htmlFor='email'>Password</Text>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                        type="text"
                        id="password"
                        name="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="newPassword"
                        inputMode="text"
                        keyboardType="default"
                        secureTextEntry={passwordVisibility}
                        onChangeText={text => setPassword(text)}
                        placeholder="Enter your password"
                        value={password}
                        style={focusPassword ? styles.inputOnFocus : styles.passwordInputField}
                        onFocus={() => setFocusPassword(true)}
                        onBlur={() => setFocusPassword(false)}
                        />
                        <Pressable onPress={handlePasswordVisibility}>
                        <Ionicons
                                name={rightIcon}
                                color="#0E0E25"
                                size={20}
                                style={{position: "absolute", right: 0, top: -10}}
                            />
                        </Pressable>
                    </View>
                </View>
                <Pressable
                    onPress={() => navigation.navigate('SignIn')}
                    accessibilityLabel="TODO"
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: "#fff",
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    header: {
        marginVertical: 20,
        fontWeight: "700",
        fontSize: 20,
    },
    form: {
      marginBottom: 25,
    },
    errorLabelContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    errorLabel: {
        color: "#EB5757",
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 7,
    },
    input: {
      fontSize: 20,
      borderColor: '#0000001F',
      borderBottomWidth: 1,
      paddingBottom: 5,
    },
    inputOnFocus: { 
      borderColor: '#22AAE4',
      fontSize: 20,
      borderBottomWidth: 1,
      paddingBottom: 5,
      width: "100%"
    },
    label: {
      fontSize: 14,
      color: "#6A536B",
      lineHeight: 20,
      marginBottom: 7,
    },
    button: {
      backgroundColor: "#86D190",
      padding: 13,
      borderRadius: 6,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: "bold",
      fontSize: 16,
    },
    passwordInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      position: "relative"
    },
    passwordInputField: {
      width: '100%',
      fontSize: 20,
      borderColor: '#0000001F',
      borderBottomWidth: 1,
      paddingBottom: 5,
    },
  });