
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

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
    lineHeight: 22,
    marginBottom: 24,
    color: '#FAFAFA',
    marginTop: 40
  },
  promptLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 20,
    lineHeight: 25,
    color: '#FAFAFA',
    fontFamily: 'Manrope-ExtraBold',
  },
  logoStyleLabel: {
    marginTop: 20,
  },
  surprise: {
    fontSize: 13,
    fontFamily: 'Monrope-Regular',
    color: '#FAFAFA',
    lineHeight: 18
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
    lineHeight: 14,
    fontFamily: 'Manrope-Regular',
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
  },
  styleList: {
    marginVertical: 12,
  },
  styleItem: {
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 12,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  flexDirection: 'column', // Dikey hizalama
},

styleIcon: {
  width: 80,
  height: 80,
  resizeMode: 'contain',
},

styleLabel: {
  marginTop: 5,
  fontSize: 13,
  lineHeight: 18,
  fontFamily: 'Manrope-Regular',
  color: '#71717A',
  textAlign: 'center',
},
  selectedStyleLabel: {
    color: '#FAFAFA',
    fontFamily: 'Manrope-Bold',
  },

});

export default styles;

