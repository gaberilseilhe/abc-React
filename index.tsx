import React from 'react';
import { View, StyleSheet } from 'react-native';

import LoginScreen from '@/components/C1';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: 'orange', flex: 1 }}> 
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  // Aqui você pode adicionar mais estilos, caso necessário
});
