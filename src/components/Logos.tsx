import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type LogoProps = {
  brandName: string;
  fontFamily: string;
  color: string;
};

export const MonogramLogo = ({ brandName, fontFamily, color }: LogoProps) => (
  <View style={[styles.monogramLogo, { backgroundColor: color }]}>
    <Text style={[styles.monogramText, { fontFamily }]}>
      {brandName[0].toUpperCase()}
    </Text>
  </View>
);

const Wave = ({ color, style }: { color: string; style?: any }) => (
  <View style={[styles.wave, { backgroundColor: color }, style]} />
);

export const AbstractLogo = ({ brandName, fontFamily, color }: LogoProps) => (
  <View style={styles.abstractContainer}>
    <Wave color={color} style={{ opacity: 0.7 }} />
    <Wave color={color} style={{ opacity: 0.85 }} />
    <Wave color={color} style={{ opacity: 1 }} />
    <Text style={[styles.abstractText, { fontFamily, color }]}>{brandName}</Text>
  </View>
);

export const MascotLogo = ({ brandName, fontFamily, color }: LogoProps) => (
  <View style={[styles.mascotContainer, { backgroundColor: color }]}>
    <View style={styles.mascotEyes}>
      <View style={styles.eye} />
      <View style={styles.eye} />
    </View>
    <View style={styles.mouth} />
    <Text style={[styles.mascotText, { fontFamily }]} numberOfLines={1}>
      {brandName}
    </Text>
  </View>
);

export const NoStyleLogo = ({ brandName, fontFamily }: Omit<LogoProps, 'color'>) => (
  <View style={styles.noStyleContainer}>
    <Text style={[styles.noStyleText, { fontFamily }]}>{brandName}</Text>
  </View>
);

const styles = StyleSheet.create({
  monogramLogo: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#7E6B6C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monogramText: {
    fontSize: 40,
    color: '#fff',
  },
  wave: {
    width: 80,
    height: 10,
    borderRadius: 20,
    marginVertical: 3,
  },
  abstractContainer: {
    alignItems: 'center',
    width: 120,
    height: 120,
  },
  abstractText: {
    fontSize: 18,
    marginTop: 20,
  },
  mascotContainer: {
    width: 80,
    height: 80,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  mascotEyes: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-between',
  },
  eye: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  mouth: {
    marginTop: 6,
    width: 24,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  mascotText: {
    marginTop: 8,
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  noStyleContainer: {
    paddingVertical: 20,
  },
  noStyleText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
