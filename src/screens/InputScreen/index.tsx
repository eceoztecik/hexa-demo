import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../App';

const windowWidth = Dimensions.get('window').width;

type Props = NativeStackScreenProps<RootStackParamList, 'Input'>;

const logoStyles = [
  { id: 'no-style', label: 'No Style' },
  { id: 'monogram', label: 'Monogram' },
  { id: 'abstract', label: 'Abstract' },
  { id: 'mascot', label: 'Mascot' },
];

const InputScreen = ({ navigation }: Props) => {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('no-style');
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setStatus('idle');
    });
    return unsubscribe;
  }, [navigation]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setStatus('processing');

    const delay = Math.floor(Math.random() * 30 + 30) * 1000;

    setTimeout(() => {
      setStatus('done');
      navigation.navigate('Output', { prompt });
    }, delay);
  };

  const renderStyleItem = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.styleItem,
        selectedStyle === item.id && styles.selectedStyleItem,
      ]}
      onPress={() => setSelectedStyle(item.id)}
    >
      <Text
        style={[
          styles.styleLabel,
          selectedStyle === item.id && styles.selectedStyleLabel,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.header}>AI Logo</Text>

        <View style={styles.promptLabelRow}>
          <Text style={styles.sectionLabel}>Enter Your Prompt</Text>
          <Text style={styles.surprise}>🎲 Surprise me</Text>
        </View>

        <TextInput
          style={styles.promptInput}
          placeholder="A blue lion logo reading 'HEXA' in bold letters"
          placeholderTextColor="#ccc"
          multiline
          maxLength={500}
          value={prompt}
          onChangeText={setPrompt}
        />
        <Text style={styles.charCount}>{prompt.length}/500</Text>

        <Text style={styles.sectionLabel}>Logo Styles</Text>
        <FlatList
          horizontal
          data={logoStyles}
          renderItem={renderStyleItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.styleList}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.buttonContainer}>
          {status === 'idle' && (
            <TouchableOpacity onPress={handleGenerate}>
              <LinearGradient
                colors={['#4b32d0', '#a24bcf']}
                start={[0, 0]}
                end={[1, 1]}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Create ✨</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}

          {status === 'processing' && (
            <View style={[styles.button, { backgroundColor: '#444' }]}>
              <Text style={[styles.buttonText, { color: '#ccc' }]}>Processing...</Text>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};
export default InputScreen;