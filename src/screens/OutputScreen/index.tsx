import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import styles from './styles';
import { RootStackParamList } from '../../../App';

type OutputScreenRouteProp = RouteProp<RootStackParamList, 'Output'>;

type Props = {
  route: OutputScreenRouteProp;
};

const OutputScreen = ({ route }: Props) => {
  const { prompt } = route.params;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Your Logo is Ready!</Text>

        <Image
          source={require('../../../assets/mock-image.png')}
          style={[styles.image, { width: windowWidth - 48, height: windowWidth - 48 }]}
          resizeMode="cover"
        />

        <Text style={styles.prompt}>{prompt}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default OutputScreen;
