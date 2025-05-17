import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../App';
import Stars from '../../components/svg/Stars';
import StatusBanner from '../../components/StatusBanner';
import { styleToImageMap, surprisePrompts } from '../../../utils/constants';
import LogoStyleSelector from '../../components/LogoStyleSelector';

type Props = NativeStackScreenProps<RootStackParamList, 'Input'>;

const InputScreen = ({ navigation }: Props) => {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('no-style');
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setStatus('idle');
    });
    return unsubscribe;
  }, [navigation]);

  const handleSurpriseMe = () => {
    const randomItem = surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)];
    setPrompt(randomItem.prompt);
    setSelectedStyle(randomItem.style);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setStatus('processing');

    try {
      const docRef = await addDoc(collection(db, 'logos'), {
        prompt,
        style: selectedStyle,
        status: 'processing',
        createdAt: serverTimestamp(),
      });

      const delay = Math.floor(Math.random() * 30 + 30) * 1000;

      setTimeout(async () => {
        const imageKey = styleToImageMap[selectedStyle] || 'image1';
        await updateDoc(doc(db, 'logos', docRef.id), {
          status: 'done',
          imageKey,
        });

        setStatus('done');
      }, delay);
    } catch (error) {
      console.error('Hata:', error);
      setStatus('error');
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.header}>AI Logo</Text>
        <View style={styles.statusBannerWrapper}>
          <StatusBanner
            status={status}
            prompt={prompt}
            selectedStyle={selectedStyle}
            onRetry={handleGenerate}
            onNavigate={() =>
              navigation.navigate('Output', {
                prompt,
                imageKey: styleToImageMap[selectedStyle] || 'image1',
              })
            }
          />
        </View>
        <View style={styles.promptLabelRow}>
          <Text style={styles.sectionLabel}>Enter Your Prompt</Text>
          <TouchableOpacity onPress={handleSurpriseMe}>
            <Text style={styles.surprise}>🎲 Surprise me</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.promptInputWrapper}>
          <TextInput
            style={styles.promptInput}
            placeholder="A blue lion logo reading 'HEXA' in bold letters"
            placeholderTextColor="#71717A"
            multiline
            maxLength={500}
            value={prompt}
            onChangeText={setPrompt}
          />
          <Text style={styles.charCountOverlay}>{prompt.length}/500</Text>
        </View>
        {/* 
            <TouchableOpacity onPress={() => setStatus('error')} style={{ marginTop: 20, padding: 10, backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>Test Error</Text>
            </TouchableOpacity>
         */}

        <LogoStyleSelector
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleGenerate} disabled={status === 'processing'}>
            <LinearGradient
              colors={['#2938DC', '#943DFF']}
              locations={[0, 0.7]}
              start={[0, 0]}
              end={[1, 1]}
              style={[
                styles.button,
                styles.buttonContent,
                { opacity: status === 'processing' ? 0.5 : 1 }
              ]}
            >
              <Text style={[styles.buttonText, { marginRight: 4 }]}>Create</Text>
              <Stars />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default InputScreen;
