
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Manrope-ExtraBold',
    lineHeight:22,
    marginBottom: 24,
    color: '#FAFAFA',
    marginTop:40
  },
  promptLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 20,
    lineHeight:25,
    color: '#FAFAFA',
    fontFamily: 'Manrope-ExtraBold',
  
  },
  surprise: {
    fontSize: 13,
    fontFamily: 'Monrope-Regular',
    color: '#FAFAFA',
    lineHeight:18
  },
  promptInput: {
    borderRadius: 16,
    backgroundColor: '#27272A',
    color: '#fff',
    padding: 16,
    height: 175,
    textAlignVertical: 'top',
  },
  charCount: {
    color: '#71717A',
    fontSize: 12,
    lineHeight:14,
    fontFamily: 'Manrope-Regular',
  },
  styleList: {
    marginVertical: 12,
  },
  styleItem: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    height: 60,
    borderColor: 'transparent',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedStyleItem: {
    borderColor: '#a24bcf',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  styleLabel: {
    color: '#ccc',
    fontSize: 13,
  },
  selectedStyleLabel: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  button: {
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  charCountOverlay: {
  position: 'absolute',
  bottom: 8,
  left: 12,
  fontSize: 12,
  color: '#999',
  fontFamily: 'Manrope-Regular',
}
});

export default styles;

