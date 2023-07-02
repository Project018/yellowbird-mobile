import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';



import Welcome from './screens/sign-on/Welcome';
import CreateAccount from './screens/sign-on/CreateAccount';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Stack = createNativeStackNavigator();

// const BackButton = () => {
//   return (
//     <Image resizeMode={'contain'} style={{width: 32, height: 32}} source={require('./assets/shared/back.png')} />
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            headerTransparent:true,
            headerTitle:'',
            headerBackTitleVisible:false,
          //   headerLeft: () => (
          //     <HeaderBackButton
          //         labelVisible={false}
          //         tintColor={'#000'}
          //         backImage={BackButton}
          //         // onPress={() => navigation.goBack()}
          //         // onPress={() => navigation.navigate(Welcome)}
          //     />
          // )
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
