import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Linking, Text, TextInput, Pressable, SafeAreaView, StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CreateAccount() {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');
  const [text, onChangeText] = React.useState('');
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{marginVertical: 20, fontWeight: "700", fontSize: 20}}>Create Account</Text>
        <View style={styles.form}>
            <Text style={styles.label} htmlFor='name'>Name</Text>
            <TextInput
            type="text"
            id="name"
            inputMode="text"
            keyboardType="default"
            className="mt-1 block w-full p-[13] bg-white rounded-md"
            onChangeText={onChangeText}
            placeholder="Enter your name"
            value={text}
            style={focusName ? styles.inputOnFocus : styles.input}
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            />
        </View>
        <View style={styles.form}>
            <Text style={styles.label} htmlFor='email'>Email</Text>
            <TextInput
            type="text"
            id="email"
            inputMode="email"
            keyboardType="email-address"
            className="mt-1 block w-full p-[13] bg-white rounded-md text-sm"
            onChangeText={onChangeText}
            placeholder="Enter your email"
            value={text}
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
            <View style={styles.passwordConditions}>
                <Ionicons
                    name="checkmark"
                    color="#BDBDBD"
                    size={20}
                    style={{marginTop: 7, marginRight: 4}}
                />
                <Text style={styles.passwordConditionsText}>8+ characters</Text>
                <Ionicons
                    name="checkmark"
                    color="#BDBDBD"
                    size={20}
                    style={{marginTop: 7, marginRight: 4}}
                />
                <Text style={styles.passwordConditionsText}>1 number</Text>
            </View>
        </View>
        {/* Sign up button */}
        <Pressable
            onPress={() => 'CreateAccount'}
            accessibilityLabel="TODO"
            style={styles.button}
        >
            <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Text style={styles.disclaimer}>By signing up you indicate that you have read and agreeto Yellowbird’s <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://google.com')}>Terms of Service</Text> and <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://google.com')}>Privacy Policy</Text>.</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
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
  form: {
    marginBottom: 25,
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
  disclaimer: {
    color: "#6A536B",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
    marginTop: 10,
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
  passwordConditions: {
    flexDirection: 'row',
  },
  passwordConditionsText: {
    marginRight: 16,
    fontSize: 12,
    color: '#BDBDBD',
    paddingTop: 0,
    position: "relative",
    top: 10
  }
});