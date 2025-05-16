import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import styles from './styles';
import * as Clipboard from 'expo-clipboard';

type OutputScreenRouteProp = RouteProp<RootStackParamList, 'Output'>;

type Props = {
  route: OutputScreenRouteProp;
};

const OutputScreen = ({ route }: Props) => {
  const { prompt, imageKey } = route.params;
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  const imageMap: Record<string, any> = {
    image1: require('../../../assets/images/image1.png'),
    image2: require('../../../assets/images/image2.png'),
    image3: require('../../../assets/images/image3.png'),
    image4: require('../../../assets/images/image4.png'),
  };

  const styleMap: Record<string, string> = {
    image1: 'Monogram',
    image2: 'Abstract',
    image3: 'Mascot',
    image4: 'No Style',
  };

  const handleCopyPrompt = () => {
    Clipboard.setStringAsync(prompt);
    Alert.alert('Copied!', 'Prompt has been copied to clipboard.');
  };

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.headerRow}>
        <Text style={styles.header}>Your Design</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoCard}>
        <Image
          source={imageMap[imageKey] || imageMap['image1']}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.promptBox}>
        <View style={styles.promptHeader}>
          <Text style={styles.promptLabel}>Prompt</Text>
          <TouchableOpacity onPress={handleCopyPrompt}>
            <Text style={styles.copyText}>📋 Copy</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.promptText}>{prompt}</Text>

        <View style={styles.styleTag}>
          <Text style={styles.styleTagText}>{styleMap[imageKey]}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default OutputScreen;
