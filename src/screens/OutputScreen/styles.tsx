import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  header: {
    fontSize: 22,
    lineHeight: 28,
    color: '#FAFAFA',
    fontFamily: 'Manrope-ExtraBold',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 22,
  },
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
  logoShapeText: {
    fontSize: 72,
    color: '#fff',
    textAlign: 'center',
  },
  abstractContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  abstractShape: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoText: {
    fontSize: 28,
    color: '#222',
    textAlign: 'center',
  },
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
    color: '#aaa',
    fontSize: 12,
  },
  copyText: {
    color: '#ccc',
    fontSize: 13,
  },
  promptText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 12,
  },
  styleTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#FAFAFA1A',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },
  styleTagText: {
    color: '#fff',
    fontSize: 13,
  },
});

export default styles;
