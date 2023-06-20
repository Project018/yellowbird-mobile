import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-[#FEDF5E]">
       <Text>Yellow Bird</Text>
      <StatusBar style="auto" />
    </View>
  );
}
