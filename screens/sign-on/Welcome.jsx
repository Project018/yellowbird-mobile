import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Text, TextInput, Pressable, SafeAreaView, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function Welcome({navigation}) {
  const [email, setEmail] = useState('');


  const Separator = () => <View style={styles.divider} />;

  const Dot = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    } else {
      backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
      <View
        style={{
          width: 7,
          height: 7,
          marginHorizontal: 5,
          backgroundColor,
          borderRadius: 50,
        }}
      />
    );
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.slider}>
        <Onboarding
          DotComponent={Dot}
          nextLabel=''
          skipLabel=''
          bottomBarHighlight={false}
          showDone={false}
          titleStyles={{fontSize: 26, color: "#0E0E25", fontWeight: "700", paddingBottom: 7}}
          subTitleStyles={{fontSize: 20, color: "#6A536B", paddingLeft: 25, paddingRight: 25, textAlign: "center", fontWeight: "500", lineHeight: 30}}
          containerStyles={{justifyContent: "start", paddingLeft: 20, paddingRight: 20}}
          imageContainerStyles={{paddingTop: 60, paddingBottom: 0}}
          pages={[
            {
              backgroundColor: '#FEDF5E',
              image: <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/welcome-tour/welcomeToYellowbird.png')} />,
              title: 'Welcome to Yellowbird',
              subtitle: 'The app making financial education fun and easy',
            },
            {
              backgroundColor: '#FEDF5E',
              image: <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/welcome-tour/fiveMinutesADay.png')} />,
              title: '5 minutes a day',
              subtitle: 'Take advantage of those small windows of time to learn',
            },
            {
              backgroundColor: '#FEDF5E',
              image: <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/welcome-tour/biteSizedPieces.png')} />,
              title: 'Bite-sized pieces',
              subtitle: 'Learn about complex topics in small, manageable pieces',
            },
            {
              backgroundColor: '#FEDF5E',
              image: <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/welcome-tour/funAndEngaging.png')} />,
              title: 'Fun & engaging',
              subtitle: 'We gamified a few things to make learning fun',
            },
          ]}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text htmlFor='signOnEmail'></Text>
        <TextInput
          type="email"
          id="signOnEmail"
          clearButtonMode="while-editing"
          inputMode="email"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          placeholder="Enter your email"
          value={email}
          style={styles.input}
        />
        <View className="my-2" />
        {/* Create an account button */}
        <Pressable
          onPress={() => navigation.navigate('CreateAccount')}
          accessibilityLabel="TODO"
          style={styles.button}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        {/* divider */}
        <View className="flex-row items-center my-4">
          <Separator />
          <Text style={styles.dividerText}>OR</Text>
          <Separator />
        </View>

        {/* Google button */}
        <Pressable
          onPress={() => Alert.alert('Button with adjusted color pressed')}
          accessibilityLabel="TODO"
          style={styles.button}
        >
          <Text style={styles.buttonText}>Continue with Google</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FEDF5E",
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  slider: {
    flexGrow: 2,
    flexShrink: 2,
    flexBasis: 50,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 15
  },
  buttonContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 50,
    paddingLeft: 20,
    paddingRight: 20,
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
  divider: {
    flex: 1,
    height: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
    opacity: .24,
  },
  dividerText: {
    color: "#4B2E4C",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 4,
    marginRight: 4,
  },
  image: {
    width: 250,
    height: 250,
  }
});