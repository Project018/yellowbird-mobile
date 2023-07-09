import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/sign-on/Welcome';
import CreateAccount from './screens/sign-on/CreateAccount';
import SignIn from './screens/sign-in/SignIn'
import ForgotPassword from './screens/password/ForgotPassword';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Stack = createNativeStackNavigator();

const navOptions = {
  headerTransparent:true,
  headerTitle:'',
  headerBackTitleVisible:false,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={navOptions} />
        <Stack.Screen name="SignIn" component={SignIn} options={navOptions} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={navOptions} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
