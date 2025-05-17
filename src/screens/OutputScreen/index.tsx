import React from 'react';
import {
  View,
  Text,
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

const MonogramLogo = ({ brandName, fontFamily, color }: { brandName: string; fontFamily: string; color: string }) => (
  <View style={[styles.logoShape, { backgroundColor: color, borderRadius: 60, borderWidth: 1, borderColor: '#7E6B6C' }]}>
    <Text style={[styles.logoShapeText, { fontFamily }]}>{brandName[0].toUpperCase()}</Text>
  </View>
);
const Wave = ({ color, style }: { color: string; style?: any }) => (
  <View style={[{
    width: 80,
    height: 10,
    backgroundColor: color,
    borderRadius: 20,
    marginVertical: 3,
  }, style]} />
);

const AbstractLogo = ({ brandName, fontFamily, color }: { brandName: string; fontFamily: string; color: string }) => (
  <View style={{ alignItems: 'center', width: 120, height: 120 }}>
    <Wave color={color} style={{ opacity: 0.7 }} />
    <Wave color={color} style={{ opacity: 0.85 }} />
    <Wave color={color} style={{ opacity: 1 }} />
    <Text style={[styles.logoText, { fontFamily, fontSize: 18, marginTop: 20, color }]}>
      {brandName}
    </Text>
  </View>
);


const MascotLogo = ({ brandName, fontFamily, color }: { brandName: string; fontFamily: string; color: string }) => (
  <View
    style={{
      width: 80,
      height: 80,
      backgroundColor: color,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 12,
    }}
  >
    <View style={{ flexDirection: 'row', width: 40, justifyContent: 'space-between' }}>
      <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#fff' }} />
      <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#fff' }} />
    </View>

    <View
      style={{
        marginTop: 6,
        width: 24,
        height: 4,
        backgroundColor: '#fff',
        borderRadius: 2,
      }}
    />

    <Text
      style={{
        marginTop: 8,
        color: '#fff',
        fontFamily,
        fontSize: 14,
        fontWeight: '600',
      }}
      numberOfLines={1}
    >
      {brandName}
    </Text>
  </View>
);


const NoStyleLogo = ({ brandName, fontFamily }: { brandName: string; fontFamily: string }) => (
  <View style={{ paddingVertical: 20 }}>
    <Text style={[styles.logoText, { fontFamily }]}>{brandName}</Text>
  </View>
);

const styleMap: Record<string, string> = {
  image1: 'Monogram',
  image2: 'Abstract',
  image3: 'Mascot',
  image4: 'No Style',
};


const styleConfigs = {
  Monogram: { component: MonogramLogo, color: '#4A90E2' },
  Abstract: { component: AbstractLogo, color: '#E94E77' },
  Mascot: { component: MascotLogo, color: '#F5A623' },
  'No Style': { component: NoStyleLogo, color: '#222222' },
};

const OutputScreen = ({ route }: Props) => {
  const { prompt, imageKey } = route.params;
  const navigation = useNavigation();

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
  const styleName = styleMap[imageKey] || 'No Style';

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
      <View style={styles.headerRow}>
        <Text style={styles.header}>Your Design</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoCard}>
        <StyleComponent brandName={brandName} fontFamily={fontFamily} color={color} />
        {styleName !== 'No Style' && (
          <Text style={[styles.logoText, { fontFamily, marginTop: 12, color: '#222' }]}>
            {brandName}
          </Text>
        )}
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
          <Text style={styles.styleTagText}>{styleName}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OutputScreen;
