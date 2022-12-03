import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomTextinput from './src/screens/auth/components/CustomTestInput';
import Signin from './src/screens/auth/components/Signin';

export default function App() {
  return ( <SafeAreaView style={styles.safeArea}>
    
    <StatusBar />
    <Signin />
    
  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
   
    
  },
});
