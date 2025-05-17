import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonogramLogo = ({ brandName, fontFamily, color }: any) => (
  <View style={[styles.logoBox, { backgroundColor: color, borderRadius: 40, borderWidth: 1, borderColor: '#7E6B6C' }]}>
    <Text style={[styles.monogramText, { fontFamily }]}>{brandName[0].toUpperCase()}</Text>
  </View>
);

const Wave = ({ color, style }: any) => (
  <View style={[{ width: 60, height: 8, backgroundColor: color, borderRadius: 12, marginVertical: 2 }, style]} />
);

const AbstractLogo = ({ color }: any) => (
  <View style={styles.logoBox}>
    <Wave color={color} style={{ opacity: 0.7 }} />
    <Wave color={color} style={{ opacity: 0.85 }} />
    <Wave color={color} style={{ opacity: 1 }} />
  </View>
);

const MascotLogo = ({ brandName, color }: any) => (
  <View style={[styles.logoBox, { backgroundColor: color, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }]}>
    <Text style={styles.mascotText}>{brandName}</Text>
  </View>
);

const NoStyleLogo = ({ brandName, fontFamily }: any) => (
  <View style={styles.logoBox}>
    <Text style={[styles.noStyleText, { fontFamily }]} numberOfLines={2} ellipsizeMode="tail">
      {brandName}
    </Text>
  </View>
);

const styleMap: any = {
  image1: 'Monogram',
  image2: 'Abstract',
  image3: 'Mascot',
  image4: 'No Style',
};

const styleConfigs: any = {
  Monogram: { component: MonogramLogo, color: '#4A90E2' },
  Abstract: { component: AbstractLogo, color: '#E94E77' },
  Mascot: { component: MascotLogo, color: '#F5A623' },
  'No Style': { component: NoStyleLogo, color: '#222222' },
};

export default function LogoPreview({ prompt, imageKey }: { prompt: string; imageKey: string }) {
  const styleName = styleMap[imageKey] || 'No Style';
  const { component: Component, color } = styleConfigs[styleName];

  const extractBrandName = (prompt: string): string => {
    const match = prompt.match(/(.+?) for/i);
    return match ? match[1].trim() : 'Brand';
  };

  const getFontFromPrompt = (prompt: string): string => {
    if (prompt.toLowerCase().includes('serif')) return 'Manrope-ExtraBold';
    if (prompt.toLowerCase().includes('bold')) return 'Manrope-Bold';
    if (prompt.toLowerCase().includes('minimal')) return 'Manrope-Regular';
    return 'Manrope-SemiBold';
  };

  const brandName = extractBrandName(prompt);
  const fontFamily = getFontFromPrompt(prompt);

  return <Component brandName={brandName} fontFamily={fontFamily} color={color} />;
}

const styles = StyleSheet.create({
  logoBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  monogramText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '900',
  },
  mascotText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 6,
  },
  noStyleText: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
  },
});
