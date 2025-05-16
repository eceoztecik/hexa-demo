import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
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
import Stars from '../../components/svg/Stars';

const windowWidth = Dimensions.get('window').width;

type Props = NativeStackScreenProps<RootStackParamList, 'Input'>;
const styleToImageMap: Record<string, string> = {
  monogram: 'image1',
  abstract: 'image2',
  mascot: 'image3',
  'no-style': 'image4',
};

const logoStyles = [
  { id: 'no-style', label: 'No Style' },
  { id: 'monogram', label: 'Monogram' },
  { id: 'abstract', label: 'Abstract' },
  { id: 'mascot', label: 'Mascot' },
];
const surprisePrompts = [
  {
    prompt: "Simple and clean logo",
    style: "monogram",
  },
  {
    prompt: "Retro and vintage style logo",
    style: "abstract",
  },
  {
    prompt: "Playful mascot logo",
    style: "mascot",
  },
  {
    prompt: "Minimalist and modern logo",
    style: "no-style",
  },
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

        navigation.navigate('Output', {
          prompt,
          imageKey,
        });


        setStatus('done');
      }, delay);
    } catch (error) {
      console.error('Hata:', error);
    }
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
          <TouchableOpacity onPress={handleSurpriseMe}>
            <Text style={styles.surprise}>🎲 Surprise me</Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: 'relative' }}>
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
                colors={['#2938DC', '#943DFF']}
                locations={[0, 0.7]}
                start={[0, 0]}
                end={[1, 1]}
                style={[styles.button, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}
              >
                <Text style={[styles.buttonText, { marginRight: 4 }]}>Create</Text>
                <Stars />
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