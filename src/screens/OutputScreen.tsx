// src/screens/OutputScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type OutputScreenRouteProp = RouteProp<RootStackParamList, 'Output'>;

type Props = {
  route: OutputScreenRouteProp;
};

const OutputScreen = ({ route }: Props) => {
  const { prompt } = route.params;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Your Logo is Ready!</Text>

        <Image
          source={require('../../assets/mock-image.png')}
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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    padding: 24,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
  },
  image: {
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  prompt: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    fontStyle: 'italic',
    maxWidth: '90%',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#a24bcf',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default OutputScreen;
