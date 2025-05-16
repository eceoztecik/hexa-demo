import React from 'react';
import { View, Text, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import styles from './styles';

type OutputScreenRouteProp = RouteProp<RootStackParamList, 'Output'>;

type Props = {
  route: OutputScreenRouteProp;
};

const OutputScreen = ({ route }: Props) => {

  const { prompt, imageKey } = route.params;
  const windowWidth = Dimensions.get('window').width;
  const imageMap: Record<string, any> = {
    image1: require('../../../assets/images/image1.png'),
    image2: require('../../../assets/images/image2.png'),
    image3: require('../../../assets/images/image3.png'),
    image4: require('../../../assets/images/image4.png'),
  };

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.sectionLabel}>Logo Styles</Text>

      <View style={styles.overlay}>
        <Image
          source={imageMap[imageKey] || imageMap['image1']}
          style={[styles.image, { width: windowWidth - 48, height: windowWidth - 48 }]}
          resizeMode="contain"
        />

      </View>
      <View style={styles.promptBox}>
        <Text style={styles.promptText}>{prompt}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default OutputScreen;
