import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: 342,
    height:342,
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 20,
    lineHeight:25,
    color: '#FAFAFA',
    fontFamily: 'Manrope-ExtraBold',
  
  },
  image: {
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  prompt: {
    fontSize: 16,
    color: '#444',
    fontStyle: 'italic',
    textAlign: 'center',
    maxWidth: '90%',
    marginVertical: 12,
  },
  promptBox: {
  backgroundColor: 'rgba(255,255,255,0.1)',
  borderRadius: 12,
  padding: 12,
  maxWidth: '90%',
  minHeight: 60,
  justifyContent: 'center',
},

promptText: {
  color: '#fff',
  fontSize: 16,
},
  button: {
    marginTop: 16,
    backgroundColor: '#a24bcf',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
export default styles;
