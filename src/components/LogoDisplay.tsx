import React from 'react';
import { View, Text,StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

type LogoDisplayProps = {
  StyleComponent: React.FC<any>;
  brandName: string;
  fontFamily: string;
  color: string;
  styleName: string;
};

const LogoDisplay: React.FC<LogoDisplayProps> = ({ StyleComponent, brandName, fontFamily, color, styleName }) => (
  <View style={styles.logoCard}>
    <StyleComponent brandName={brandName} fontFamily={fontFamily} color={color} />
    {styleName !== 'No Style' && (
      <Text style={[styles.logoText, { fontFamily, marginTop: 12, color: '#222' }]}>
        {brandName}
      </Text>
    )}
  </View>
);
const styles = StyleSheet.create({

logoCard: {
    width: windowWidth - 48,
    height: windowWidth - 48,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoShape: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  logoText: {
    fontSize: 28,
    color: '#222',
    textAlign: 'center',
  },
  logoShapeText: {
    fontSize: 72,
    color: '#fff',
    textAlign: 'center',
  },

});
export default LogoDisplay;
