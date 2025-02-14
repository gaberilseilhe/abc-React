import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import C1, { Cabecalho, Corpo, Rodape } from '@/components/C1'

export default function HomeScreen() {
  return (
    // <C1/>
    <view> <Cabecalho />
      <br />
      <Corpo />
      <br />
      <Rodape />
    </view>
  );
}

const styles = StyleSheet.create({

});
