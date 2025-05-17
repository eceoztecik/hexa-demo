import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LogoPreview from './LogoPreview';
import { styleToImageMap } from '../../utils/constants';
const { height } = Dimensions.get('window');

type StatusBannerProps = {
  status: 'idle' | 'processing' | 'done' | 'error';
  prompt: string;
  selectedStyle: string;
  onRetry: () => void;
  onNavigate: () => void;
};

const StatusBanner = ({
  status,
  prompt,
  selectedStyle,
  onRetry,
  onNavigate,
}: StatusBannerProps) => {
  const imageKey = styleToImageMap[selectedStyle] || 'image1';

  if (status === 'processing') {
    return (
      <View style={[styles.statusBox, styles.statusProcessing, { flexDirection: 'row', alignItems: 'center' }]}>
        <ActivityIndicator size="small" color="#fff" style={{ marginRight: 12 }} />
        <View>
          <Text style={styles.statusText}>Creating Your Design...</Text>
          <Text style={styles.statusSub}>Ready in 2 minutes</Text>
        </View>
      </View>
    );
  }

  if (status === 'done') {
    return (
      <TouchableOpacity onPress={onNavigate} style={styles.gradientWrapper}>
        <LinearGradient
          colors={['#2938DC', '#943DFF']}
          locations={[0, 0.7]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.gradientInner}
        >
          <View style={styles.previewBox}>
            <LogoPreview prompt={prompt} imageKey={imageKey} />
          </View>
          <View style={styles.gradientTextContainer}>
            <Text style={[styles.statusText, { color: '#fff' }]}>✨ Your Design is Ready!</Text>
            <Text style={[styles.statusSub, { color: '#eee' }]}>Tap to see it.</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

    );
  }

  if (status === 'error') {
    return (
      <TouchableOpacity onPress={onRetry} style={styles.errorWrapper}>
        <View style={styles.errorIconBox}>
          <Text style={{ fontSize: 30 }}>❗</Text>
        </View>
        <View style={styles.errorTextBox}>
          <Text style={[styles.statusText, { color: '#fff' }]}>Oops, something went wrong!</Text>
          <Text style={[styles.statusSub, { color: '#eee' }]}>Click to try again</Text>
        </View>
      </TouchableOpacity>

    );
  }

  return null;
}; const styles = StyleSheet.create({
  statusBox: {
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  statusSub: {
    fontSize: 13,
    color: '#ddd',
    marginTop: 4,
  },
  statusProcessing: {
    backgroundColor: '#27272A',
  },
  statusDone: {
    backgroundColor: '#7e3af2',
  },
  statusError: {
    backgroundColor: '#dc2626',
  },
  gradientWrapper: {
    marginTop: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  gradientInner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
  },
  previewBox: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  gradientTextContainer: {
    padding: 16,
    flex: 1,
  },
  errorWrapper: {
    marginTop: 24,
    borderRadius: 16,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  errorIconBox: {
    width: 70,
    height: 70,
    backgroundColor: '#FCA5A5',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  errorTextBox: {
    backgroundColor: '#EF4444',
    flex: 1,
    padding: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default StatusBanner;