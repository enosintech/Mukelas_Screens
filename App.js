import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import GetStarted from './src/screens/GetStarted';
import StudentLogin from './src/screens/StudentLogin';
import StudentCreateAccount from './src/screens/StudentCreateAccount';
import BusinessLogin from './src/screens/BusinessLogin';
import BusinessCreateAccount from './src/screens/BusinessCreateAccount';
import VerifyOtp from './src/screens/VerifyOtp';
import BusinessProfile from './src/screens/BusinessProfile';
import StudentProfile from './src/screens/StudentProfile';
import StudentMonthlyCalculator from './src/screens/StudentMonthlyCalculator';
import StudentHomeScreen from './src/screens/StudentHomeScreen';
import AddTransaction from './src/screens/AddTransaction';
import StoreScreen from './src/screens/StoreScreen';

export default function App() {
  return (
    <View className="flex-1">
      <StoreScreen />
    </View>
  );
}

