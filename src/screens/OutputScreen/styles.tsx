import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    padding: 24,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
  },
  image: {
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  prompt: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    fontStyle: 'italic',
    maxWidth: '90%',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#a24bcf',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
export default styles;
