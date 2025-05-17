import React from 'react';
import {
  ImageBackground,
  Alert,
  View,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import styles from './styles';
import * as Clipboard from 'expo-clipboard';
import LogoDisplay from '../../components/LogoDisplay';
import PromptBox from '../../components/PromptBox';
import { styleConfigs, styleMap } from '../../../utils/styleConfigs';
import Header from '../../components/Header';


type OutputScreenRouteProp = RouteProp<RootStackParamList, 'Output'>;

type Props = {
  route: OutputScreenRouteProp;
};

const OutputScreen = ({ route }: Props) => {
  const { prompt, imageKey } = route.params;

  const extractBrandName = (prompt: string): string => {
    const match = prompt.match(/(.+?) for/i);
    return match ? match[1].trim() : 'Brand Name';
  };

  const getFontFromPrompt = (prompt: string): string => {
    if (prompt.toLowerCase().includes('serif')) return 'Manrope-ExtraBold';
    if (prompt.toLowerCase().includes('bold')) return 'Manrope-Bold';
    if (prompt.toLowerCase().includes('minimal')) return 'Manrope-Regular';
    return 'Manrope-SemiBold';
  };

  const brandName = extractBrandName(prompt);
  const fontFamily = getFontFromPrompt(prompt);
  const styleName = (styleMap[imageKey] || 'No Style') as keyof typeof styleConfigs;

  const StyleComponent = styleConfigs[styleName].component;
  const color = styleConfigs[styleName].color;


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
      <Header title="Your Design" />
      <LogoDisplay
        StyleComponent={StyleComponent}
        brandName={brandName}
        fontFamily={fontFamily}
        color={color}
        styleName={styleName}
      />

      <PromptBox
        prompt={prompt}
        styleName={styleName}
        onCopy={handleCopyPrompt}
      />
    </ImageBackground>
  );
};

export default OutputScreen;