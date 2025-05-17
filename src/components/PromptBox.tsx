import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

type PromptBoxProps = {
  prompt: string;
  styleName: string;
  onCopy: () => void;
};

const PromptBox = ({ prompt, styleName, onCopy }: PromptBoxProps) => {
  return (
    <View style={styles.promptBox}>
      <View style={styles.promptHeader}>
        <Text style={styles.promptLabel}>Prompt</Text>
        <TouchableOpacity onPress={onCopy}>
          <Text style={styles.copyText}>📋 Copy</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.promptText}>{prompt}</Text>

      <View style={styles.styleTag}>
        <Text style={styles.styleTagText}>{styleName}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({

promptBox: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 24,
  },
  
  promptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  promptLabel: {
    color: '#FAFAFA',
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
    lineHeight: 20,
  },
  copyText: {
    color: '#A1A1AA',
    fontSize: 11,
    lineHeight:13,
    fontFamily: 'Manrope-Regular',
  },
  promptText: {
    color: '#FAFAFA',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 12,
    fontFamily: 'Manrope-Regular',
  },
  styleTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#FAFAFA1A',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },
  styleTagText: {
    color: '#FAFAFA',
    fontSize: 12,
    fontFamily: 'Manrope-Regular',
    lineHeight: 16,
  },
});
export default PromptBox;
